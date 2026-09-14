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
}

export const NEIGHBORHOODS: Neighborhood[] = [
  { key: 'westside', routeKey: 'westside' },
  { key: 'upperValley', routeKey: 'upperValley' },
  { key: 'eastSide', routeKey: 'eastSide' },
  { key: 'fortBliss', routeKey: 'fortBliss' },
];

export const QUICK_FACT_LABEL_KEYS = [
  'medianPrice',
  'pricePerSqft',
  'daysOnMarket',
  'commute',
  'schools',
] as const;

export type QuickFactLabelKey = (typeof QUICK_FACT_LABEL_KEYS)[number];
