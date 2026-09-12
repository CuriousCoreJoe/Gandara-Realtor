import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import ContactPage from '@/components/pages/contact-page';

export const generateStaticParams = () => staticParams('en');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'contact', 'meta.contact');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'contact', () => <ContactPage />);
}
