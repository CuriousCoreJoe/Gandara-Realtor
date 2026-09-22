import type { RouteKey } from '@/lib/routes';

/**
 * The four featured El Paso neighborhoods. Real places only no invented
 * neighborhoods. Copy lives in the translation files under
 * `neighborhoods.guides.<key>`. Market figures are placeholders and are
 * labelled "Data verified in Phase 2" (see `neighborhoods.verifiedPlaceholder`).
 */
export type NeighborhoodKey = 'westside' | 'upperValley' | 'eastSide' | 'fortBliss';

export interface Neighborhood {
  key: NeighborhoodKey;
  routeKey: RouteKey;
  image: string;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  { key: 'westside', routeKey: 'westside', image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2ff50f07a3cb6d47ab330.jpg' },
  { key: 'upperValley', routeKey: 'upperValley', image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2fd717c231bdb64f4d2c2.jpg' },
  { key: 'eastSide', routeKey: 'eastSide', image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2ff50de8ed1c29fd505fe.jpg' },
  { key: 'fortBliss', routeKey: 'fortBliss', image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab30033665c3ca9551bc5ec.jpg' },
];

export const QUICK_FACT_LABEL_KEYS = [
  'medianPrice',
  'pricePerSqft',
  'daysOnMarket',
  'commute',
  'schools',
] as const;

export type QuickFactLabelKey = (typeof QUICK_FACT_LABEL_KEYS)[number];
