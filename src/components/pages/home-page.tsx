import { getTranslations } from 'next-intl/server';
import { Clock, Globe, MapPin, Search, Zap } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import PlaceholderImage from '@/components/ui/placeholder-image';

export default async function HomePage({ locale }: { locale: Locale }) {
  const t = await getTranslations('home');
  const n = await getTranslations('neighborhoods');

  const buyers = [
    { Icon: Search, title: t('buyer1Title'), body: t('buyer1Body') },
    { Icon: Clock, title: t('buyer2Title'), body: t('buyer2Body') },
    { Icon: Globe, title: t('buyer3Title'), body: t('buyer3Body') },
  ];

  const why = [
    { Icon: Globe, title: t('why1Title'), body: t('why1Body') },
    { Icon: Zap, title: t('why2Title'), body: t('why2Body') },
    { Icon: MapPin, title: t('why3Title'), body: t('why3Body') },
  ];

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  const neighborhoods = [
    {
      routeKey: 'westside' as const,
      title: n('guides.westside.name'),
      body: t('westsideBody'),
      imgAlt: t('westsideImageAlt'),
    },
    {
      routeKey: 'upperValley' as const,
      title: n('guides.upperValley.name'),
      body: t('upperValleyBody'),
      imgAlt: t('upperValleyImageAlt'),
    },
    {
      routeKey: 'eastSide' as const,
      title: n('guides.eastSide.name'),
      body: t('eastSideBody'),
      imgAlt: t('eastSideImageAlt'),
    },
    {
      routeKey: 'fortBliss' as const,
      title: n('guides.fortBliss.name'),
      body: t('fortBlissBody'),
      imgAlt: t('fortBlissImageAlt'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="bg-gray-soft"
        style={{ background: 'radial-gradient(120% 80% at 100% 0%, rgba(0,87,121,0.08), transparent 60%), var(--color-gray-soft)' }}
      >
        <Container className="py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">{t('heroTitle')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroLead')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={localizedPath(locale, 'contact')} variant="accent" className="w-full sm:flex-1">
              {t('heroPrimary')}
            </ButtonLink>
            <ButtonLink href={localizedPath(locale, 'listings')} variant="outline" className="w-full sm:flex-1">
              {t('heroSecondary')}
            </ButtonLink>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Buyers */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('buyersEyebrow')}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">{t('buyersTitle')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t('buyersLead')}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {buyers.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-soft bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
                  <b.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{b.title}</h3>
                <p className="mt-3 text-muted">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href={localizedPath(locale, 'buyers')} className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-copyblue underline underline-offset-4 transition-colors hover:text-copyblue-dark">
              {t('buyersLink')}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Sellers */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('sellersEyebrow')}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('sellersTitle')}</h2>
              <p className="mt-4 text-lg text-muted">{t('sellersLead')}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <ButtonLink href={localizedPath(locale, 'sellers')}>{t('sellersCta')}</ButtonLink>
                <a href={localizedPath(locale, 'listings')} className="inline-flex min-h-[44px] items-center font-semibold text-copyblue underline underline-offset-4 transition-colors hover:text-copyblue-dark">
                  {t('sellersRecentSales')}
                </a>
              </div>
              <ul className="mt-8 space-y-3">
                {[t('sellerPoint1'), t('sellerPoint2'), t('sellerPoint3')].map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-copyblue" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-ink">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-soft bg-white p-4 shadow-sm">
              <PlaceholderImage label={t('sellersImageAlt')} className="aspect-[4/3] w-full rounded-xl" />
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-ink">{t('sellersBadge')}</span>
                <span className="text-sm text-muted">{t('sellersBadgeSub')}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured neighborhoods */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('neighborhoodsEyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('neighborhoodsTitle')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t('neighborhoodsLead')}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map((nb) => (
              <a
                key={nb.routeKey}
                href={localizedPath(locale, nb.routeKey)}
                className="group overflow-hidden rounded-2xl border border-gray-soft bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <PlaceholderImage label={nb.imgAlt} className="aspect-[4/3] w-full" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">{nb.title}</h3>
                  <p className="mt-2 text-sm text-muted">{nb.body}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a href={localizedPath(locale, 'neighborhoods')} className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-copyblue underline underline-offset-4 transition-colors hover:text-copyblue-dark">
              {t('neighborhoodsLink')}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Why Angelina */}
      <section className="bg-ink">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-yellow">{t('whyEyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t('whyTitle')}</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {why.map((w) => (
              <div key={w.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-yellow">
                  <w.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{w.title}</h3>
                <p className="mt-3 text-white/70">{w.body}</p>
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
              <p className="mt-4 max-w-2xl text-lg text-white/90">{t('ctaBody')}</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <ButtonLink href={localizedPath(locale, 'contact')} variant="accent">
                {t('ctaButton')}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}