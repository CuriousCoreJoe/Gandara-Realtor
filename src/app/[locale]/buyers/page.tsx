import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import BuyersPage from '@/components/pages/buyers-page';

export const generateStaticParams = () => staticParams('en');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'buyers', 'meta.buyers');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'buyers', (locale) => <BuyersPage locale={locale} />);
}
