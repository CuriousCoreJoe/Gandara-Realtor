import { getMessages } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import LegalArticle, { type LegalSection } from '@/components/ui/legal-article';

export default async function TermsPage({ locale }: { locale: Locale }) {
  const messages = await getMessages();
  const t = messages.legal.terms;

  return (
    <LegalArticle
      eyebrow={t.heroEyebrow}
      title={t.title}
      lead={t.lead}
      updated={t.updated}
      sections={t.sections as LegalSection[]}
      cta={{
        title: t.ctaTitle,
        body: t.ctaBody,
        button: t.ctaButton,
        href: localizedPath(locale, 'contact'),
      }}
    />
  );
}