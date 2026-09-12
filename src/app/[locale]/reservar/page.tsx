import { metadataFor, renderPage, staticParams } from '@/lib/render-page';
import BookPage from '@/components/pages/book-page';

export const generateStaticParams = () => staticParams('es');

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataFor(params, 'book', 'meta.book');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return renderPage(params, 'book', () => <BookPage />);
}
