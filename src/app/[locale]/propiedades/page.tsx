import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import ListingsPage from '@/components/pages/listings-page';

export const generateStaticParams = () => staticParams('es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'listings', 'meta.listings');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'listings', (locale) => <ListingsPage locale={locale} />);
}
