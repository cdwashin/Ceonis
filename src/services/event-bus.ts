/**
 * CEONIS Kernel — Event Bus
 *
 * Implements Spec §8·B. Typed publish/subscribe backbone.
 *
 * [L2 GAP-FILL] In-process synchronous bus. Promote to Redis Streams or
 * Postgres LISTEN/NOTIFY when the Parent/Relationship Service requires
 * true async delivery.
 *
 * CONSTRAINT (Constitution Article 4): No event may carry inferred-trait
 * data. Payloads reference KCs and Activities by id only.
 */

import type { JourneyId, KCId, MisconceptionId, ActivityId } from '../domain/core.ts';

export type CEONISEventPayload =
  | { readonly kind: 'EvidenceReceived';      readonly journeyId: JourneyId; readonly activityId: ActivityId }
  | { readonly kind: 'MasteryChanged';        readonly journeyId: JourneyId; readonly kcId: KCId; readonly newValue: number; readonly newUncertainty: number }
  | { readonly kind: 'MisconceptionDetected'; readonly journeyId: JourneyId; readonly misconceptionId: MisconceptionId }
  | { readonly kind: 'MisconceptionResolved'; readonly journeyId: JourneyId; readonly misconceptionId: MisconceptionId }
  | { readonly kind: 'RetentionDue';          readonly journeyId: JourneyId; readonly kcId: KCId }
  | { readonly kind: 'StageProgressed';       readonly journeyId: JourneyId; readonly newStageId: string }
  | { readonly kind: 'ActivityRecommended';   readonly journeyId: JourneyId; readonly activityId: ActivityId; readonly rationale: string }
  | { readonly kind: 'WelfareFlagRaised';     readonly journeyId: JourneyId; readonly flag: string };

export type CEONISEventKind = CEONISEventPayload['kind'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Handler<T extends CEONISEventPayload = CEONISEventPayload> = (event: T) => void | Promise<void>;

export interface EventBus {
  publish(event: CEONISEventPayload): Promise<void>;
  subscribe<K extends CEONISEventKind>(kind: K, handler: Handler<Extract<CEONISEventPayload, { kind: K }>>): void;
  unsubscribe<K extends CEONISEventKind>(kind: K, handler: Handler<Extract<CEONISEventPayload, { kind: K }>>): void;
}

export class InProcessEventBus implements EventBus {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly subscribers = new Map<CEONISEventKind, Set<Handler<any>>>();

  async publish(event: CEONISEventPayload): Promise<void> {
    const handlers = this.subscribers.get(event.kind);
    if (!handlers || handlers.size === 0) return;
    for (const handler of handlers) {
      try {
        await handler(event);
      } catch (err) {
        console.error(`[EventBus] Handler for "${event.kind}" threw:`, err);
      }
    }
  }

  subscribe<K extends CEONISEventKind>(kind: K, handler: Handler<Extract<CEONISEventPayload, { kind: K }>>): void {
    if (!this.subscribers.has(kind)) this.subscribers.set(kind, new Set());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.subscribers.get(kind)!.add(handler);
  }

  unsubscribe<K extends CEONISEventKind>(kind: K, handler: Handler<Extract<CEONISEventPayload, { kind: K }>>): void {
    this.subscribers.get(kind)?.delete(handler);
  }
}
