/**
 * CEONIS Kernel — Content domain objects
 *
 * Implements the Content Objects of the Object Dictionary
 * (Technical Architecture Specification §3·A).
 *
 * CRITICAL INVARIANT: this file MUST NOT import from journey.ts.
 * Content objects never reference a specific learner. The import graph
 * enforces the dependency direction (Spec §2): content → core only.
 *
 * The ContentActivity interface IS the Curriculum Contract. Every authored
 * activity must satisfy it completely; missing required fields are invalid
 * content that the conformance validator rejects at authoring time (Spec §1).
 */

import type {
  KCId, MisconceptionId, ActivityId, AssessmentId, ItemId, StageId,
  KCType, InstructionalMode, ActivityType, FeedbackTiming, AgeRangeGuidance,
} from './core.ts';

export interface PrerequisiteEdge {
  readonly fromKc: KCId;
  readonly masteryThreshold: number;
  /**
   * If true, this is a Constitution §3.7 literacy hard-gate.
   * The Recommendation Service MUST NOT let interest/autonomy override
   * readiness for hard-gated KCs under any circumstances.
   */
  readonly hardGate: boolean;
}

export interface KnowledgeComponent {
  readonly id: KCId;
  readonly name: string;
  readonly description: string;
  readonly domain: string
