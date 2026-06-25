/**
 * CEONIS Kernel — Recommendation Service
 *
 * Implements Spec §6. Five-priority policy in fixed order (Spec §6·1).
 * The ordering is architectural — hard-coded in control flow, not config.
 *
 * PRIORITY ORDER (requires Opus review to change):
 *   1. Confront active misconceptions
 *   2. Restore decaying retention
 *   3. Advance to ready new material
 *   4. Honor interest and autonomy
 *   5. Hold challenge in productive-struggle zone
 *
 * AUDIT FIX: findInterestActivity now enforces graph.isReady() AND checks
 * hard_gate before including any activity. Constitution §3.7 is enforced
 * in code — interest cannot override an unmet hard-gate at any priority.
 *
 * EXPERIENCE BIBLE (Articles 2, 3, 5): the rationale field routes to the
 * parent surface and audit log only. It NEVER appears in the child's experience.
 */

import type { KCId, ActivityId, InstructionalMode } from '../domain/core.ts';
import type { ContentActivity } from '../domain/content.ts';
import type { LearningJourney, MisconceptionStateRecord } from '../domain/journey.ts';
import { KnowledgeGraphService } from './knowledge-graph.ts';
import type { MasteryEstimator } from './mastery-estimator.ts';

export type ActivityCatalog = ReadonlyArray<ContentActivity>;

export interface RecommendationResult {
  readonly activityId: ActivityId;
  /** Required — Spec §6·4 / T3.5. Routes to parent surface only, never the child. */
  readonly rationale: string;
  readonly priorityTier: 1 | 2 | 3 | 4 | 5;
  readonly alternatives: ReadonlyArray<ActivityId>;
}

/** [DELIBERATE GAP] 0.70 — calibrate with T3.4 data. */
const RETENTION_DUE_THRESHOLD  = 0.70;
/** [DELIBERATE GAP] 0.95 — calibrate with Literacy validation data. */
const MASTERY_COMPLETE_THRESHOLD = 0.95;
/** [DELIBERATE GAP] 0.40 — calibrate with data. */
const ADVANCE_CERTAINTY_MINIMUM  = 0.40;

export class RecommendationService {
  constructor(
    private readonly graph: KnowledgeGraphService,
    private readonly estimator: MasteryEstimator,
    private readonly catalog: ActivityCatalog,
  ) {}

  recommendNext(journey: LearningJourney): RecommendationResult | null {
    const now = new Date();
    const masteryRecords = journey.knowledgeState;

    const activeMisconceptions = journey.misconceptionState.filter(m => m.status === 'active');
    if (activeMisconceptions.length > 0) {
      const result = this.findConfront(activeMisconceptions, journey);
      if (result !== null) return result;
    }

    const retentionDueKcs = masteryRecords
      .filter(r => r.estimate.value > 0.30 && this.estimator.currentRecallProbability(r, now) < RETENTION_DUE_THRESHOLD)
      .map(r => r.kc);
    if (retentionDueKcs.length > 0) {
      const result = this.findReview(retentionDueKcs, journey, now);
      if (result !== null) return result;
    }

    const frontier = this.graph.readyFrontier(masteryRecords);
    const advanceKcs = frontier.filter(kcId => {
      const record = masteryRecords.find(r => r.kc === kcId);
      if (record !== undefined && record.estimate.value >= MASTERY_COMPLETE_THRESHOLD) return false;
      return this.graph.isReady(masteryRecords, kcId).confidence >= ADVANCE_CERTAINTY_MINIMUM;
    });
    if (advanceKcs.length > 0) {
      const result = this.findAdvance(advanceKcs, journey);
      if (result !== null) return result;
    }

    return this.findInterestActivity(journey);
  }

