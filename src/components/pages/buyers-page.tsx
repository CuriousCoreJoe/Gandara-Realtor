import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import { ListingsCta } from '@/components/ghl/ghl-form-modal';
import { GhlCalendar } from '@/components/ghl/ghl-embeds';

export default async function BuyersPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('buyers');

  const steps = [
    { badge: t('step1Badge'), title: t('step1Title'), body: t('step1Body') },
    { badge: t('step2Badge'), title: t('step2Title'), body: t('step2Body') },
    { badge: t('step3Badge'), title: t('step3Title'), body: t('step3Body') },
    { badge: t('step4Badge'), title: t('step4Title'), body: t('step4Body') },
  ];

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
  ];

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-12 text-center sm:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('heroTitle')}</h1>
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

      <section id="calendar" className="bg-gray-soft scroll-mt-24">
        <Container className="py-12 sm:py-16">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('ctaTitle')}</h2>
            <p className="mt-4 text-lg text-muted">{t('ctaBody')}</p>
            <div className="mt-8">
              <GhlCalendar locale={locale} />
            </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('processEyebrow')}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">{t('processTitle')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t('processLead')}</p>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.badge} className="rounded-2xl border border-gray-soft bg-white p-7 shadow-sm">
                <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-ink">{s.badge}</span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('marketEyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('marketTitle')}</h2>

          <div className="mt-12 grid gap-10 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-muted">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">{t('statsDisclaimer')}</p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('faqEyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('faqTitle')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t('faqLead')}</p>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
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
        </Container>
      </section>

      <section className="bg-copyblue">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('ctaTitle')}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white">{t('ctaBody')}</p>
            </div>
            <div className="flex justify-center gap-4 md:justify-end">
              <ButtonLink href={localizedPath(locale, 'contact')} variant="accent">
                {t('ctaButton')}
              </ButtonLink>
              <ListingsCta locale={locale} variant="whiteOutline">
                {t('ctaSecondary')}
              </ListingsCta>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}