import { getTranslations } from 'next-intl/server';
import { ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';

export default async function TrecPage() {
  const t = await getTranslations('legal.trec');

  const sections = [
    { title: t('licenseTitle'), body: t('licenseBody') },
    { title: t('iabsTitle'), body: t('iabsBody'), link: t('iabsLink') },
    { title: t('disclaimerTitle'), body: t('disclaimerBody') },
    { title: t('consumerTitle'), body: t('consumerBody') },
  ];

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">Legal</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('intro')}</p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <article className="mx-auto max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 text-muted">{s.body}</p>
                {s.link ? (
                  <a
                    href={SITE.iabsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
                  >
                    {s.link}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}