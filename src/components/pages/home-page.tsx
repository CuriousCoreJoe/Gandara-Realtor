import { getTranslations } from 'next-intl/server';
import { Clock, Globe, MapPin, Search, Zap } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';
import { ListingsCta } from '@/components/ghl/ghl-form-modal';
import ButtonLink from '@/components/ui/button-link';
import RecentlySold from '@/components/pages/recently-sold';

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

  const recentlySold = [
    {
      address: '5912 DELTA 79905',
      area: 'South Central',
      image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab44000b2c147832f6fd179.jpeg',
      imageAlt: t('recentlySoldImageAlt'),
    },
    {
      address: '3749 LETICIA 79936',
      area: 'Eastside',
      image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab44647fef86e60d52c4883.jpeg',
      imageAlt: t('recentlySoldImageAlt'),
    },
  ];

  const neighborhoods = [
    {
      routeKey: 'westside' as const,
      title: n('guides.westside.name'),
      body: t('westsideBody'),
      imgAlt: t('westsideImageAlt'),
      image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2ff50f07a3cb6d47ab330.jpg',
    },
    {
      routeKey: 'upperValley' as const,
      title: n('guides.upperValley.name'),
      body: t('upperValleyBody'),
      imgAlt: t('upperValleyImageAlt'),
      image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2fd717c231bdb64f4d2c2.jpg',
    },
    {
      routeKey: 'eastSide' as const,
      title: n('guides.eastSide.name'),
      body: t('eastSideBody'),
      imgAlt: t('eastSideImageAlt'),
      image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2ff50de8ed1c29fd505fe.jpg',
    },
    {
      routeKey: 'fortBliss' as const,
      title: n('guides.fortBliss.name'),
      body: t('fortBlissBody'),
      imgAlt: t('fortBlissImageAlt'),
      image: 'https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab30033665c3ca9551bc5ec.jpg',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-soft">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab3034b30b0f957ccef38a7.jpg')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/60" />
        <Container className="relative py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-yellow">{t('heroEyebrow')}</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{t('heroTitle')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">{t('heroLead')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={localizedPath(locale, 'contact')} variant="accent" className="w-full sm:flex-1">
              {t('heroPrimary')}
            </ButtonLink>
            <ListingsCta locale={locale} variant="primary" className="w-full sm:flex-1">
              {t('heroSecondary')}
            </ListingsCta>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold text-white sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-white/70">{s.label}</div>
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
                <ListingsCta locale={locale} variant="ghost" className="!rounded-none !px-0 !py-0 inline-flex min-h-[44px] items-center font-semibold text-copyblue underline underline-offset-4 transition-colors hover:text-copyblue-dark">
                  {t('sellersRecentSales')}
                </ListingsCta>
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
              <img src="https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab2f9837c231bdb64f46dd8.jpg" alt={t('sellersImageAlt')} className="aspect-[4/3] w-full rounded-xl object-cover" />
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-ink">{t('sellersBadge')}</span>
                <span className="text-sm text-muted">{t('sellersBadgeSub')}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recently sold */}
      <RecentlySold
        eyebrow={t('recentlySoldEyebrow')}
        title={t('recentlySoldTitle')}
        lead={t('recentlySoldLead')}
        soldLabel={t('recentlySoldBadge')}
        prevLabel={t('recentlySoldPrev')}
        nextLabel={t('recentlySoldNext')}
        dotLabel={t('recentlySoldDotLabel')}
        properties={recentlySold}
      />

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
                <img src={nb.image} alt={nb.imgAlt} className="aspect-[4/3] w-full object-cover" />
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