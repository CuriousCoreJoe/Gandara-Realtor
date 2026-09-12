import { getTranslations } from 'next-intl/server';
import { BadgeCheck } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import PlaceholderImage from '@/components/ui/placeholder-image';

export default async function AboutPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('about');
  const c = await getTranslations('common');

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-copyblue">
            {t('subtitle')}
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold italic text-ink sm:text-5xl">
            “{t('quote')}”
          </h1>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-start gap-10 md:grid-cols-[2fr_3fr]">
            <PlaceholderImage label={t('imageAlt')} className="min-h-[360px] rounded-2xl">
              <span className="font-display text-xl font-semibold text-muted">{SITE.agentName}</span>
            </PlaceholderImage>
            <div>
              <p className="text-lg leading-relaxed text-ink">{t('paragraph1')}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink">{t('paragraph2')}</p>
              <p className="mt-5 text-lg leading-relaxed text-muted">{t('paragraph3')}</p>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gray-soft bg-gray-soft p-6">
                <BadgeCheck className="h-6 w-6 shrink-0 text-copyblue" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{t('licenseTitle')}</p>
                  <p className="mt-1 text-muted">
                    {c('licensedAgent')} · {SITE.trecNumber}
                  </p>
                  <p className="text-muted">{SITE.broker}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-copyblue">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            {t('ctaTitle')}
          </h2>
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
