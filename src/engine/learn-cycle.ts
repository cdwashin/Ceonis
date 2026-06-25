/**
 * CEONIS Kernel — Learning Journey Engine (Learn-cycle)
 *
 * Implements Spec §5·1. Orchestrates one complete learn-cycle.
 *
 * EXPERIENCE BIBLE — Prime Metaphor:
 * This engine is gravity. It does continuous, precise, essential work,
 * and the child perceives none of it.
 *
 * Imports INTERFACES only — never a specific content object or world.
 * The engine works identically for Literacy, Mathematics, Science, or any
 * future domain (Spec §1 red-flag rule preserved structurally).
 */

import type { JourneyId } from '../domain/core.ts';
import type { ContentActivity, Assessment } from '../domain/content.ts';
import type { LearningJourney, MisconceptionStateRecord, ResponsePatternRecord } from '../domain/journey.ts';
import type { JourneyStore } from '../db/journey-store.ts';
import type { MasteryEstimator, MasteryEvidence } from '../services/mastery-estimator.ts';
import { createInitialMasteryRecord } from '../services/mastery-estimator.ts';
import type { AssessmentService, ItemResponse, ItemScoringResult } from '../services/assessment-service.ts';
import type { RecommendationService, RecommendationResult } from '../services/recommendation-service.ts';
import type { EventBus } from '../services/event-bus.ts';

export interface LearnCycleInput {
  readonly journeyId: JourneyId;
  readonly activity: ContentActivity;
  readonly assessments: ReadonlyArray<Assessment>;
  readonly responses: ReadonlyArray<ItemResponse>;
}

export interface LearnCycleResult {
  readonly updatedJourney: LearningJourney;
  readonly scoringResults: ReadonlyArray<ItemScoringResult>;
  readonly recommendation: RecommendationResult | null;
  readonly logEntryIds: ReadonlyArray<string>;
}

export class LearningJourneyEngine {
  constructor(
    private readonly store: JourneyStore,
    private readonly estimator: MasteryEstimator,
    private readonly assessmentService: AssessmentService,
    private readonly recommendationService: RecommendationService,
    private readonly eventBus: EventBus,
  ) {}

