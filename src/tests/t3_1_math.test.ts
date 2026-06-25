/**
 * CEONIS Kernel — Mathematics Validation (Math T3.1 Equivalent)
 *
 * Run with: npx tsx src/tests/t3_1_math.test.ts
 */

import { InMemoryJourneyStore } from '../db/journey-store.ts';
import { KnowledgeGraphService } from '../services/knowledge-graph.ts';
import { LinearMasteryEstimator } from '../services/mastery-estimator.ts';
import { AccessibilityResolver } from '../services/accessibility-resolver.ts';
import { AssessmentService } from '../services/assessment-service.ts';
import { RecommendationService } from '../services/recommendation-service.ts';
import { InProcessEventBus } from '../services/event-bus.ts';
import { LearningJourneyEngine } from '../engine/learn-cycle.ts';

import {
  STAGE_EARLY_NUMERACY,
  KC_COUNTING_OBJECTS,
  KC_NUMBER_COMPARISON,
  KC_ADDITION_WITHIN_5,
  MISCONCEPTION_NUMERAL_SIZE,
  LESSON_COUNTING_INTRO,
  LESSON_NUMBER_COMPARISON,
  LESSON_ADDITION_WITHIN_5,
  ASSESSMENT_NUMBER_COMPARISON,
  ITEM_COMPARISON_BASIC,
  ITEM_COMPARISON_NUMERAL_TRAP,
} from '../content/math-minimal.ts';

import {
  KC_PHONEME_SEGMENTATION,
  LESSON_PHONEME_INTRO,
  STAGE_LEARNING_TO_READ,
} from '../content/literacy-minimal.ts';

import { asChildId, asJourneyId, asKCId } from '../domain/core.ts';
import type { AccessibilityProfile, MasteryRecord } from '../domain/journey.ts';
import type { ItemResponse } from '../services/assessment-service.ts';

function assert(condition: boolean, label: string): void {
  if (condition) { console.log(`  ✅  ${label}`); }
  else { console.error(`  ❌  FAIL: ${label}`); throw new Error(`Assertion failed: ${label}`); }
}

