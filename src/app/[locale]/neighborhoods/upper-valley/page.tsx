import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { isLocale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import { renderPage, staticParams } from '@/lib/render-page';
import NeighborhoodGuidePage from '@/components/pages/neighborhood-guide-page';

export const generateStaticParams = () => staticParams('en', 'es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const valid: Locale = isLocale(locale) ? locale : 'en';
  const t = await getTranslations({ locale: valid, namespace: 'neighborhoods.guides.upperValley' });
  return buildMetadata({
    locale: valid,
    routeKey: 'upperValley',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'upperValley', (locale) => (
    <NeighborhoodGuidePage locale={locale} neighborhoodKey="upperValley" />
  ));
}
