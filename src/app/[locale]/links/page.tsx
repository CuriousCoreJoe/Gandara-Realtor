import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { isLocale } from '@/i18n/routing';
import { metadataFor, staticParams } from '@/lib/render-page';
import LinksPage from '@/components/pages/links-page';

export const generateStaticParams = () => staticParams('en');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'links', 'meta.links');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const valid: Locale = isLocale(locale) ? locale : 'en';
  setRequestLocale(valid);
  return <LinksPage locale={valid} />;
}