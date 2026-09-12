import { getMessages } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import LegalArticle, { type LegalSection } from '@/components/ui/legal-article';

export default async function PrivacyPage({ locale }: { locale: Locale }) {
  const messages = await getMessages();
  const p = messages.legal.privacy;

  return (
    <LegalArticle
      eyebrow={p.heroEyebrow}
      title={p.title}
      lead={p.lead}
      updated={p.updated}
      sections={p.sections as LegalSection[]}
      cta={{
        title: p.ctaTitle,
        body: p.ctaBody,
        button: p.ctaButton,
        href: localizedPath(locale, 'contact'),
      }}
    />
  );
}