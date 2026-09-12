import { getMessages, getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';

export default async function NeighborhoodsHubPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('neighborhoods');
  const messages = await getMessages();

  const guides = messages.neighborhoods.guides;
  const cards = NEIGHBORHOODS.map((n) => ({ ...n, guide: guides[n.key] }));

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{t('hubTitle')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">{t('hubSubtitle')}</p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="mx-auto max-w-3xl text-center text-lg text-muted">{t('hubIntro')}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {cards.map((c) => (
              <div
                key={c.key}
                className="flex flex-col rounded-2xl border border-gray-soft bg-white p-7 transition-shadow hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-ink">{c.guide.name}</h2>
                <p className="mt-3 flex-1 text-muted">{c.guide.heroSub}</p>
                <a
                  href={localizedPath(locale, c.routeKey)}
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
                >
                  {t('viewGuide')}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-copyblue">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            {t('ctaTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{t('ctaBody')}</p>
          <div className="mt-8">
            <ButtonLink href={localizedPath(locale, 'book')} variant="accent">
              {t('ctaButton')}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
