import { getMessages, getTranslations } from 'next-intl/server';
import { ArrowLeft, MapPin } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { QUICK_FACT_LABEL_KEYS, type NeighborhoodKey } from '@/lib/neighborhoods';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';

export default async function NeighborhoodGuidePage({
  locale,
  neighborhoodKey,
}: {
  locale: Locale;
  neighborhoodKey: NeighborhoodKey;
}) {
  const t = await getTranslations('neighborhoods');
  const messages = await getMessages();

  const guide = messages.neighborhoods.guides[neighborhoodKey];
  const factLabels = messages.neighborhoods.quickFactLabels;

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <a
            href={localizedPath(locale, 'neighborhoods')}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('backToHub')}
          </a>
          <div className="mt-6 flex items-start gap-3">
            <MapPin className="mt-1.5 h-8 w-8 shrink-0 text-copyblue" aria-hidden="true" />
            <div>
              <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{guide.name}</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted">{guide.heroSub}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Quick facts */}
            <div>
              <h2 className="text-2xl font-semibold text-ink">{t('quickFactsTitle')}</h2>
              <dl className="mt-6 overflow-hidden rounded-2xl border border-gray-soft">
                {QUICK_FACT_LABEL_KEYS.map((labelKey, i) => (
                  <div
                    key={labelKey}
                    className={`flex items-center justify-between gap-4 px-6 py-4 ${
                      i % 2 === 0 ? 'bg-gray-soft/60' : 'bg-white'
                    }`}
                  >
                    <dt className="font-medium text-ink">{factLabels[labelKey]}</dt>
                    <dd className="text-right text-sm text-muted">{t('verifiedPlaceholder')}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* What locals love */}
            <div>
              <h2 className="text-2xl font-semibold text-ink">{t('localsLoveTitle')}</h2>
              <ul className="mt-6 space-y-3">
                {guide.localsLove.map((item: string) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl bg-gray-soft px-5 py-4 text-ink">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copyblue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
