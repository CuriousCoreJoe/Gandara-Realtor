import { getTranslations } from 'next-intl/server';
import { Calendar, ChevronRight, Home, Map, Search, User } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { alternatePath, localizedPath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import PlaceholderImage from '@/components/ui/placeholder-image';

/**
 * Bio-link hub ("links" page). Standalone route no header/footer chrome.
 * A single centered card over a brand-gradient backdrop.
 */
export default async function LinksPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('links');
  const c = await getTranslations('common');

  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  const toggleHref = alternatePath(locale, 'links');
  const toggleLabel = locale === 'en' ? c('langNames.es') : c('langNames.en');
  const toggleAria = locale === 'en' ? c('switchToSpanish') : c('switchToEnglish');

  const cards = [
    {
      Icon: Calendar,
      href: localizedPath(locale, 'contact'),
      title: t('bookTitle'),
      subtitle: t('bookSubtitle'),
    },
    {
      Icon: Home,
      href: localizedPath(locale, 'sellers'),
      title: t('valuationTitle'),
      subtitle: t('valuationSubtitle'),
    },
    {
      Icon: Search,
      href: localizedPath(locale, 'listings'),
      title: t('listingsTitle'),
      subtitle: t('listingsSubtitle'),
    },
    {
      Icon: Map,
      href: localizedPath(locale, 'neighborhoods'),
      title: t('neighborhoodsTitle'),
      subtitle: t('neighborhoodsSubtitle'),
    },
  ];

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #005779 0%, #00445e 52%, #0f2733 100%)' }}
    >
      {/* Decorative color glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-yellow/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-yellow/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-copyblue-light/20 blur-3xl" />

      {/* Language toggle */}
      <div className="relative z-20 mb-[5px] flex justify-end px-4 pt-4">
        <a
          href={toggleHref}
          lang={otherLocale}
          aria-label={toggleAria}
          className="flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-yellow hover:text-ink"
        >
          <span aria-hidden="true">⇄</span>
          {toggleLabel}
        </a>
      </div>

      {/* Centered card */}
      <main className="relative z-10 flex flex-1 flex-col items-center px-4 pb-16 sm:pb-20">
        <div className="w-full max-w-[480px] overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)]">
          {/* Color accent bar */}
          <div aria-hidden="true" className="h-1.5 w-full bg-gradient-to-r from-copyblue via-yellow to-copyblue" />

          <div className="px-5 py-8 sm:px-9">
            {/* Card header */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-copyblue" />
                El Paso, Texas
              </span>

              {/* Headshot placeholder */}
              <div className="relative mx-auto mt-6 h-28 w-28">
                <PlaceholderImage
                  label={t('headshotAlt')}
                  className="h-28 w-28 rounded-full ring-4 ring-yellow shadow-[0_12px_30px_-8px_rgba(255,179,83,0.7)]"
                >
                  <User className="h-12 w-12 text-copyblue/40" aria-hidden="true" />
                </PlaceholderImage>
              </div>

              <h1 className="mt-5 font-display text-3xl font-semibold text-copyblue sm:text-4xl">
                {SITE.agentName}
              </h1>
              <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-yellow to-copyblue" />
              <p className="mx-auto mt-3 max-w-[360px] text-base font-medium leading-normal text-ink">
                {t('tagline')}
              </p>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/15 text-ink ring-1 ring-yellow/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow hover:shadow-[0_8px_20px_-6px_rgba(255,179,83,0.8)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16S15.4 5.84 12 5.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.41-10.85c-.8 0-1.44.65-1.44 1.44s.65 1.44 1.44 1.44 1.44-.65 1.44-1.44-.64-1.44-1.44-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/15 text-ink ring-1 ring-yellow/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow hover:shadow-[0_8px_20px_-6px_rgba(255,179,83,0.8)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>

            {/* Link cards */}
            <div className="mt-6 flex flex-col gap-3">
              {cards.map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  className="group flex items-center rounded-[14px] border border-gray-soft bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow hover:bg-yellow hover:shadow-[0_8px_16px_rgba(255,179,83,0.25)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-copyblue/10 text-copyblue transition-colors duration-300 group-hover:bg-white/40 group-hover:text-ink">
                    <card.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="ml-4 flex flex-col">
                    <span className="text-lg font-semibold leading-snug text-ink">
                      {card.title}
                    </span>
                    <span className="text-sm text-muted transition-colors duration-300 group-hover:text-ink">
                      {card.subtitle}
                    </span>
                  </span>
                  <ChevronRight
                    className="ml-auto h-5 w-5 shrink-0 text-yellow transition-colors duration-300 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href={localizedPath(locale, 'contact')}
              className="mt-6 block w-full rounded-[14px] bg-gradient-to-r from-copyblue to-copyblue-dark px-4 py-4 text-center text-lg font-semibold uppercase tracking-[0.3px] text-white shadow-[0_10px_25px_-5px_rgba(0,87,121,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:from-yellow hover:to-yellow-dark hover:text-ink"
            >
              {t('ctaLabel')}
            </a>

            {/* Footer credit */}
            <p className="mt-5 text-center text-xs text-muted">{t('footerCredit')}</p>
          </div>
        </div>
      </main>
    </div>
  );
}