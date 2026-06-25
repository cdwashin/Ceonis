/**
 * CEONIS Kernel — Mastery Estimator
 *
 * Implements the MasteryEstimator interface from Spec §5·2.
 * The algorithm is swappable without changing any caller.
 *
 * [DELIBERATE GAP — Spec §5·2 / Handoff §4·A]
 * V1 uses the simplest formula that satisfies the interface.
 * Replace with BKT or IRT after an Opus review when T3.2 data is available.
 *
 * V1 FORMULAS:
 *   update value:       newV = oldV + LEARNING_RATE * w * (correct ? (1-oldV) : -oldV)
 *   update uncertainty: newU = max(0, oldU - EVIDENCE_WEIGHT * w)
 *   recall probability: strength * exp(-DECAY_RATE * hoursSinceLastEncountered)
 */

import type { KCId } from '../domain/core.ts';
import type { MasteryEstimate, RetentionState } from '../domain/core.ts';
import type { MasteryRecord } from '../domain/journey.ts';

export interface MasteryEvidence {
  readonly correct: boolean;
  readonly timestamp: string;
  readonly weight?: number;
}

export interface MasteryEstimator {
  update(current: MasteryRecord, evidence: MasteryEvidence): MasteryRecord;
  currentRecallProbability(mastery: MasteryRecord, now: Date): number;
}

/** [DELIBERATE GAP] All constants are placeholders pending calibration. */
const LEARNING_RATE       = 0.30;
const EVIDENCE_WEIGHT     = 0.10;
const DECAY_RATE          = 0.01;
const INITIAL_UNCERTAINTY = 1.0;

export class LinearMasteryEstimator implements MasteryEstimator {

  update(current: MasteryRecord, evidence: MasteryEvidence): MasteryRecord {
    const w = evidence.weight ?? 1.0;
    const newValue = clamp(
      current.estimate.value + LEARNING_RATE * w * (evidence.correct ? (1 - current.estimate.value) : -current.estimate.value),
      0, 1
    );
    const newUncertainty = Math.max(0, current.estimate.uncertainty - EVIDENCE_WEIGHT * w);

    const updatedEstimate: MasteryEstimate = { value: newValue, uncertainty: newUncertainty };
    const updatedRetention: RetentionState = {
      lastEncountered: evidence.timestamp,
      strength: clamp(
        evidence.correct
          ? current.retention.strength + 0.10 * w
          : current.retention.strength - 0.05 * w,
        0, 1
      ),
    };

    return { ...current, estimate: updatedEstimate, retention: updatedRetention };
  }

  currentRecallProbability(mastery: MasteryRecord, now: Date): number {
    const hoursSince = (now.getTime() - new Date(mastery.retention.lastEncountered).getTime()) / 3_600_000;
    return mastery.retention.strength * Math.exp(-DECAY_RATE * hoursSince);
  }
}

export function createInitialMasteryRecord(args: {
  readonly kcId: KCId;
  readonly evidence: MasteryEvidence;
  readonly logEntryId: string;
}): MasteryRecord {
  const initial: MasteryRecord = {
    kc: args.kcId,
    estimate: { value: 0.0, uncertainty: INITIAL_UNCERTAINTY },
    retention: { lastEncountered: args.evidence.timestamp, strength: 0.0 },
    evidenceRefs: [],
  };
  const updated = new LinearMasteryEstimator().update(initial, args.evidence);
  return { ...updated, evidenceRefs: [args.logEntryId] };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
