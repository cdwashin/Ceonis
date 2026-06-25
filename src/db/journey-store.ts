/**
 * CEONIS Kernel — Learning Journey Store
 *
 * The persistence layer behind Spec §3·B. The single access point for
 * reading and writing Learning Journey state.
 *
 * [L2 GAP-FILL] In-memory implementation. Replace with a Postgres adapter
 * for production without changing any caller — the interface is the stable
 * contract (Spec §0 two-layer rule).
 */

import type { JourneyId, ChildId } from '../domain/core.ts';
import type {
  LearningJourney, MasteryRecord, MisconceptionStateRecord,
  ResponsePatternRecord, InterestEngagementRecord,
  AccessibilityProfile, JourneyLogEntry,
} from '../domain/journey.ts';
import { createEmptyJourney } from '../domain/journey.ts';
import type { DevelopmentalStage } from '../domain/content.ts';

export interface JourneyStore {
  create(args: {
    readonly journeyId: JourneyId;
    readonly childId: ChildId;
    readonly stage: DevelopmentalStage;
    readonly accessibility: AccessibilityProfile;
  }): Promise<LearningJourney>;

  getByChildId(childId: ChildId): Promise<LearningJourney | null>;
  getById(journeyId: JourneyId): Promise<LearningJourney | null>;
  upsertMastery(journeyId: JourneyId, record: MasteryRecord): Promise<void>;
  upsertMisconceptionState(journeyId: JourneyId, record: MisconceptionStateRecord): Promise<void>;
  upsertResponsePattern(journeyId: JourneyId, record: ResponsePatternRecord): Promise<void>;
  updateInterest(journeyId: JourneyId, record: InterestEngagementRecord): Promise<void>;
  appendLog(journeyId: JourneyId, entry: JourneyLogEntry): Promise<void>;
  reload(journeyId: JourneyId): Promise<LearningJourney | null>;
}

export class InMemoryJourneyStore implements JourneyStore {
  private readonly byId    = new Map<JourneyId, LearningJourney>();
  private readonly byChild = new Map<ChildId, JourneyId>();

  async create(args: {
    readonly journeyId: JourneyId;
    readonly childId: ChildId;
    readonly stage: DevelopmentalStage;
    readonly accessibility: AccessibilityProfile;
  }): Promise<LearningJourney> {
    const journey = createEmptyJourney({
      id: args.journeyId,
      childId: args.childId,
      currentStageId: args.stage.id,
      accessibility: args.accessibility,
    });
    this.byId.set(args.journeyId, journey);
    this.byChild.set(args.childId, args.journeyId);
    return journey;
  }

  async getByChildId(childId: ChildId): Promise<LearningJourney | null> {
    const journeyId = this.byChild.get(childId);
    if (journeyId === undefined) return null;
    return this.byId.get(journeyId) ?? null;
  }

  async getById(journeyId: JourneyId): Promise<LearningJourney | null> {
    return this.byId.get(journeyId) ?? null;
  }

  async upsertMastery(journeyId: JourneyId, record: MasteryRecord): Promise<void> {
    const j = this.require(journeyId);
    this.byId.set(journeyId, {
      ...j,
      knowledgeState: [...j.knowledgeState.filter(r => r.kc !== record.kc), record],
    });
  }

  async upsertMisconceptionState(journeyId: JourneyId, record: MisconceptionStateRecord): Promise<void> {
    const j = this.require(journeyId);
    this.byId.set(journeyId, {
      ...j,
      misconceptionState: [...j.misconceptionState.filter(r => r.misconception !== record.misconception), record],
    });
  }

  async upsertResponsePattern(journeyId: JourneyId, record: ResponsePatternRecord): Promise<void> {
    const j = this.require(journeyId);
    this.byId.set(journeyId, {
      ...j,
      whatsHelpingNow: [...j.whatsHelpingNow.filter(r => r.pattern !== record.pattern), record],
    });
  }

  async updateInterest(journeyId: JourneyId, record: InterestEngagementRecord): Promise<void> {
    const j = this.require(journeyId);
    this.byId.set(journeyId, { ...j, interest: record });
  }

  async appendLog(journeyId: JourneyId, entry: JourneyLogEntry): Promise<void> {
    const j = this.require(journeyId);
    this.byId.set(journeyId, { ...j, journeyLog: [...j.journeyLog, entry] });
  }

  async reload(journeyId: JourneyId): Promise<LearningJourney | null> {
    return this.byId.get(journeyId) ?? null;
  }

  private require(journeyId: JourneyId): LearningJourney {
    const j = this.byId.get(journeyId);
    if (j === undefined) throw new Error(`Journey not found: ${journeyId}`);
    return j;
  }
}
