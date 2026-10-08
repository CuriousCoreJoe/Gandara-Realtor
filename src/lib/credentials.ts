// ---------------------------------------------------------------------------
// Credentials & trust copy single source of truth.
//
// These are the fixed facts shown in the homepage trust strip and the
// REALTOR® membership stat, plus references to the official mark assets.
// Values that are identical in both languages (license number, association
// name, the REALTOR® word) live here — NOT in messages/*.json — so they are
// defined once and imported, never retyped per component.
// ---------------------------------------------------------------------------

import { SITE } from './site';

/** TREC license number. Single source of truth remains `SITE.trecNumber`. */
export const LICENSE_NUMBER: string = SITE.trecNumber;

/** Local association through which Angelina holds NAR REALTOR® membership. */
export const ASSOCIATION = {
  /** Short/common initialism. */
  shortName: 'GEPAR',
  /** Full legal-ish display name (proper noun, not translated). */
  name: 'Greater El Paso Association of REALTORS®',
} as const;

/** The REALTOR® word, used where the term itself appears as text (e.g. alt). */
export const REALTOR_MARK = 'REALTOR®';

/** Official REALTOR® logo, standard blue. For light/white backgrounds. */
export const REALTOR_LOGO_BLUE = {
  src: '/realtor-logo-blue.png',
  alt: REALTOR_MARK,
} as const;

/** Official REALTOR® logo, white reversed. For dark backgrounds. */
export const REALTOR_LOGO_WHITE = {
  src: '/realtor-logo-white.png',
  alt: REALTOR_MARK,
} as const;

/** Official Equal Housing Opportunity mark (black on transparent). */
export const EQUAL_HOUSING_MARK = {
  src: '/equal-housing-opportunity.png',
  alt: 'Equal Housing Opportunity',
} as const;