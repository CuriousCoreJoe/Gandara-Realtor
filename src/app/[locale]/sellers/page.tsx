import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import SellersPage from '@/components/pages/sellers-page';
import JsonLd from '@/components/ui/json-ld';
import { freeValuationServiceJsonLd } from '@/lib/jsonld';

export const generateStaticParams = () => staticParams('en');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'sellers', 'meta.sellers');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'sellers', (locale) => (
    <>
      <JsonLd data={freeValuationServiceJsonLd(locale)} />
      <SellersPage />
    </>
  ));
}
