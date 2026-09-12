import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import HomePage from '@/components/pages/home-page';
import JsonLd from '@/components/ui/json-ld';
import { realEstateAgentJsonLd } from '@/lib/jsonld';

export const generateStaticParams = () => staticParams('en', 'es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'home', 'meta.home');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'home', (locale) => (
    <>
      <JsonLd data={realEstateAgentJsonLd()} />
      <HomePage locale={locale} />
    </>
  ));
}
