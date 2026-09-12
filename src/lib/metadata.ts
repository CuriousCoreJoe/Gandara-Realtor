import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { absoluteUrl, alternatePath, localizedPath, type RouteKey } from '@/lib/routes';
import { SITE } from '@/lib/site';

interface PageMeta {
  locale: Locale;
  routeKey: RouteKey;
  title: string;
  description: string;
  ogType?: 'website' | 'article' | 'profile';
}

/**
 * Builds per-page metadata with canonical URL and full hreflang alternates
 * (en / es / x-default). Every page must call this so both locales declare
 * each other.
 */
export function buildMetadata({
  locale,
  routeKey,
  title,
  description,
  ogType = 'website',
}: PageMeta): Metadata {
  const canonical = absoluteUrl(localizedPath(locale, routeKey));
  const enUrl = absoluteUrl(localizedPath('en', routeKey));
  const esUrl = absoluteUrl(localizedPath('es', routeKey));
  const xDefault = absoluteUrl(localizedPath('en', routeKey));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        es: esUrl,
        'x-default': xDefault,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.agentName,
      locale: locale === 'en' ? 'en_US' : 'es_MX',
      type: ogType,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

/** Convenience: absolute alternate URL for the sibling locale. */
export function alternateUrl(locale: Locale, routeKey: RouteKey): string {
  return absoluteUrl(alternatePath(locale, routeKey));
}
