/**
 * CEONIS Kernel — Minimum Mathematics Content (Math T3.1 Validation Scaffold)
 *
 * KC GRAPH:
 *   kc-counting-objects (root)
 *       ↓ hard-gate (mastery ≥ 0.70)
 *   kc-number-comparison
 *       ↓ soft gate (mastery ≥ 0.70)
 *   kc-addition-within-5
 *
 * This is NOT production curriculum.
 */

import {
  asKCId, asMisconceptionId, asActivityId, asAssessmentId, asItemId, asStageId,
} from '../domain/core.ts';
import type {
  KnowledgeComponent, Misconception, ContentActivity,
  Assessment, AssessmentItem, DevelopmentalStage,
} from '../domain/content.ts';

export const STAGE_EARLY_NUMERACY: DevelopmentalStage = {
  id: asStageId('stage-early-numeracy'),
  name: 'Early Numeracy',
  ageGuidance: { minMonths: 48, maxMonths: 84 },
  interactionModel: 'hands-on-guided',
  adultInvolvementModel: 'co-present',
  successMetrics: ['one-to-one-correspondence', 'cardinality', 'comparison_accuracy', 'addition_fluency'],
};

export const KC_COUNTING_OBJECTS: KnowledgeComponent = {
  id: asKCId('kc-counting-objects'),
  name: 'Counting Objects — One-to-One Correspondence',
  description:
    'The child counts a set of up to 10 objects by touching or moving each ' +
    'object once and assigning exactly one number name to each. The last number ' +
    'said represents the total (cardinality principle). ' +
    'Mastery: consistent accurate counting of novel sets of 1–10 objects.',
  domain: 'mathematics',
  kcType: 'skill',
  prerequisites: [],
  developmentalSuitability: [asStageId('stage-early-numeracy')],
  misconceptionIds: [],
};

export const KC_NUMBER_COMPARISON: KnowledgeComponent = {
  id: asKCId('kc-number-comparison'),
  name: 'Number Comparison — More, Fewer, Equal',
  description:
    'The child compares two sets or numerals and correctly identifies which is ' +
    'more, fewer, or whether they are equal. ' +
    'Mastery: consistent correct comparison of sets up to 10 and their numerals.',
  domain: 'mathematics',
  kcType: 'skill',
  prerequisites: [
    {
      fromKc: asKCId('kc-counting-objects'),
      masteryThreshold: 0.70,
      hardGate: true,
    },
  ],
  developmentalSuitability: [asStageId('stage-early-numeracy')],
  misconceptionIds: [asMisconceptionId('mis-numeral-size-not-quantity')],
};

export const KC_ADDITION_WITHIN_5: KnowledgeComponent = {
  id: asKCId('kc-addition-within-5'),
  name: 'Addition Within 5',
  description:
    'The child combines two groups of objects and finds the total, for all ' +
    'combinations summing to 5 or less. ' +
    'Mastery: consistent correct answers for all addition facts to 5.',
  domain: 'mathematics',
  kcType: 'skill',
  prerequisites: [
    {
      fromKc: asKCId('kc-number-comparison'),
      masteryThreshold: 0.70,
      hardGate: false,
    },
  ],
  developmentalSuitability: [asStageId('stage-early-numeracy')],
  misconceptionIds: [],
};

export const MISCONCEPTION_NUMERAL_SIZE: Misconception = {
  id: asMisconceptionId('mis-numeral-size-not-quantity'),
  name: 'Confuses Numeral Visual Size with Quantity',
  description:
    'Child judges which number is "more" based on the visual appearance of the ' +
    'written numeral rather than the quantity it represents.',
  kcId: asKCId('kc-number-comparison'),
  confrontStrategyRef: 'confront-numeral-size-vs-quantity-pending-authoring-standard',
};

export const ITEM_COMPARISON_BASIC: AssessmentItem = {
  id: asItemId('item-math-compare-basic-001'),
  prompt: 'Which group has more? A group of 3 apples or a group of 7 apples?',
  measuresKcs: [asKCId('kc-number-comparison')],
  options: [
    { kind: 'correct',    id: 'opt-7-apples', label: '7 apples — the bigger group' },
    { kind: 'distractor', id: 'opt-3-apples', label: '3 apples — the smaller group', implies: asMisconceptionId('mis-numeral-size-not-quantity') },
    { kind: 'distractor', id: 'opt-equal',    label: 'They are equal',               implies: asMisconceptionId('mis-numeral-size-not-quantity') },
  ],
  validResponseModes: ['tap', 'text'],
  feedback: {
    timing: 'immediate',
    form: 'Count them together — 3 apples here, 7 apples there. ' +
          'When we count, 7 comes after 3, so 7 is the bigger group. Nice counting!',
  },
  selfCorrecting: false,
};

