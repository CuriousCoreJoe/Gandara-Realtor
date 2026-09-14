import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { isLocale } from '@/i18n/routing';
import type { RouteKey } from '@/lib/routes';
import { buildMetadata } from '@/lib/metadata';
import SiteLayout from '@/components/layout/site-layout';

/**
 * Shared helpers for locale route wrappers. Keep every page consistent:
 *  - resolves & validates the locale from params
 *  - opts the page into static rendering
 *  - wraps content in the global chrome (header / footer / sticky CTA)
 */

export async function renderPage(
  params: Promise<{ locale: string }>,
  routeKey: RouteKey,
  render: (locale: Locale) => ReactNode,
) {
  const { locale } = await params;
  const valid: Locale = isLocale(locale) ? locale : 'en';

  setRequestLocale(valid);

  return <SiteLayout locale={valid} routeKey={routeKey}>{render(valid)}</SiteLayout>;
}

export function staticParams(...locales: Locale[]) {
  return locales.map((locale) => ({ locale }));
}

export type MetaNamespace =
  | 'meta.home'
  | 'meta.about'
  | 'meta.buyers'
  | 'meta.sellers'
  | 'meta.listings'
  | 'meta.neighborhoods'
  | 'meta.contact'
  | 'meta.links'
  | 'meta.privacy'
  | 'meta.terms'
  | 'meta.trec';

export async function metadataFor(
  params: Promise<{ locale: string }>,
  routeKey: RouteKey,
  metaNamespace: MetaNamespace,
): Promise<Metadata> {
  const { locale } = await params;
  const valid: Locale = isLocale(locale) ? locale : 'en';
  const t = await getTranslations({ locale: valid, namespace: metaNamespace });
  return buildMetadata({
    locale: valid,
    routeKey,
    title: t('title'),
    description: t('description'),
  });
}
