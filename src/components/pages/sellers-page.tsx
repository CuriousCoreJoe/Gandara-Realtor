import { getTranslations } from 'next-intl/server';
import { Clock, Megaphone, TrendingUp } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import { GhlForm } from '@/components/ghl/ghl-embeds';

export default async function SellersPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('sellers');

  const valueProps = [
    { Icon: TrendingUp, title: t('value1Title'), body: t('value1Body') },
    { Icon: Clock, title: t('value2Title'), body: t('value2Body') },
    { Icon: Megaphone, title: t('value3Title'), body: t('value3Body') },
  ];

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('heroTitle')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroLead')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#valuation" className="w-full sm:w-auto">
              {t('heroPrimary')}
            </ButtonLink>
            <ButtonLink href={localizedPath(locale, 'listings')} variant="outline" className="w-full sm:w-auto">
              {t('heroSecondary')}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Valuation CTA + embed */}
      <section id="valuation" className="bg-gray-soft scroll-mt-24">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('valuationEyebrow')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('valuationTitle')}</h2>
            <p className="mt-4 text-lg text-muted">{t('valuationLead')}</p>

            <div id="ghl-valuation-embed" role="region" aria-label={t('valuationFormRegionLabel')} className="mt-8">
              <GhlForm />
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-sm text-muted">
                <a href={SITE.iabsUrl} target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-copyblue">
                  {t('iabsLinkLabel')}
                </a>
              </p>
              <p className="text-sm text-muted">
                <strong className="font-semibold text-ink">{t('valuationDisclaimerStrong')}</strong> {t('valuationDisclaimer')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Value props */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('whyEyebrow')}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">{t('whyTitle')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t('whyLead')}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueProps.map((v) => (
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

      {/* Mini FAQ */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('faqEyebrow')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('faqTitle')}</h2>

            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-gray-soft bg-white open:bg-gray-soft/60">
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-ink">
                    {f.q}
                    <span className="shrink-0 text-copyblue transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted">{t('faqMore')}</p>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-copyblue">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('ctaTitle')}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white">{t('ctaBody')}</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <ButtonLink href="#valuation" variant="accent">
                {t('ctaButton')}
              </ButtonLink>
              <ButtonLink href={localizedPath(locale, 'book')} variant="whiteOutline">
                {t('ctaSecondary')}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}