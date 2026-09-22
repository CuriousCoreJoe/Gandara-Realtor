// ---------------------------------------------------------------------------
// Fixed client facts single source of truth.
// These are identifiers / numbers / proper nouns that are identical in both
// languages and therefore NOT stored in the translation files. Anything that
// is a real sentence or label lives in messages/en.json + messages/es.json.
// ---------------------------------------------------------------------------

/**
 * Canonical production origin. THE single source of truth for every
 * canonical / hreflang / Open Graph / JSON-LD / sitemap URL in the app.
 *
 * ⚠️ LAUNCH GATE replace this with the real, purchased domain before
 * deploying. Leaving the placeholder triggers a loud build-time warning.
 */
const PLACEHOLDER_URL = 'https://gandara-realtor.com';

export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL ?? PLACEHOLDER_URL;

export const SITE = {
  /** Brand name used in og:site_name, footer, etc. */
  siteName: 'Gandara Realtor',

  /** Agent display name (proper noun not translated). */
  agentName: 'Angelina G\u00e1ndara',

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

  /** Broker must appear on every page (TREC Rule 535.155). */
  broker: 'Home Pros Real Estate Group LLC',

  /** Broker of Record (renders with the broker name on every page). */
  brokerOfRecord: 'Patricia Lozano',

  /** Broker's physical address (for JSON-LD structured data). */
  brokerAddress: {
    streetAddress: '12135 Montwood Dr',
    addressLocality: 'El Paso',
    addressRegion: 'TX',
    postalCode: '79936',
    addressCountry: 'US',
  },

  /** Social & directory profile URLs for JSON-LD sameAs. */
  profiles: {
    gepar: 'https://www.gepar.org/',
    zillow: 'https://www.zillow.com/profile/AngelinaGandara',
    realtor: 'https://www.realtor.com/realestateagents/angelina-gandara_el-paso_tx',
  },

  /**
   * Current TREC Information About Brokerage Services (IABS) form. Points at
   * the versioned PDF referenced by the original site so the link is stable.
   */
  iabsUrl: 'https://www.trec.texas.gov/sites/default/files/pdf/consumer-information-sheets/IABS-1-2.pdf',
} as const;

export type SiteConfig = typeof SITE;