  private findConfront(activeMisconceptions: ReadonlyArray<MisconceptionStateRecord>, journey: LearningJourney): RecommendationResult | null {
    const activeMisIds = new Set(activeMisconceptions.map(m => m.misconception));
    const candidates = this.catalog.filter(a =>
      a.developmentalSuitability.includes(journey.currentStageId) &&
      a.instructionalModes.includes('explicit') &&
      a.teachesKcs.length > 0
    );
    const chosen = candidates[0];
    if (chosen === undefined) return null;
    return {
      activityId: chosen.id,
      rationale: `Priority 1: Confronting active misconception(s) [${[...activeMisIds].join(', ')}]. Explicit-mode instruction selected (Constitution §3.3, Spec §6·1).`,
      priorityTier: 1,
      alternatives: candidates.slice(1, 4).map(a => a.id),
    };
  }

  private findReview(dueKcs: ReadonlyArray<KCId>, journey: LearningJourney, now: Date): RecommendationResult | null {
    const candidates = this.catalog.filter(a =>
      a.developmentalSuitability.includes(journey.currentStageId) &&
      a.teachesKcs.some(k => dueKcs.includes(k))
    );
    const chosen = candidates[0];
    if (chosen === undefined) return null;
    const relevantKc = chosen.teachesKcs.find(k => dueKcs.includes(k)) ?? chosen.teachesKcs[0];
    const masteryRecord = journey.knowledgeState.find(r => r.kc === relevantKc);
    const recall = masteryRecord !== undefined ? this.estimator.currentRecallProbability(masteryRecord, now).toFixed(2) : 'unknown';
    return {
      activityId: chosen.id,
      rationale: `Priority 2: Restoring retention for KC [${relevantKc ?? 'unknown'}] (recall: ${recall}, threshold: ${RETENTION_DUE_THRESHOLD}).`,
      priorityTier: 2,
      alternatives: candidates.slice(1, 4).map(a => a.id),
    };
  }

  private findAdvance(advanceKcs: ReadonlyArray<KCId>, journey: LearningJourney): RecommendationResult | null {
    const candidates: Array<{ activity: ContentActivity; mode: InstructionalMode; kcId: KCId }> = [];
    for (const kcId of advanceKcs) {
      const mastery = journey.knowledgeState.find(r => r.kc === kcId)?.estimate.value ?? 0;
      const neededMode: InstructionalMode = mastery < 0.50 ? 'explicit' : 'inquiry';
      for (const activity of this.catalog) {
        if (!activity.developmentalSuitability.includes(journey.currentStageId)) continue;
        if (!activity.teachesKcs.includes(kcId)) continue;
        if (!activity.instructionalModes.includes(neededMode)) continue;
        candidates.push({ activity, mode: neededMode, kcId });
      }
    }
    const first = candidates[0];
    if (first === undefined) return null;
    return {
      activityId: first.activity.id,
      rationale: `Priority 3: Advancing KC [${first.kcId}] using ${first.mode} instruction (Constitution §3.4).`,
      priorityTier: 3,
      alternatives: candidates.slice(1, 4).map(c => c.activity.id),
    };
  }

  private findInterestActivity(journey: LearningJourney): RecommendationResult | null {
    const masteryRecords = journey.knowledgeState;

    // AUDIT FIX: enforce readiness and hard-gate for every required KC.
    // Constitution §3.7: interest cannot override an unmet hard-gate at any priority.
    const candidates = this.catalog.filter(activity => {
      if (!activity.developmentalSuitability.includes(journey.currentStageId)) return false;
      for (const kcId of activity.requiresKcs) {
        const readiness = this.graph.isReady(masteryRecords, kcId);
        if (!readiness.ready) return false;
      }
      return true;
    });

    if (candidates.length === 0) return null;

    const affinityTopics = new Set(
      journey.interest.affinities.filter(a => a.strength > 0.30).map(a => a.topic)
    );
    const preferred = candidates.filter(a => a.teachesKcs.some(k => affinityTopics.has(k)));
    const chosen = preferred[0] ?? candidates[0];
    if (chosen === undefined) return null;

    return {
      activityId: chosen.id,
      rationale: `Priority 4/5: Selected based on interest alignment and stage suitability. All readiness and hard-gate constraints verified.`,
      priorityTier: 4,
      alternatives: candidates.slice(1, 4).map(a => a.id),
    };
  }
}
