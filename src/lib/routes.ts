import type { Locale } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

/**
 * Route registry: maps a logical route key to its localized path segment.
 *
 * For a few pages the Spanish URL uses a translated slug (per the spec),
 * while the neighborhood guides keep the same slug in both locales.
 */
export type RouteKey =
  | 'home'
  | 'about'
  | 'buyers'
  | 'sellers'
  | 'listings'
  | 'neighborhoods'
  | 'westside'
  | 'upperValley'
  | 'eastSide'
  | 'fortBliss'
  | 'contact'
  | 'book'
  | 'privacy'
  | 'terms'
  | 'trec';

export const routes: Record<RouteKey, { en: string; es: string }> = {
  home: { en: '/', es: '/' },
  about: { en: '/about', es: '/sobre' },
  buyers: { en: '/buyers', es: '/compradores' },
  sellers: { en: '/sellers', es: '/vendedores' },
  listings: { en: '/listings', es: '/propiedades' },
  neighborhoods: { en: '/neighborhoods', es: '/neighborhoods' },
  westside: { en: '/neighborhoods/westside', es: '/neighborhoods/westside' },
  upperValley: { en: '/neighborhoods/upper-valley', es: '/neighborhoods/upper-valley' },
  eastSide: {
    en: '/neighborhoods/east-side-horizon-city',
    es: '/neighborhoods/east-side-horizon-city',
  },
  fortBliss: { en: '/neighborhoods/fort-bliss', es: '/neighborhoods/fort-bliss' },
  contact: { en: '/contact', es: '/contacto' },
  book: { en: '/book', es: '/reservar' },
  privacy: { en: '/legal/privacy', es: '/legal/privacidad' },
  terms: { en: '/legal/terms', es: '/legal/terminos' },
  trec: { en: '/legal/trec', es: '/legal/trec' },
};

/**
 * Full, localized pathname for a route key in a given locale,
 * e.g. `localizedPath('es', 'about')` → `/es/sobre/`.
 * Trailing slash matches `trailingSlash: true` in next.config.
 */
export function localizedPath(locale: Locale, key: RouteKey): string {
  const slug = routes[key][locale];
  const prefix = locale === 'en' ? '/en' : `/${locale}`;
  if (slug === '/') return `${prefix}/`;
  return `${prefix}${slug}/`;
}

/**
 * Alternate pathname for the SAME page in the other locale.
 */
export function alternatePath(locale: Locale, key: RouteKey): string {
  const other: Locale = locale === 'en' ? 'es' : 'en';
  return localizedPath(other, key);
}

/** Absolute URL for a pathname (canonical, hreflang, OG, sitemap). */
export function absoluteUrl(pathname: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  return `${base}${pathname}`;
}
