/**
 * CEONIS Kernel — Assessment Service
 *
 * Implements Spec §7. Turns child responses into structured scoring results
 * and misconception diagnoses.
 *
 * EXPERIENCE BIBLE (Articles 2, 6): entirely invisible to the child.
 * Nothing this service computes ever reaches the child's experience directly.
 * The world responds; it does not judge.
 */

import type { KCId, MisconceptionId } from '../domain/core.ts';
import type { AssessmentItem, ResponseOption } from '../domain/content.ts';
import type { AccessibilityProfile } from '../domain/journey.ts';
import { AccessibilityResolver } from './accessibility-resolver.ts';

export interface ItemResponse {
  readonly selectedOptionId: string | null;
  readonly responseMode: string;
  readonly timestamp: string;
  readonly selfCorrected?: boolean;
}

export interface ItemScoringResult {
  readonly itemId: string;
  readonly kcIds: ReadonlyArray<KCId>;
  readonly correct: boolean;
  readonly misconceptionImplied: MisconceptionId | null;
  readonly systemConfidence: number;
  readonly feedback: FeedbackPayload;
  /** If false, the engine MUST NOT update mastery from this result (T3.6). */
  readonly evidenceIsValid: boolean;
}

export interface FeedbackPayload {
  readonly timing: 'immediate' | 'delayed';
  readonly form: string;
}

export class AssessmentService {
  constructor(private readonly resolver: AccessibilityResolver) {}

  scoreItem(item: AssessmentItem, response: ItemResponse, profile: AccessibilityProfile): ItemScoringResult {
    // Step 2 of the learn-cycle: validate evidence channel before scoring.
    const evidenceIsValid = this.resolver.itemIsUsableFor(profile, item);

    if (!evidenceIsValid) {
      return { itemId: item.id, kcIds: item.measuresKcs, correct: false, misconceptionImplied: null, systemConfidence: 0, feedback: { timing: item.feedback.timing, form: item.feedback.form }, evidenceIsValid: false };
    }

    if (item.selfCorrecting && response.selfCorrected === true) {
      return { itemId: item.id, kcIds: item.measuresKcs, correct: true, misconceptionImplied: null, systemConfidence: 0.70, feedback: { timing: item.feedback.timing, form: item.feedback.form }, evidenceIsValid: true };
    }

    if (response.selectedOptionId === null) {
      return { itemId: item.id, kcIds: item.measuresKcs, correct: false, misconceptionImplied: null, systemConfidence: 0.50, feedback: { timing: item.feedback.timing, form: item.feedback.form }, evidenceIsValid: true };
    }

    const selected = item.options.find(o => o.id === response.selectedOptionId);
    if (selected === undefined) {
      throw new Error(`Item ${item.id}: unknown option id "${response.selectedOptionId}"`);
    }

    const isCorrect = selected.kind === 'correct';
    const misconceptionImplied = extractMisconception(selected);
    const systemConfidence = isCorrect ? 0.90 : misconceptionImplied !== null ? 0.90 : 0.60;

    return { itemId: item.id, kcIds: item.measuresKcs, correct: isCorrect, misconceptionImplied, systemConfidence, feedback: { timing: item.feedback.timing, form: item.feedback.form }, evidenceIsValid: true };
  }

  /**
   * [DELIBERATE GAP] Responses matched to items by index.
   * TODO: add itemId to ItemResponse and match by id before multi-item assessments.
   */
  scoreAll(items: ReadonlyArray<AssessmentItem>, responses: ReadonlyArray<ItemResponse>, profile: AccessibilityProfile): ReadonlyArray<ItemScoringResult> {
    return items.map((item, idx) => {
      const response: ItemResponse = responses[idx] ?? {
        selectedOptionId: null,
        responseMode: profile.validEvidenceModes[0] ?? 'unknown',
        timestamp: new Date().toISOString(),
      };
      return this.scoreItem(item, response, profile);
    });
  }
}

function extractMisconception(option: ResponseOption): MisconceptionId | null {
  return option.kind === 'distractor' ? option.implies : null;
}
