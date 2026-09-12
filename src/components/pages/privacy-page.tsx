import { getTranslations } from 'next-intl/server';
import LegalArticle from '@/components/ui/legal-article';

export default async function PrivacyPage() {
  const t = await getTranslations('legal.privacy');

  return (
    <LegalArticle
      title={t('title')}
      updated={t('updated')}
      intro={t('intro')}
      sections={[
        { title: t('collectTitle'), body: t('collectBody') },
        { title: t('useTitle'), body: t('useBody') },
        { title: t('shareTitle'), body: t('shareBody') },
        { title: t('cookiesTitle'), body: t('cookiesBody') },
        { title: t('rightsTitle'), body: t('rightsBody') },
        { title: t('contactTitle'), body: t('contactBody') },
      ]}
    />
  );
}
