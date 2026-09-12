import { getTranslations } from 'next-intl/server';
import LegalArticle from '@/components/ui/legal-article';

export default async function TermsPage() {
  const t = await getTranslations('legal.terms');

  return (
    <LegalArticle
      title={t('title')}
      updated={t('updated')}
      intro={t('intro')}
      sections={[
        { title: t('useTitle'), body: t('useBody') },
        { title: t('accuracyTitle'), body: t('accuracyBody') },
        { title: t('representationTitle'), body: t('representationBody') },
        { title: t('liabilityTitle'), body: t('liabilityBody') },
        { title: t('governingTitle'), body: t('governingBody') },
        { title: t('contactTitle'), body: t('contactBody') },
      ]}
    />
  );
}
