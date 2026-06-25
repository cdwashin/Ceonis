/**
 * CEONIS Kernel — Core shared types
 *
 * Implements the foundational identifier and value types referenced throughout
 * the Object Dictionary (Technical Architecture Specification §3).
 *
 * This file has no project-internal dependencies. Every other module imports
 * from here; nothing here imports from the project.
 *
 * Layer 1 (logical) types only. No persistence, no framework.
 */

type Brand<T, B extends string> = T & { readonly __brand: B };

export type KCId            = Brand<string, 'KCId'>;
export type MisconceptionId = Brand<string, 'MisconceptionId'>;
export type ActivityId      = Brand<string, 'ActivityId'>;
export type AssessmentId    = Brand<string, 'AssessmentId'>;
export type ItemId          = Brand<string, 'ItemId'>;
export type StageId         = Brand<string, 'StageId'>;
export type ChildId         = Brand<string, 'ChildId'>;
export type JourneyId       = Brand<string, 'JourneyId'>;

export const asKCId            = (s: string): KCId            => s as KCId;
export const asMisconceptionId = (s: string): MisconceptionId => s as MisconceptionId;
export const asActivityId      = (s: string): ActivityId      => s as ActivityId;
export const asAssessmentId    = (s: string): AssessmentId    => s as AssessmentId;
export const asItemId          = (s: string): ItemId          => s as ItemId;
export const asStageId         = (s: string): StageId         => s as StageId;
export const asChildId         = (s: string): ChildId         => s as ChildId;
export const asJourneyId       = (s: string): JourneyId       => s as JourneyId;

/**
 * KC behaviours. `skill` converges toward mastery through practice.
 * `breadth` accumulates across many exposures and is never "complete" (e.g. vocabulary).
 */
export type KCType = 'skill' | 'breadth';

/**
 * Instructional mode an activity supports or a KC currently requires.
 * Drives the explicit-vs-inquiry doctrine (Constitution §3.4).
 */
export type InstructionalMode = 'explicit' | 'inquiry' | 'lab' | 'project';

/** The four concrete Content Activity types. */
export type ActivityType = 'lesson' | 'lab' | 'simulation' | 'project';

/** Lifecycle status of a misconception a child may hold. */
export type MisconceptionStatus = 'active' | 'dormant' | 'resolved';

/**
 * Feedback timing (Spec §7, Constitution §3).
 * Immediate for foundational-skill errors; delayed for inquiry/problem-solving.
 */
export type FeedbackTiming = 'immediate' | 'delayed';

/**
 * Mastery estimate — probability WITH uncertainty (Spec §3·B).
 * Never a bare score. The uncertainty field routes low-certainty KCs to
 * assessment before advancement (Spec §6 priority resolution).
 */
export interface MasteryEstimate {
  readonly value: number;
  readonly uncertainty: number;
}

/**
 * Retention state (Spec §3·B).
 * Stored on every MasteryRecord so current recall probability can be computed
 * at any point in time — the platform-wide spaced-repetition substrate.
 */
export interface RetentionState {
  readonly lastEncountered: string;
  readonly strength: number;
}

/**
 * Age range guidance (Spec §3·A — Developmental Stage).
 * Guidance, not a hard gate on individual children.
 * Development is a trajectory, not a birthday (Constitution Article 11).
 */
export interface AgeRangeGuidance {
  readonly minMonths: number;
  readonly maxMonths: number;
}