  async runCycle(input: LearnCycleInput): Promise<LearnCycleResult> {
    const logEntryIds: string[] = [];

    // Step 1: Load Journey
    const journey = await this.store.getById(input.journeyId);
    if (journey === null) throw new Error(`Learn-cycle: Journey not found: ${input.journeyId}`);

    await this.log(input.journeyId, 'EvidenceReceived', { activityId: input.activity.id }, logEntryIds);
    await this.eventBus.publish({ kind: 'EvidenceReceived', journeyId: input.journeyId, activityId: input.activity.id });

    // Steps 2 & 3: Validate channels, then score
    const allItems = input.assessments.flatMap(a => a.items);
    const scoringResults = this.assessmentService.scoreAll(allItems, input.responses, journey.accessibility);

    // Step 4: Update mastery
    for (const result of scoringResults) {
      if (!result.evidenceIsValid) continue;
      const ts = input.responses[scoringResults.indexOf(result)]?.timestamp ?? new Date().toISOString();
      const evidence: MasteryEvidence = { correct: result.correct, timestamp: ts, weight: result.systemConfidence };

      for (const kcId of result.kcIds) {
        const logId = makeLogId('mastery', kcId);
        const existing = journey.knowledgeState.find(r => r.kc === kcId);
        const updated = existing !== undefined
          ? this.estimator.update(existing, evidence)
          : createInitialMasteryRecord({ kcId, evidence, logEntryId: logId });

        await this.store.upsertMastery(input.journeyId, { ...updated, evidenceRefs: [...updated.evidenceRefs, logId] });
        await this.log(input.journeyId, 'MasteryChanged', { kcId, newValue: updated.estimate.value, newUncertainty: updated.estimate.uncertainty }, logEntryIds);
        await this.eventBus.publish({ kind: 'MasteryChanged', journeyId: input.journeyId, kcId, newValue: updated.estimate.value, newUncertainty: updated.estimate.uncertainty });
      }
    }

    // Step 5: Update misconception state (core of T3.1)
    for (const result of scoringResults) {
      if (!result.evidenceIsValid) continue;

      if (result.misconceptionImplied !== null && !result.correct) {
        const record: MisconceptionStateRecord = {
          misconception: result.misconceptionImplied,
          status: 'active',
          evidenceRefs: [logEntryIds[logEntryIds.length - 1] ?? ''],
        };
        await this.store.upsertMisconceptionState(input.journeyId, record);
        await this.log(input.journeyId, 'MisconceptionDetected', { misconceptionId: result.misconceptionImplied }, logEntryIds);
        await this.eventBus.publish({ kind: 'MisconceptionDetected', journeyId: input.journeyId, misconceptionId: result.misconceptionImplied });

      } else if (result.correct) {
        // [DELIBERATE GAP] Move all active misconceptions to dormant on correct response.
        // Full resolution requires confront-strategy completion (Handoff §4·B).
        const current = await this.store.getById(input.journeyId);
        if (current !== null) {
          for (const mis of current.misconceptionState) {
            if (mis.status !== 'active') continue;
            await this.store.upsertMisconceptionState(input.journeyId, { ...mis, status: 'dormant' });
          }
        }
      }
    }

    // Step 6: Retention already updated in step 4 via the estimator.

    // Step 7: Observe what helped
    // [DELIBERATE GAP] ResponsePatternObserver not yet a separate service.
    const allValid = scoringResults.filter(r => r.evidenceIsValid);
    const overallCorrect = allValid.length > 0 && allValid.every(r => r.correct);
    if (overallCorrect && input.activity.instructionalModes.includes('explicit')) {
      const pattern: ResponsePatternRecord = { pattern: 'helped_by_worked_example_first', recency: new Date().toISOString(), strength: 0.60, evidenceRefs: [] };
      await this.store.upsertResponsePattern(input.journeyId, pattern);
    }

    // Step 8: Update welfare
    // [DELIBERATE GAP] EngagementObserver not yet a separate service. No time aggregate (Article 4).
    const successRate = allValid.length > 0 ? allValid.filter(r => r.correct).length / allValid.length : 1;
    const fresh = await this.store.getById(input.journeyId);
    if (fresh !== null) {
      const welfare = successRate < fresh.interest.calibration.targetSuccessLow - 0.20 ? 'frustration_suspected' : 'none';
      if (welfare !== fresh.interest.welfare) {
        await this.store.updateInterest(input.journeyId, { ...fresh.interest, welfare });
        if (welfare !== 'none') await this.eventBus.publish({ kind: 'WelfareFlagRaised', journeyId: input.journeyId, flag: welfare });
      }
    }

    // Step 9: Log completion
    await this.log(input.journeyId, 'ActivityCompleted', { activityId: input.activity.id, scoringResultCount: scoringResults.length, validResultCount: allValid.length }, logEntryIds);

    // Step 10: Recommend next
    const journeyForRec = await this.store.getById(input.journeyId);
    if (journeyForRec === null) throw new Error('Journey disappeared mid-cycle');

    const recommendation = this.recommendationService.recommendNext(journeyForRec);
    if (recommendation !== null) {
      await this.log(input.journeyId, 'ActivityRecommended', { activityId: recommendation.activityId, rationale: recommendation.rationale, priorityTier: recommendation.priorityTier }, logEntryIds);
      await this.eventBus.publish({ kind: 'ActivityRecommended', journeyId: input.journeyId, activityId: recommendation.activityId, rationale: recommendation.rationale });
    }

    // Step 11: All events already emitted inline above.
    const finalJourney = await this.store.reload(input.journeyId);
    return { updatedJourney: finalJourney ?? journeyForRec, scoringResults, recommendation, logEntryIds };
  }

  private async log(journeyId: JourneyId, kind: string, detail: Record<string, unknown>, ids: string[]): Promise<void> {
    const id = makeLogId(kind);
    ids.push(id);
    await this.store.appendLog(journeyId, { id, timestamp: new Date().toISOString(), kind, detail });
  }
}

function makeLogId(prefix: string, suffix = ''): string {
  const rand = Math.random().toString(36).slice(2, 7);
  const ts = Date.now().toString(36);
  return suffix ? `${prefix}-${suffix}-${ts}-${rand}` : `${prefix}-${ts}-${rand}`;
}
