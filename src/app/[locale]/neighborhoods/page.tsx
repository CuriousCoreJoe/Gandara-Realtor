import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import NeighborhoodsHubPage from '@/components/pages/neighborhoods-hub-page';

export const generateStaticParams = () => staticParams('en', 'es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'neighborhoods', 'meta.neighborhoods');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'neighborhoods', (locale) => (
    <NeighborhoodsHubPage locale={locale} />
  ));
}
