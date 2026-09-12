import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import TrecPage from '@/components/pages/trec-page';

export const generateStaticParams = () => staticParams('en', 'es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'trec', 'meta.trec');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'trec', () => <TrecPage />);
}
