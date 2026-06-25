/**
 * CEONIS Kernel — Accessibility Resolver
 *
 * Implements Spec §8·A. Mediates between a child's AccessibilityProfile and
 * content's declared representations and response modes.
 *
 * CORE PRINCIPLE (Constitution Article 8):
 * Accessibility shapes INSTRUCTION, not just presentation. The resolver is
 * consulted by the Assessment Service before any scoring occurs.
 *
 * [DELIBERATE GAP] The full vocabulary of representation types and response
 * modes depends on the Curriculum Authoring Standard (forthcoming).
 */

import type { AssessmentItem, ContentActivity } from '../domain/content.ts';
import type { AccessibilityProfile } from '../domain/journey.ts';

export class AccessibilityResolver {

  validEvidenceModes(profile: AccessibilityProfile, item: AssessmentItem): ReadonlyArray<string> {
    if (profile.validEvidenceModes.length === 0) return item.validResponseModes;
    return item.validResponseModes.filter(mode => profile.validEvidenceModes.includes(mode));
  }

  selectRepresentation(profile: AccessibilityProfile, activity: ContentActivity): string {
    const first = activity.representations[0];
    if (first === undefined) {
      throw new Error(`Activity ${activity.id} has no representations — Curriculum Contract violation`);
    }
    for (const pref of profile.presentationPreferences) {
      const match = activity.representations.find(r => r === pref);
      if (match !== undefined) return match;
    }
    return first;
  }

  selectResponseModes(profile: AccessibilityProfile, activity: ContentActivity): ReadonlyArray<string> {
    if (profile.validEvidenceModes.length === 0) return activity.responseModes;
    const valid = activity.responseModes.filter(mode => profile.validEvidenceModes.includes(mode));
    return valid.length > 0 ? valid : activity.responseModes;
  }

  itemIsUsableFor(profile: AccessibilityProfile, item: AssessmentItem): boolean {
    return this.validEvidenceModes(profile, item).length > 0;
  }
}
