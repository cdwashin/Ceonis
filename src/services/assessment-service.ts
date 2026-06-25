/**
 * CEONIS Kernel — Assessment Service
 *
 * Implements Spec §7. Turns child responses into structured scoring results
 * and misconception diagnoses. This is the service that makes a wrong answer
 * *diagnostic* — when a distractor implies a specific Misconception, the
 * Assessment Service surfaces that implication for the engine to act on.
 *
 * EXPERIENCE BIBLE NOTE (Articles 2, 6):
 * The Assessment Service is a kernel service — entirely invisible to the child.
 * Nothing it computes ever reaches the child's experience directly. Scoring
 * results feed the engine, which expresses consequences through the world —
 * not through verdicts.
 *
 * This service does NOT store anything. It transforms input and returns output.
 * Storage is the engine's responsibility.
 */

import type { KCId, MisconceptionId } from '../domain/core.ts';
import type { AssessmentItem, ResponseOption } from '../domain/content.ts';
import type { AccessibilityProfile } from '../domain/journey.ts';
import { AccessibilityResolver } from './accessibility-resolver.ts';

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------

export interface ItemResponse {
  /**
   * The id of the AssessmentItem this response is for.
   * Required — fixes the positional-matching gap identified in the Opus audit.
   * The engine passes these through; scoreAll matches by id, not array position.
   */
  readonly itemId: string;
  /**
   * The id of the option the child selected (for selected-response items).
   * Null if no selection was made (unanswered).
   */
  readonly selectedOptionId: string | null;
  /**
   * The response mode the child used (e.g. 'tap', 'text', 'speech').
   * Checked against the item's validResponseModes via the Accessibility Resolver.
   */
  readonly responseMode: string;
  /** ISO 8601 timestamp. */
  readonly timestamp: string;
  /** For self-correcting items: did the child correct themselves? */
  readonly selfCorrected?: boolean;
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

export interface ItemScoringResult {
  readonly itemId: string;
  /** KCs this item bears evidence on. */
  readonly kcIds: ReadonlyArray<KCId>;
  readonly correct: boolean;
  /**
   * The specific Misconception the child's wrong answer implies — the
   * diagnostic signal. Null when the answer was correct or when the selected
   * distractor has no misconception mapping (weaker instrument — TODO-3).
   */
  readonly misconceptionImplied: MisconceptionId | null;
  /**
   * How trustworthy this evidence is. Range [0, 1].
   * Passed as weight to the Mastery Estimator.
   */
  readonly systemConfidence: number;
  readonly feedback: FeedbackPayload;
  /**
   * Whether this response came through a valid evidence channel for this child.
   * If false, the engine MUST NOT update mastery from this result (T3.6).
   */
  readonly evidenceIsValid: boolean;
}

export interface FeedbackPayload {
  readonly timing: 'immediate' | 'delayed';
  /**
   * Authored feedback text or template reference.
   * Targets effort, strategy, and process — never ability or bare correctness
   * (Constitution §3, Spec §7). Experience Bible Articles 1 and 6:
   * the world responds, it does not judge.
   */
  readonly form: string;
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export class AssessmentService {
  constructor(private readonly resolver: AccessibilityResolver) {}

  /**
   * Score a single child response against an item.
   *
   * Step 2 of the learn-cycle (Spec §5·1): the Accessibility Resolver is
   * called first. If the response channel is not valid for this child, the
   * result is returned with evidenceIsValid = false, and the engine skips
   * mastery updates for this result entirely (T3.6).
   */
  scoreItem(
    item: AssessmentItem,
    response: ItemResponse,
    profile: AccessibilityProfile,
  ): ItemScoringResult {
    // ---- Step 2: validate evidence channel before scoring ----
    const evidenceIsValid = this.resolver.itemIsUsableFor(profile, item);

    if (!evidenceIsValid) {
      return {
        itemId: item.id,
        kcIds: item.measuresKcs,
        correct: false,
        misconceptionImplied: null,
        systemConfidence: 0,
        feedback: { timing: item.feedback.timing, form: item.feedback.form },
        evidenceIsValid: false,
      };
    }

    // ---- Self-correcting items (Montessori pattern) ----
    if (item.selfCorrecting && response.selfCorrected === true) {
      return {
        itemId: item.id,
        kcIds: item.measuresKcs,
        correct: true,
        misconceptionImplied: null,
        systemConfidence: 0.70,
        feedback: { timing: item.feedback.timing, form: item.feedback.form },
        evidenceIsValid: true,
      };
    }

    // ---- No response given ----
    if (response.selectedOptionId === null) {
      return {
        itemId: item.id,
        kcIds: item.measuresKcs,
        correct: false,
        misconceptionImplied: null,
        systemConfidence: 0.50,
        feedback: { timing: item.feedback.timing, form: item.feedback.form },
        evidenceIsValid: true,
      };
    }

    // ---- Selected-response scoring ----
    const selected = item.options.find(o => o.id === response.selectedOptionId);
    if (selected === undefined) {
      throw new Error(
        `Item ${item.id}: response references unknown option id "${response.selectedOptionId}"`
      );
    }

    const isCorrect = selected.kind === 'correct';
    const misconceptionImplied = extractMisconception(selected);

    let systemConfidence: number;
    if (isCorrect) {
      systemConfidence = 0.90;
    } else if (misconceptionImplied !== null) {
      systemConfidence = 0.90;
    } else {
      systemConfidence = 0.60;
    }

    return {
      itemId: item.id,
      kcIds: item.measuresKcs,
      correct: isCorrect,
      misconceptionImplied,
      systemConfidence,
      feedback: { timing: item.feedback.timing, form: item.feedback.form },
      evidenceIsValid: true,
    };
  }

  /**
   * Score all items in an assessment session.
   *
   * Responses are matched to items by itemId — the positional-matching gap
   * is now closed. Each ItemResponse carries the id of the item it answers;
   * responses are looked up by that id, making multi-item assessments safe
   * regardless of ordering.
   *
   * Items with no corresponding response are treated as unanswered.
   */
  scoreAll(
    items: ReadonlyArray<AssessmentItem>,
    responses: ReadonlyArray<ItemResponse>,
    profile: AccessibilityProfile,
  ): ReadonlyArray<ItemScoringResult> {
    const responseMap = new Map<string, ItemResponse>(
      responses.map(r => [r.itemId, r])
    );

    return items.map(item => {
      const response: ItemResponse = responseMap.get(item.id) ?? {
        itemId: item.id,
        selectedOptionId: null,
        responseMode: profile.validEvidenceModes[0] ?? 'unknown',
        timestamp: new Date().toISOString(),
      };
      return this.scoreItem(item, response, profile);
    });
  }
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

function extractMisconception(option: ResponseOption): MisconceptionId | null {
  return option.kind === 'distractor' ? option.implies : null;
}
