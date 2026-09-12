import { getTranslations } from 'next-intl/server';
import { CalendarClock, DollarSign, Info, Megaphone } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { GhlForm } from '@/components/ghl/ghl-embeds';

export default async function SellersPage() {
  const t = await getTranslations('sellers');

  const valueProps = [
    { title: t('value1Title'), body: t('value1Body'), Icon: DollarSign },
    { title: t('value2Title'), body: t('value2Body'), Icon: CalendarClock },
    { title: t('value3Title'), body: t('value3Body'), Icon: Megaphone },
  ];

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
  ];

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">{t('subtitle')}</p>
        </Container>
      </section>

      {/* Value props */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {valueProps.map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-soft bg-white p-7 transition-shadow hover:shadow-md">
                <v.Icon className="h-9 w-9 text-copyblue" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-ink">{v.title}</h2>
                <p className="mt-3 text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Free Home Valuation form (GHL slot) */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={t('formTitle')} subtitle={t('formSubtitle')} />
            <div className="mt-10">
              <GhlForm />
            </div>
            <p className="mx-auto mt-5 flex max-w-xl items-start gap-2 text-sm text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-copyblue" aria-hidden="true" />
              {t('disclaimer')}
            </p>
          </div>
        </Container>
      </section>

      {/* Mini FAQ */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('faqTitle')} />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
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
    </>
  );
}
