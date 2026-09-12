import { getTranslations } from 'next-intl/server';
import { CheckCircle2, Clock, Home, Languages, MessageCircle, Search } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import SectionHeading from '@/components/ui/section-heading';
import { GhlForm } from '@/components/ghl/ghl-embeds';

const STEP_ICONS = [MessageCircle, Search, Home, CheckCircle2];

export default async function BuyersPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('buyers');

  const steps = [
    { title: t('step1Title'), body: t('step1Body') },
    { title: t('step2Title'), body: t('step2Body') },
    { title: t('step3Title'), body: t('step3Body') },
    { title: t('step4Title'), body: t('step4Body') },
  ];

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label'), Icon: Home },
    { value: t('stat2Value'), label: t('stat2Label'), Icon: Clock },
    { value: t('stat3Value'), label: t('stat3Label'), Icon: Languages },
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
        <Container className="py-16 text-center sm:py-20">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">{t('subtitle')}</p>
          <div className="mt-8">
            <ButtonLink href={localizedPath(locale, 'book')}>{t('ctaButton')}</ButtonLink>
          </div>
        </Container>
      </section>

      {/* 4-step process */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('stepsTitle')} />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <li key={s.title} className="rounded-2xl border border-gray-soft bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copyblue font-display text-lg font-semibold text-white">
                      {i + 1}
                    </span>
                    <Icon className="h-7 w-7 text-copyblue" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-ink">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <Container className="py-12">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <s.Icon className="mx-auto h-6 w-6 text-yellow" aria-hidden="true" />
                <p className="mt-3 font-display text-4xl font-semibold text-white">{s.value}</p>
                <p className="mt-2 text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-white/55">{t('statsDisclaimer')}</p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('faqTitle')} />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-soft bg-white open:bg-gray-soft/60"
              >
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

      {/* Buyer registration form (GHL slot) */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t('formTitle')} subtitle={t('formSubtitle')} />
            <div className="mt-10">
              <GhlForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
