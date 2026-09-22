import { getTranslations } from 'next-intl/server';
import { Globe, MapPin, Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import { ListingsCta } from '@/components/ghl/ghl-form-modal';
import PlaceholderImage from '@/components/ui/placeholder-image';

export default async function AboutPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('about');

  const values = [
    { Icon: Phone, title: t('value1Title'), body: t('value1Body') },
    { Icon: Globe, title: t('value2Title'), body: t('value2Body') },
    { Icon: MapPin, title: t('value3Title'), body: t('value3Body') },
  ];

  return (
    <>
      {/* Hero quote */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold italic text-ink sm:text-5xl">{t('heroTitle')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroLead')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={localizedPath(locale, 'contact')} variant="accent" className="w-full sm:w-auto">
              {t('heroPrimary')}
            </ButtonLink>
            <ListingsCta locale={locale} variant="outline" className="w-full sm:w-auto">
              {t('heroSecondary')}
            </ListingsCta>
          </div>
        </Container>
      </section>

      {/* Bio + portrait */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-soft bg-white p-4 shadow-sm">
              <PlaceholderImage label={t('imageAlt')} className="aspect-square w-full rounded-xl" />
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-ink">{t('badgeName')}</span>
                <span className="text-sm text-muted">{t('badgeCity')}</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('bioEyebrow')}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('bioTitle')}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink">{t('paragraph1')}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink">{t('paragraph2')}</p>
              <p className="mt-5 text-lg leading-relaxed text-muted">{t('paragraph3')}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Grandmother pull quote */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="font-display text-2xl font-semibold italic leading-snug text-ink sm:text-3xl">
              {t('quote')}
            </p>
            <cite className="mt-6 block text-sm font-semibold uppercase tracking-[0.14em] not-italic text-copyblue">
              {t('quoteCite')}
            </cite>
          </blockquote>
        </Container>
      </section>

      {/* Credentials */}
      <section className="bg-ink">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-yellow">{t('credentialsEyebrow')}</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{t('credentialsTitle')}</h2>
          <p className="mx-auto mt-4 max-w-2xl font-display text-xl font-semibold text-white">
            {t('credentialsBody')}
          </p>
          <div className="mt-6">
            <a
              href={SITE.iabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center font-semibold text-white underline underline-offset-4 transition-colors hover:text-yellow"
            >
              {t('credentialsLink')}
            </a>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('valuesEyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('valuesTitle')}</h2>
          <p className="mt-4 text-lg text-muted">{t('valuesLead')}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-soft bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
                  <v.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-copyblue">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('ctaTitle')}</h2>
              <p className="mt-4 text-lg text-white">{t('ctaBody')}</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <ButtonLink href={localizedPath(locale, 'contact')} variant="accent" className="w-full sm:w-auto sm:text-2xl sm:px-12 sm:py-4">
                {t('ctaButton')}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}