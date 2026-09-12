import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/routing';
import { absoluteUrl, localizedPath, type RouteKey } from '@/lib/routes';

export const dynamic = 'force-static';

const ROUTE_KEYS: RouteKey[] = [
  'home',
  'about',
  'buyers',
  'sellers',
  'listings',
  'neighborhoods',
  'westside',
  'upperValley',
  'eastSide',
  'fortBliss',
  'contact',
  'book',
  'privacy',
  'terms',
  'trec',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTE_KEYS.flatMap((key) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, key)),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: absoluteUrl(localizedPath('en', key)),
          es: absoluteUrl(localizedPath('es', key)),
        },
      },
    })),
  );
}
