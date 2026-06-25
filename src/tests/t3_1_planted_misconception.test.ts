/**
 * CEONIS Kernel — Acceptance Criterion T3.1
 *
 * Run with: npx tsx src/tests/t3_1_planted_misconception.test.ts
 *
 * Also exercises: T1.1, T1.3, T1.4, T2.5, T3.5, T3.7
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
  STAGE_LEARNING_TO_READ,
  KC_PHONEME_SEGMENTATION,
  MISCONCEPTION_LETTER_NAMES,
  LESSON_PHONEME_INTRO,
  ASSESSMENT_PHONEME_CVC,
  ITEM_CAT_SEGMENTATION,
} from '../content/literacy-minimal.ts';
import { asChildId, asJourneyId } from '../domain/core.ts';
import type { AccessibilityProfile } from '../domain/journey.ts';
import type { ItemResponse } from '../services/assessment-service.ts';

function assert(condition: boolean, label: string): void {
  if (condition) { console.log(`  ✅  ${label}`); }
  else { console.error(`  ❌  FAIL: ${label}`); throw new Error(`Assertion failed: ${label}`); }
}

async function runT3_1(): Promise<void> {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  CEONIS Kernel — Acceptance Criterion T3.1');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const store             = new InMemoryJourneyStore();
  const graph             = new KnowledgeGraphService([KC_PHONEME_SEGMENTATION]);
  const estimator         = new LinearMasteryEstimator();
  const resolver          = new AccessibilityResolver();
  const assessmentSvc     = new AssessmentService(resolver);
  const recommendationSvc = new RecommendationService(graph, estimator, [LESSON_PHONEME_INTRO]);
  const eventBus          = new InProcessEventBus();
  const engine            = new LearningJourneyEngine(store, estimator, assessmentSvc, recommendationSvc, eventBus);

  console.log('▸ T1.1  Cold-start...');
  const profile: AccessibilityProfile = {
    interactionNeeds: [], communicationModalities: ['text'], languages: ['en'],
    validEvidenceModes: ['tap', 'text'], presentationPreferences: ['visual-diagram'],
  };
  const initialJourney = await store.create({
    journeyId: asJourneyId('test-journey-001'),
    childId: asChildId('test-child-001'),
    stage: STAGE_LEARNING_TO_READ,
    accessibility: profile,
  });
  assert(initialJourney !== null,                         'Journey created from empty state');
  assert(initialJourney.knowledgeState.length === 0,     'Journey starts with no mastery records');
  assert(initialJourney.misconceptionState.length === 0, 'Journey starts with no misconception state');
  assert(initialJourney.journeyLog.length === 0,         'Journey log starts empty');

  console.log('\n▸ T2.5  Graph validation...');
  assert(graph.validateGraph().length === 0, 'KC graph has no cycles or violations');

  console.log('\n▸      Readiness check...');
  const readiness = graph.isReady([], KC_PHONEME_SEGMENTATION.id);
  assert(readiness.ready === true,     'Root KC is ready with no prerequisites');
  assert(readiness.confidence === 1.0, 'Root KC has full confidence');

  const emittedEvents: string[] = [];
  eventBus.subscribe('MisconceptionDetected', e => { emittedEvents.push(`MisconceptionDetected:${e.misconceptionId}`); });
  eventBus.subscribe('ActivityRecommended',   e => { emittedEvents.push('ActivityRecommended'); console.log(`\n     Rationale: "${e.rationale}"`); });

  console.log('\n▸ T3.1  Running learn-cycle — child selects misconception distractor...');
  const misconceptionResponse: ItemResponse = {
    itemId: ITEM_CAT_SEGMENTATION.id,
    selectedOptionId: 'opt-distractor-letter-names',
    responseMode: 'tap',
    timestamp: new Date().toISOString(),
  };
  const result = await engine.runCycle({
    journeyId: asJourneyId('test-journey-001'),
    activity: LESSON_PHONEME_INTRO,
    assessments: [ASSESSMENT_PHONEME_CVC],
    responses: [misconceptionResponse],
  });
  console.log('');

  const misconState = result.updatedJourney.misconceptionState.find(m => m.misconception === MISCONCEPTION_LETTER_NAMES.id);
  assert(misconState !== undefined,          'Misconception record exists in Journey');
  assert(misconState?.status === 'active',   'Misconception status is "active"');
  assert(emittedEvents.some(e => e.startsWith('MisconceptionDetected')), 'MisconceptionDetected event published');
  assert(result.recommendation !== null,     'Recommendation is not null');
  assert(result.recommendation?.priorityTier === 1, 'Recommendation is Priority 1');
  assert(result.recommendation !== null && result.recommendation.rationale.includes('Priority 1'), 'Rationale states Priority 1 (T3.5)');
  assert(result.updatedJourney.journeyLog.length > 0, 'Journey log updated (T1.3)');

  const masteryRecord = result.updatedJourney.knowledgeState.find(r => r.kc === KC_PHONEME_SEGMENTATION.id);
  assert(masteryRecord !== undefined,                                           'Mastery record created (T1.4)');
  assert(masteryRecord !== undefined && masteryRecord.estimate.value < 0.50,    'Mastery low after incorrect response (T1.4)');
  assert(masteryRecord !== undefined && masteryRecord.estimate.uncertainty < 1.0, 'Uncertainty decreased (T1.4)');

  const forbidden = ['workingMemory','creativity','iq','intelligenceScore','diagnosis','attentionSpan','cognitiveStyle','sessionTime','streak','totalTimeOnPlatform','returnFrequency'];
  const keys = Object.keys(result.updatedJourney);
  for (const field of forbidden) {
    assert(!keys.includes(field), `Journey does not contain forbidden field "${field}" (T3.7)`);
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  ✅  T3.1 PASS — misconception detected, Priority 1 recommended');
  console.log('      Sub-criteria: T1.1, T1.3, T1.4, T2.5, T3.5, T3.7');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

runT3_1().catch(err => { console.error('\n❌  Unexpected error:', err); throw err; });