export const ITEM_COMPARISON_NUMERAL_TRAP: AssessmentItem = {
  id: asItemId('item-math-compare-numeral-trap-001'),
  prompt: 'Which number is more — the big bold 9 or the small plain 10?',
  measuresKcs: [asKCId('kc-number-comparison')],
  options: [
    { kind: 'correct',    id: 'opt-ten-correct', label: '10 — ten is more than nine' },
    {
      kind: 'distractor',
      id: 'opt-big-nine',
      label: '9 — it looks bigger',
      implies: asMisconceptionId('mis-numeral-size-not-quantity'),
    },
  ],
  validResponseModes: ['tap', 'text'],
  feedback: {
    timing: 'immediate',
    form: 'The way a number is written — big or small, bold or plain — ' +
          'does not change how much it means. ' +
          'Ten (10) always means ten things. Nine (9) always means nine things. ' +
          'Ten is one more than nine, no matter how they look on the page.',
  },
  selfCorrecting: false,
};

export const ASSESSMENT_NUMBER_COMPARISON: Assessment = {
  id: asAssessmentId('assess-number-comparison-intro'),
  items: [ITEM_COMPARISON_BASIC, ITEM_COMPARISON_NUMERAL_TRAP],
};

export const LESSON_COUNTING_INTRO: ContentActivity = {
  id: asActivityId('lesson-counting-objects-intro'),
  title: 'Counting the World Around Us',
  activityType: 'lesson',
  teachesKcs: [asKCId('kc-counting-objects')],
  requiresKcs: [],
  instructionalModes: ['explicit'],
  representations: ['physical-objects', 'visual-diagram', 'audio-count'],
  responseModes: ['tap', 'touch', 'speech'],
  developmentalSuitability: [asStageId('stage-early-numeracy')],
  assessmentIds: [],
  parentExtensions: [
    { kind: 'activity', description: 'Count objects around the house together — spoons at dinner, steps to the door, books on a shelf. Touch each one as you count.' },
  ],
  offlineActivities: ['Arrange up to 10 small objects in a line and count them by touching each one.'],
  creativeApplications: ['Draw exactly 6 of something. Count them when you\'re done.'],
};

export const LESSON_NUMBER_COMPARISON: ContentActivity = {
  id: asActivityId('lesson-number-comparison-intro'),
  title: 'Which Has More?',
  activityType: 'lesson',
  teachesKcs: [asKCId('kc-number-comparison')],
  requiresKcs: [asKCId('kc-counting-objects')],
  instructionalModes: ['explicit'],
  representations: ['visual-sets', 'number-line', 'physical-objects', 'audio'],
  responseModes: ['tap', 'text', 'speech'],
  developmentalSuitability: [asStageId('stage-early-numeracy')],
  assessmentIds: [asAssessmentId('assess-number-comparison-intro')],
  parentExtensions: [
    { kind: 'activity', description: 'Make two small groups of things — say 4 grapes and 7 grapes. Ask: which pile has more? Count together to check.' },
  ],
  offlineActivities: ['Deal two piles of playing cards (face down). Flip one from each pile — which number is more?'],
  creativeApplications: ['Draw two groups of stars, one with more than the other. Write the number under each group. Circle the bigger number.'],
};

export const LESSON_ADDITION_WITHIN_5: ContentActivity = {
  id: asActivityId('lesson-addition-within-5-intro'),
  title: 'Putting Groups Together',
  activityType: 'lesson',
  teachesKcs: [asKCId('kc-addition-within-5')],
  requiresKcs: [asKCId('kc-number-comparison')],
  instructionalModes: ['explicit', 'inquiry'],
  representations: ['physical-objects', 'visual-diagram', 'number-line', 'audio'],
  responseModes: ['tap', 'text', 'speech'],
  developmentalSuitability: [asStageId('stage-early-numeracy')],
  assessmentIds: [],
  parentExtensions: [
    { kind: 'activity', description: 'Put 2 blocks in one pile and 3 in another. Push them together and count the total. How many now?' },
  ],
  offlineActivities: ['Use fingers: hold up 2 on one hand and 1 on the other. How many fingers are up altogether?'],
  creativeApplications: ['Draw a story: 2 birds in a tree and 2 more birds land. How many birds altogether? Draw them all.'],
};
