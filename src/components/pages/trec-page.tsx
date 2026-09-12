import { getTranslations } from 'next-intl/server';
import { ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/site';
import LegalArticle from '@/components/ui/legal-article';

export default async function TrecPage() {
  const t = await getTranslations('legal.trec');

  return (
    <LegalArticle
      title={t('title')}
      intro={t('intro')}
      sections={[
        { title: t('licenseTitle'), body: t('licenseBody') },
        {
          title: t('iabsTitle'),
          body: t('iabsBody'),
          extra: (
            <a
              href={SITE.iabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
            >
              {t('iabsLink')}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ),
        },
        { title: t('disclaimerTitle'), body: t('disclaimerBody') },
        { title: t('consumerTitle'), body: t('consumerBody') },
      ]}
    />
  );
}
