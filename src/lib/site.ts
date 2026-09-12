// ---------------------------------------------------------------------------
// Fixed client facts — single source of truth.
// These are identifiers / numbers / proper nouns that are identical in both
// languages and therefore NOT stored in the translation files. Anything that
// is a real sentence or label lives in messages/en.json + messages/es.json.
// ---------------------------------------------------------------------------

/**
 * Canonical production origin. THE single source of truth for every
 * canonical / hreflang / Open Graph / JSON-LD / sitemap URL in the app.
 *
 * ⚠️ LAUNCH GATE — replace this with the real, purchased domain before
 * deploying. Leaving the placeholder triggers a loud build-time warning.
 */
const PLACEHOLDER_URL = 'https://www.angelinagandara.com';

export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL ?? PLACEHOLDER_URL;

export const SITE = {
  /** Agent display name (proper noun — not translated). */
  agentName: 'Angelina Gándara',

  /** Phone (click-to-call everywhere). */
  phoneDisplay: '(915) 355-0494',
  phoneHref: 'tel:+19153550494',

  /** Email. */
  email: 'gandara.realtor@gmail.com',
  emailHref: 'mailto:gandara.realtor@gmail.com',

  /** Instagram. */
  instagramUrl: 'https://www.instagram.com/angie_realtortexas/',
  instagramHandle: '@angie_realtortexas',

  /** License (TREC). */
  trecNumber: 'TREC #844593-SA',

  /** Broker — must appear on every page (TREC Rule 535.155). */
  broker: 'Home Pros Real Estate Group LLC',

  /** Broker of Record (renders with the broker name on every page). */
  brokerOfRecord: 'Patricia Lozano',

  /**
   * Current TREC Information About Brokerage Services (IABS) form. Points at
   * the versioned PDF referenced by the original site so the link is stable.
   */
  iabsUrl: 'https://www.trec.texas.gov/sites/default/files/pdf/consumer-information-sheets/IABS-1-2.pdf',
} as const;

export type SiteConfig = typeof SITE;
