import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import AboutPage from '@/components/pages/about-page';

export const generateStaticParams = () => staticParams('es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'about', 'meta.about');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'about', (locale) => <AboutPage locale={locale} />);
}
