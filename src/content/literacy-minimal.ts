/**
 * CEONIS Kernel — Minimum Literacy Content (T3.1 Validation Scaffold)
 *
 * The smallest content set that exercises a complete learn-cycle and
 * satisfies Acceptance Criterion T3.1.
 *
 * This is NOT production curriculum. Do not expand this file.
 * When the Curriculum Authoring Standard is written and real Literacy
 * content is authored, this file is superseded by the content registry.
 */

import {
  asKCId, asMisconceptionId, asActivityId, asAssessmentId, asItemId, asStageId,
} from '../domain/core.ts';
import type {
  KnowledgeComponent, Misconception, ContentActivity,
  Assessment, AssessmentItem, DevelopmentalStage,
} from '../domain/content.ts';

export const STAGE_LEARNING_TO_READ: DevelopmentalStage = {
  id: asStageId('stage-learning-to-read'),
  name: 'Learning to Read',
  ageGuidance: { minMonths: 60, maxMonths: 96 },
  interactionModel: 'guided-exploration',
  adultInvolvementModel: 'co-present',
  successMetrics: ['decoding_accuracy', 'phonemic_awareness', 'blending_fluency'],
};

export const KC_PHONEME_SEGMENTATION: KnowledgeComponent = {
  id: asKCId('kc-phoneme-segmentation-cvc'),
  name: 'Phoneme Segmentation — CVC Words',
  description:
    'The child can break a consonant-vowel-consonant word into its three individual phonemes ' +
    'in correct order. Example: "cat" → /k/ /æ/ /t/. ' +
    'Mastery: consistent correct segmentation of novel CVC words on first attempt.',
  domain: 'literacy',
  kcType: 'skill',
  prerequisites: [],
  developmentalSuitability: [asStageId('stage-learning-to-read')],
  misconceptionIds: [asMisconceptionId('mis-letter-names-not-phonemes')],
};

export const MISCONCEPTION_LETTER_NAMES: Misconception = {
  id: asMisconceptionId('mis-letter-names-not-phonemes'),
  name: 'Confuses Letter Names with Phonemes',
  description:
    'Child provides letter names (e.g. "see", "ay", "tee") instead of phonemes ' +
    '(e.g. /k/, /æ/, /t/) when segmenting words.',
  kcId: asKCId('kc-phoneme-segmentation-cvc'),
  confrontStrategyRef: 'confront-letter-names-vs-phonemes-pending-authoring-standard',
};

export const ITEM_CAT_SEGMENTATION: AssessmentItem = {
  id: asItemId('item-phoneme-seg-cat-001'),
  prompt: 'What are the sounds in the word "cat"?',
  measuresKcs: [asKCId('kc-phoneme-segmentation-cvc')],
  options: [
    { kind: 'correct',    id: 'opt-correct-phonemes',          label: '/k/ /æ/ /t/ — three sounds' },
    { kind: 'distractor', id: 'opt-distractor-letter-names',   label: '"see", "ay", "tee" — the letter names', implies: asMisconceptionId('mis-letter-names-not-phonemes') },
    { kind: 'distractor', id: 'opt-distractor-two-parts',      label: '/ca/ /t/ — two parts',                  implies: asMisconceptionId('mis-letter-names-not-phonemes') },
  ],
  validResponseModes: ['tap', 'text'],
  feedback: {
    timing: 'immediate',
    form: 'You chose the letter names — those are the names we use for the letters. ' +
          'The sounds are different: "cat" has three sounds, /k/ like "kick", /æ/ like "apple", and /t/ like "top". ' +
          'Great listening — you already know the letters, and now we\'re learning the sounds!',
  },
  selfCorrecting: false,
};

export const ASSESSMENT_PHONEME_CVC: Assessment = {
  id: asAssessmentId('assess-phoneme-segmentation-cvc-intro'),
  items: [ITEM_CAT_SEGMENTATION],
};

export const LESSON_PHONEME_INTRO: ContentActivity = {
  id: asActivityId('lesson-phoneme-segmentation-intro'),
  title: 'Listening for the Sounds in Words',
  activityType: 'lesson',
  teachesKcs: [asKCId('kc-phoneme-segmentation-cvc')],
  requiresKcs: [],
  instructionalModes: ['explicit'],
  representations: ['visual-diagram', 'audio', 'animated-text'],
  responseModes: ['tap', 'text', 'speech'],
  developmentalSuitability: [asStageId('stage-learning-to-read')],
  assessmentIds: [asAssessmentId('assess-phoneme-segmentation-cvc-intro')],
  parentExtensions: [
    { kind: 'activity', description: 'Try sound-counting with everyday words. Pick a short word ("cup", "sit", "log"), hold up one finger for each sound as you say it together. How many fingers?' },
  ],
  offlineActivities: ['Sound boxes: draw three boxes on paper, push a coin into each box while saying each sound in a word.'],
  creativeApplications: ['Make up a silly three-sound word that isn\'t a real word. What sounds does it have?'],
};
