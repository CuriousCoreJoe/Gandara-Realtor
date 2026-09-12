import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import TermsPage from '@/components/pages/terms-page';

export const generateStaticParams = () => staticParams('en');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'terms', 'meta.terms');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'terms', () => <TermsPage />);
}
