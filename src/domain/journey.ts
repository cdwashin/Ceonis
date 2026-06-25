/**
 * CEONIS Kernel — Learner domain objects (the Learning Journey)
 *
 * Implements the Learner Objects of the Object Dictionary
 * (Technical Architecture Specification §3·B).
 *
 * GOVERNING PRINCIPLE (Constitution Article 1):
 * CEONIS adapts to the child without claiming to know the child.
 *
 * The "NOT stored" lines of the Spec are enforced HERE at the type level.
 * Acceptance Criterion T3.7 requires the boundary to hold structurally,
 * not by policy. The InstructionalResponsePattern closed union makes
 * forbidden trait values unrepresentable — the compiler is the guard.
 *
 * This file MUST NOT import from content.ts or any service.
 */

import type {
  ChildId, JourneyId, KCId, MisconceptionId, StageId,
  MasteryEstimate, RetentionState, MisconceptionStatus,
} from './core.ts';

export interface MasteryRecord {
  readonly kc: KCId;
  readonly estimate: MasteryEstimate;
  readonly retention: RetentionState;
  readonly evidenceRefs: ReadonlyArray<string>;
}

export interface MisconceptionStateRecord {
  readonly misconception: MisconceptionId;
  readonly status: MisconceptionStatus;
  readonly evidenceRefs: ReadonlyArray<string>;
}

/**
 * THE CONSTITUTIONAL ENFORCEMENT POINT for Article 1.
 *
 * Closed vocabulary of INSTRUCTIONAL approaches that helped.
 * No | string escape hatch. A value like "low_working_memory" is not a
 * member of this union and cannot be constructed. The compiler enforces this.
 *
 * Rule for adding a member: "Could a parent read this as a fact about their
 * child's mind rather than a note about what worked this week?"
 * If yes, it does not belong here (Spec §3·B violation test).
 */
export type InstructionalResponsePattern =
  | 'helped_by_chunked_instructions'
  | 'helped_by_visual_before_text'
  | 'helped_by_worked_example_first'
  | 'helped_by_extra_retrieval_practice'
  | 'helped_by_hands_on_exploration'
  | 'helped_by_slower_pacing'
  | 'helped_by_immediate_feedback'
  | 'helped_by_concrete_before_abstract'
  | 'engaged_longer_with_creation_tasks'
  | 'engaged_longer_with_narrative_framing';

export interface ResponsePatternRecord {
  readonly pattern: InstructionalResponsePattern;
  readonly recency: string;
  readonly strength: number;
  readonly evidenceRefs: ReadonlyArray<string>;
}

export interface TopicAffinity {
  readonly topic: string;
  readonly strength: number;
}

export interface ChallengeCalibration {
  readonly targetSuccessLow: number;
  readonly targetSuccessHigh: number;
}

export type WelfareFlag =
  | 'none'
  | 'frustration_suspected'
  | 'disengagement_suspected';

/**
 * Interest and engagement (Spec §3·B).
 * ENFORCED BOUNDARY (Constitution Article 4):
 * No session-length, return-frequency, streak, or retention aggregate.
 * The absence IS the enforcement (T3.7).
 */
export interface InterestEngagementRecord {
  readonly affinities: ReadonlyArray<TopicAffinity>;
  readonly calibration: ChallengeCalibration;
  readonly welfare: WelfareFlag;
}

/**
 * Accessibility profile (Spec §3·B).
 * Read by the INSTRUCTIONAL and ASSESSMENT core — not just the renderer
 * (Constitution Article 8).
 */
export interface AccessibilityProfile {
  readonly interactionNeeds: ReadonlyArray<string>;
  readonly communicationModalities: ReadonlyArray<string>;
  readonly languages: ReadonlyArray<string>;
  readonly validEvidenceModes: ReadonlyArray<string>;
  readonly presentationPreferences: ReadonlyArray<string>;
}

export interface GoalOverride {
  readonly kcId?: KCId;
  readonly domain?: string;
  readonly targetModification: string;
  readonly rationale: string;
  readonly authoredBy: string;
  readonly reviewDate: string;
}

export interface JourneyLogEntry {
  readonly id: string;
  readonly timestamp: string;
  readonly kind: string;
  readonly detail: Readonly<Record<string, unknown>>;
}

/**
 * Learning Journey — the single source of truth about one child (Spec §3·B).
 * Named "Journey" because it stores CHANGE and WHAT-HAS-HELPED — not a
 * profile, not an identity (Constitution §3.1).
 */
export interface LearningJourney {
  readonly id: JourneyId;
  readonly childId: ChildId;
  readonly currentStageId: StageId;
  readonly knowledgeState: ReadonlyArray<MasteryRecord>;
  readonly misconceptionState: ReadonlyArray<MisconceptionStateRecord>;
  readonly whatsHelpingNow: ReadonlyArray<ResponsePatternRecord>;
  readonly interest: InterestEngagementRecord;
  readonly accessibility: AccessibilityProfile;
  readonly goalOverrides: ReadonlyArray<GoalOverride>;
  readonly journeyLog: ReadonlyArray<JourneyLogEntry>;
}

const DEFAULT_CALIBRATION: ChallengeCalibration = {
  targetSuccessLow: 0.60,
  targetSuccessHigh: 0.85,
};

export function createEmptyJourney(args: {
  readonly id: JourneyId;
  readonly childId: ChildId;
  readonly currentStageId: StageId;
  readonly accessibility: AccessibilityProfile;
  readonly initialCalibration?: ChallengeCalibration;
}): LearningJourney {
  return {
    id: args.id,
    childId: args.childId,
    currentStageId: args.currentStageId,
    knowledgeState: [],
    misconceptionState: [],
    whatsHelpingNow: [],
    interest: {
      affinities: [],
      calibration: args.initialCalibration ?? DEFAULT_CALIBRATION,
      welfare: 'none',
    },
    accessibility: args.accessibility,
    goalOverrides: [],
    journeyLog: [],
  };
}