async function runMathT3_1(): Promise<void> {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  CEONIS Kernel — Mathematics Validation (Math T3.1 Equivalent)');
  console.log('  Second domain proof: engine generalisation across domains');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // ---- A. Graph validation ----
  console.log('▸ A.  Mathematics KC graph validation...');

  const allKcs = [KC_PHONEME_SEGMENTATION, KC_COUNTING_OBJECTS, KC_NUMBER_COMPARISON, KC_ADDITION_WITHIN_5];
  const graph = new KnowledgeGraphService(allKcs);

  assert(graph.validateGraph().length === 0, 'Combined Literacy + Math graph has no cycles or violations');
  assert(graph.prerequisitesOf(KC_COUNTING_OBJECTS.id).length === 0,             'Counting is a root KC (no prerequisites)');
  assert(graph.prerequisitesOf(KC_NUMBER_COMPARISON.id).includes(KC_COUNTING_OBJECTS.id), 'Comparison requires counting');
  assert(graph.prerequisitesOf(KC_ADDITION_WITHIN_5.id).includes(KC_NUMBER_COMPARISON.id), 'Addition requires comparison');

  const hardGateEdge = graph.getEdge(KC_NUMBER_COMPARISON.id, KC_COUNTING_OBJECTS.id);
  assert(hardGateEdge !== undefined,              'Counting → comparison edge exists');
  assert(hardGateEdge?.hardGate === true,         'Counting → comparison is a hard-gate (Constitution §3.7)');
  assert(hardGateEdge?.masteryThreshold === 0.70, 'Hard-gate threshold is 0.70');

  // ---- B. Hard-gate enforcement ----
  console.log('\n▸ B.  Hard-gate enforcement...');

  const noMastery: ReadonlyArray<MasteryRecord> = [];
  const notReady = graph.isReady(noMastery, KC_NUMBER_COMPARISON.id);
  assert(notReady.ready === false,                                       'Comparison is NOT ready with no mastery');
  assert(notReady.blockingKcs.includes(KC_COUNTING_OBJECTS.id),         'Counting is correctly listed as blocking KC');

  const countingMastered: ReadonlyArray<MasteryRecord> = [{
    kc: KC_COUNTING_OBJECTS.id,
    estimate: { value: 0.85, uncertainty: 0.15 },
    retention: { lastEncountered: new Date().toISOString(), strength: 0.8 },
    evidenceRefs: ['test-evidence'],
  }];
  assert(graph.isReady(countingMastered, KC_NUMBER_COMPARISON.id).ready === true, 'Comparison IS ready once counting is mastered');

  // ---- C. Multi-item id-based matching ----
  console.log('\n▸ C.  Multi-item assessment — id-based matching...');

  const resolver = new AccessibilityResolver();
  const assessmentSvc = new AssessmentService(resolver);

  const profile: AccessibilityProfile = {
    interactionNeeds: [], communicationModalities: ['text'], languages: ['en'],
    validEvidenceModes: ['tap', 'text'], presentationPreferences: ['visual-sets'],
  };

  // Responses submitted out of order — proves id-based matching
  const responsesOutOfOrder: ReadonlyArray<ItemResponse> = [
    { itemId: ITEM_COMPARISON_NUMERAL_TRAP.id, selectedOptionId: 'opt-big-nine', responseMode: 'tap', timestamp: new Date().toISOString() },
    { itemId: ITEM_COMPARISON_BASIC.id,        selectedOptionId: 'opt-7-apples', responseMode: 'tap', timestamp: new Date().toISOString() },
  ];

  const scoringResults = assessmentSvc.scoreAll(ASSESSMENT_NUMBER_COMPARISON.items, responsesOutOfOrder, profile);

  assert(scoringResults.length === 2, 'Both items scored');

  const basicResult = scoringResults.find(r => r.itemId === ITEM_COMPARISON_BASIC.id);
  const trapResult  = scoringResults.find(r => r.itemId === ITEM_COMPARISON_NUMERAL_TRAP.id);

  assert(basicResult !== undefined,                                                          'Basic comparison item scored');
  assert(basicResult?.correct === true,                                                      'Basic comparison: correct answer scored correctly');
  assert(basicResult?.misconceptionImplied === null,                                         'Basic comparison: no misconception on correct answer');
  assert(trapResult !== undefined,                                                            'Numeral-trap item scored');
  assert(trapResult?.correct === false,                                                       'Numeral trap: distractor scored as incorrect');
  assert(trapResult?.misconceptionImplied === MISCONCEPTION_NUMERAL_SIZE.id,                 'Numeral trap: misconception identified from distractor (Math T3.1 signal)');
  assert(basicResult?.itemId !== trapResult?.itemId,                                         'Id-based matching: items matched correctly despite out-of-order input');

  // ---- D. Full learn-cycle ----
  console.log('\n▸ D.  Full learn-cycle — planted misconception detection...');

  const store   = new InMemoryJourneyStore();
  const estimator = new LinearMasteryEstimator();
  const catalog = [LESSON_PHONEME_INTRO, LESSON_COUNTING_INTRO, LESSON_NUMBER_COMPARISON, LESSON_ADDITION_WITHIN_5];
  const recommendationSvc = new RecommendationService(graph, estimator, catalog);
  const eventBus = new InProcessEventBus();
  const engine = new LearningJourneyEngine(store, estimator, assessmentSvc, recommendationSvc, eventBus);

  const journeyId = asJourneyId('test-math-journey-001');
  await store.create({ journeyId, childId: asChildId('test-math-child-001'), stage: STAGE_EARLY_NUMERACY, accessibility: profile });

  // Seed counting mastery so child is ready for comparison
  await store.upsertMastery(journeyId, {
    kc: KC_COUNTING_OBJECTS.id,
    estimate: { value: 0.80, uncertainty: 0.10 },
    retention: { lastEncountered: new Date().toISOString(), strength: 0.75 },
    evidenceRefs: ['seed-evidence'],
  });

  const emittedEvents: string[] = [];
  eventBus.subscribe('MisconceptionDetected', e => { emittedEvents.push(`MisconceptionDetected:${e.misconceptionId}`); });
  eventBus.subscribe('ActivityRecommended',   e => { emittedEvents.push('ActivityRecommended'); console.log(`\n     Recommendation rationale:\n     "${e.rationale}"`); });

  const result = await engine.runCycle({
    journeyId,
    activity: LESSON_NUMBER_COMPARISON,
    assessments: [ASSESSMENT_NUMBER_COMPARISON],
    responses: [
      { itemId: ITEM_COMPARISON_BASIC.id,        selectedOptionId: 'opt-7-apples', responseMode: 'tap', timestamp: new Date().toISOString() },
      { itemId: ITEM_COMPARISON_NUMERAL_TRAP.id, selectedOptionId: 'opt-big-nine', responseMode: 'tap', timestamp: new Date().toISOString() },
    ],
  });

  console.log('');

  const misconState = result.updatedJourney.misconceptionState.find(m => m.misconception === MISCONCEPTION_NUMERAL_SIZE.id);
  assert(misconState !== undefined,        'Misconception record exists in Journey after cycle');
  assert(misconState?.status === 'active', 'Misconception status is "active"');
  assert(emittedEvents.some(e => e.startsWith('MisconceptionDetected')), 'MisconceptionDetected event published');
  assert(result.recommendation !== null,            'Recommendation is not null');
  assert(result.recommendation?.priorityTier === 1, 'Recommendation is Priority 1 (confront)');
  assert(result.recommendation !== null && result.recommendation.rationale.includes('Priority 1'), 'Rationale states Priority 1 (T3.5)');

  const basicScored = result.scoringResults.find(r => r.itemId === ITEM_COMPARISON_BASIC.id);
  const trapScored  = result.scoringResults.find(r => r.itemId === ITEM_COMPARISON_NUMERAL_TRAP.id);
  assert(basicScored?.correct === true,  'Item 1 (basic) scored as correct in cycle');
  assert(trapScored?.correct === false,  'Item 2 (trap) scored as incorrect in cycle');

  const comparisonMastery = result.updatedJourney.knowledgeState.find(r => r.kc === KC_NUMBER_COMPARISON.id);
  assert(comparisonMastery !== undefined,                                   'Mastery record created for comparison KC');
  assert((comparisonMastery?.estimate.uncertainty ?? 1) < 1.0,             'Uncertainty decreased — evidence gathered');
  assert(result.updatedJourney.journeyLog.length > 0,                      'Journey log updated');

  const forbiddenFields = ['workingMemory', 'creativity', 'iq', 'diagnosis', 'streak', 'sessionTime'];
  const keys = Object.keys(result.updatedJourney);
  for (const field of forbiddenFields) {
    assert(!keys.includes(field), `No forbidden field "${field}" (T3.7 — holds in Math domain)`);
  }

  // ---- E. Domain independence ----
  console.log('\n▸ E.  Domain independence — stage filtering...');

  const literacyJourneyId = asJourneyId('test-literacy-journey-001');
  await store.create({ journeyId: literacyJourneyId, childId: asChildId('test-literacy-child-001'), stage: STAGE_LEARNING_TO_READ, accessibility: profile });
  const literacyJourney = await store.getById(literacyJourneyId);
  assert(recommendationSvc.recommendNext(literacyJourney!)?.activityId === LESSON_PHONEME_INTRO.id, 'Literacy-stage child recommended a Literacy activity');

  const mathJourney2Id = asJourneyId('test-math-journey-002');
  await store.create({ journeyId: mathJourney2Id, childId: asChildId('test-math-child-002'), stage: STAGE_EARLY_NUMERACY, accessibility: profile });
  await store.upsertMastery(mathJourney2Id, {
    kc: asKCId('kc-counting-objects'),
    estimate: { value: 0.82, uncertainty: 0.08 },
    retention: { lastEncountered: new Date().toISOString(), strength: 0.8 },
    evidenceRefs: ['seed'],
  });
  const mathJourney2 = await store.getById(mathJourney2Id);
  assert(recommendationSvc.recommendNext(mathJourney2!)?.activityId === LESSON_NUMBER_COMPARISON.id, 'Math-stage child (counting mastered) recommended comparison activity');

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  ✅  MATHEMATICS VALIDATION PASS');
  console.log('      A. KC graph with prerequisite chain — validated');
  console.log('      B. Hard-gate enforcement — confirmed (Constitution §3.7)');
  console.log('      C. Multi-item id-based assessment matching — confirmed');
  console.log('      D. Planted misconception detected → Priority 1 recommended');
  console.log('      E. Domain independence (stage filtering) — confirmed');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n  Engine generalises correctly across Literacy → Mathematics.');
  console.log('  Next step: Opus architecture audit → Science validation\n');
}

runMathT3_1().catch(err => { console.error('\n❌  Unexpected error:', err); throw err; });
