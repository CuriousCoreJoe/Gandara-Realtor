import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import PrivacyPage from '@/components/pages/privacy-page';

export const generateStaticParams = () => staticParams('en');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'privacy', 'meta.privacy');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'privacy', () => <PrivacyPage />);
}
