/**
 * CEONIS Kernel — Knowledge Graph Service
 *
 * Implements Spec §4. Owns the KC graph and answers the readiness question.
 *
 * [L2] In-memory adjacency map. In production, loaded from the
 * prerequisite_edge Postgres table at startup.
 *
 * Cycle detection uses Kahn's algorithm (topological sort).
 * A cycle is invalid content rejected at authoring time (T2.5).
 */

import type { KCId } from '../domain/core.ts';
import type { KnowledgeComponent, PrerequisiteEdge } from '../domain/content.ts';
import type { MasteryRecord } from '../domain/journey.ts';

export interface ReadinessResult {
  readonly ready: boolean;
  readonly confidence: number;
  readonly blockingKcs: ReadonlyArray<KCId>;
}

export interface GraphViolation {
  readonly kind: 'cycle' | 'missing_node' | 'self_loop';
  readonly description: string;
  readonly involvedIds: ReadonlyArray<KCId>;
}

/**
 * [DELIBERATE GAP] Mastery threshold above which a KC is considered complete.
 * 0.95 is the simplest threshold. Calibrate against Literacy validation data.
 */
const MASTERY_COMPLETE_THRESHOLD = 0.95;

export class KnowledgeGraphService {
  private readonly edges: ReadonlyMap<KCId, ReadonlyArray<PrerequisiteEdge>>;
  private readonly nodes: ReadonlySet<KCId>;

  constructor(kcs: ReadonlyArray<KnowledgeComponent>) {
    const edges = new Map<KCId, ReadonlyArray<PrerequisiteEdge>>();
    const nodes = new Set<KCId>();
    for (const kc of kcs) {
      nodes.add(kc.id);
      edges.set(kc.id, kc.prerequisites);
    }
    this.edges = edges;
    this.nodes = nodes;
  }

  isReady(masteryRecords: ReadonlyArray<MasteryRecord>, kcId: KCId): ReadinessResult {
    const prereqs = this.edges.get(kcId) ?? [];
    if (prereqs.length === 0) return { ready: true, confidence: 1.0, blockingKcs: [] };

    const masteryMap = new Map<KCId, MasteryRecord>();
    for (const r of masteryRecords) masteryMap.set(r.kc, r);

    const blockingKcs: KCId[] = [];
    let minConfidence = 1.0;

    for (const edge of prereqs) {
      const record = masteryMap.get(edge.fromKc);
      if (record === undefined) {
        blockingKcs.push(edge.fromKc);
        minConfidence = 0;
        continue;
      }
      const ratio = Math.min(1, record.estimate.value / edge.masteryThreshold);
      const certainty = (1 - record.estimate.uncertainty) * ratio;
      minConfidence = Math.min(minConfidence, certainty);
      if (record.estimate.value < edge.masteryThreshold) blockingKcs.push(edge.fromKc);
    }

    return { ready: blockingKcs.length === 0, confidence: minConfidence, blockingKcs };
  }

  prerequisitesOf(kcId: KCId): ReadonlyArray<KCId> {
    return (this.edges.get(kcId) ?? []).map(e => e.fromKc);
  }

  dependentsOf(kcId: KCId): ReadonlyArray<KCId> {
    const result: KCId[] = [];
    for (const [id, prereqs] of this.edges) {
      if (prereqs.some(e => e.fromKc === kcId)) result.push(id);
    }
    return result;
  }

  readyFrontier(masteryRecords: ReadonlyArray<MasteryRecord>): ReadonlyArray<KCId> {
    const mastered = new Set<KCId>(
      masteryRecords.filter(r => r.estimate.value >= MASTERY_COMPLETE_THRESHOLD).map(r => r.kc)
    );
    const frontier: KCId[] = [];
    for (const kcId of this.nodes) {
      if (!mastered.has(kcId) && this.isReady(masteryRecords, kcId).ready) frontier.push(kcId);
    }
    return frontier;
  }

  validateGraph(): ReadonlyArray<GraphViolation> {
    const violations: GraphViolation[] = [];

    for (const [kcId, prereqs] of this.edges) {
      for (const edge of prereqs) {
        if (edge.fromKc === kcId) {
          violations.push({ kind: 'self_loop', description: `KC ${kcId} lists itself as a prerequisite`, involvedIds: [kcId] });
        }
        if (!this.nodes.has(edge.fromKc)) {
          violations.push({ kind: 'missing_node', description: `KC ${kcId} requires ${edge.fromKc} which does not exist`, involvedIds: [kcId, edge.fromKc] });
        }
      }
    }

    const inDegree = new Map<KCId, number>();
    for (const id of this.nodes) inDegree.set(id, 0);
    for (const [kcId, prereqs] of this.edges) inDegree.set(kcId, prereqs.length);

    const queue: KCId[] = [];
    for (const [id, deg] of inDegree) { if (deg === 0) queue.push(id); }

    let processed = 0;
    while (queue.length > 0) {
      const node = queue.shift();
      if (node === undefined) break;
      processed++;
      for (const [kcId, prereqs] of this.edges) {
        if (prereqs.some(e => e.fromKc === node)) {
          const newDeg = (inDegree.get(kcId) ?? 0) - 1;
          inDegree.set(kcId, newDeg);
          if (newDeg === 0) queue.push(kcId);
        }
      }
    }

    if (processed < this.nodes.size) {
      const cycleNodes = [...this.nodes].filter(id => (inDegree.get(id) ?? 0) > 0);
      violations.push({ kind: 'cycle', description: `Prerequisite cycle detected among ${cycleNodes.length} KC(s)`, involvedIds: cycleNodes });
    }

    return violations;
  }

  getEdge(dependentKc: KCId, prerequisiteKc: KCId): PrerequisiteEdge | undefined {
    return (this.edges.get(dependentKc) ?? []).find(e => e.fromKc === prerequisiteKc);
  }

  hasKc(kcId: KCId): boolean {
    return this.nodes.has(kcId);
  }
}
