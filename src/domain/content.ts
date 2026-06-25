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
  readonly domain: string;
  readonly kcType: KCType;
  readonly prerequisites: ReadonlyArray<PrerequisiteEdge>;
  readonly developmentalSuitability: ReadonlyArray<StageId>;
  readonly misconceptionIds: ReadonlyArray<MisconceptionId>;
}

export interface Misconception {
  readonly id: MisconceptionId;
  readonly name: string;
  readonly description: string;
  readonly kcId: KCId;
  /**
   * TODO(handoff-B): tighten to ActivityId when confront-strategy activities
   * are defined in the Curriculum Authoring Standard.
   */
  readonly confrontStrategyRef: string;
}

/**
 * A single selectable response option.
 * Correct options carry no misconception. Distractor options carry exactly
 * one — the diagnostic link (Spec §3·A, T3.1).
 */
export type ResponseOption =
  | { readonly kind: 'correct';    readonly id: string; readonly label: string }
  | { readonly kind: 'distractor'; readonly id: string; readonly label: string;
      readonly implies: MisconceptionId };

export interface FeedbackSpec {
  readonly timing: FeedbackTiming;
  readonly form: string;
}

export interface AssessmentItem {
  readonly id: ItemId;
  readonly prompt: string;
  readonly measuresKcs: ReadonlyArray<KCId>;
  readonly options: ReadonlyArray<ResponseOption>;
  /**
   * Which response channels yield VALID evidence for this item.
   * The Accessibility Resolver intersects this with the child's valid modes
   * before scoring (Spec §5·1 step 2, Acceptance Criterion T3.6).
   */
  readonly validResponseModes: ReadonlyArray<string>;
  readonly feedback: FeedbackSpec;
  readonly selfCorrecting: boolean;
}

export interface Assessment {
  readonly id: AssessmentId;
  readonly items: ReadonlyArray<AssessmentItem>;
}

export interface ParentExtension {
  readonly kind: 'conversation' | 'activity' | 'book' | 'experiment' | 'outing';
  readonly description: string;
}

/**
 * Content Activity — the Curriculum Contract (Spec §3·A).
 * Every authored activity must declare ALL required fields.
 * The conformance validator rejects activities missing any required field
 * (Spec §1 red-flag rule).
 */
export interface ContentActivity {
  readonly id: ActivityId;
  readonly title: string;
  readonly activityType: ActivityType;

  readonly teachesKcs: ReadonlyArray<KCId>;
  readonly requiresKcs: ReadonlyArray<KCId>;
  readonly instructionalModes: ReadonlyArray<InstructionalMode>;
  /**
   * Multiple means of representation — a CONTRACT REQUIREMENT (Constitution Article 8).
   * TODO(handoff-C): tighten to a closed union when the Curriculum Authoring Standard
   * defines the vocabulary.
   */
  readonly representations: ReadonlyArray<string>;
  readonly responseModes: ReadonlyArray<string>;
  readonly developmentalSuitability: ReadonlyArray<StageId>;
  readonly assessmentIds: ReadonlyArray<AssessmentId>;

  readonly parentExtensions?: ReadonlyArray<ParentExtension>;
  readonly offlineActivities?: ReadonlyArray<string>;
  readonly creativeApplications?: ReadonlyArray<string>;
  readonly crossWorldBridges?: ReadonlyArray<ActivityId>;
}

export interface DevelopmentalStage {
  readonly id: StageId;
  readonly name: string;
  readonly ageGuidance: AgeRangeGuidance;
  readonly interactionModel: string;
  readonly adultInvolvementModel: string;
  readonly successMetrics: ReadonlyArray<string>;
}
