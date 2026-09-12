import { getTranslations } from 'next-intl/server';
import { Mail, Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath, type RouteKey } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import InstagramIcon from '@/components/ui/instagram-icon';

const NAV_FOOTER: { routeKey: RouteKey; labelKey: 'buyers' | 'sellers' | 'listings' | 'neighborhoods' | 'about' | 'contact' }[] = [
  { routeKey: 'buyers', labelKey: 'buyers' },
  { routeKey: 'sellers', labelKey: 'sellers' },
  { routeKey: 'listings', labelKey: 'listings' },
  { routeKey: 'neighborhoods', labelKey: 'neighborhoods' },
  { routeKey: 'about', labelKey: 'about' },
  { routeKey: 'contact', labelKey: 'contact' },
];

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations('footer');
  const c = await getTranslations('common');
  const n = await getTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand + direct contact */}
          <div>
            <p className="font-display text-2xl font-semibold text-white">{SITE.agentName}</p>
            <p className="mt-1 max-w-xs text-sm text-white/70">{t('tagline')}</p>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex min-h-[44px] items-center gap-3 text-2xl font-semibold text-white transition-colors hover:text-yellow"
                >
                  <Phone className="h-5 w-5 shrink-0 text-yellow" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex min-h-[44px] items-center gap-3 text-base text-white/85 transition-colors hover:text-yellow"
                >
                  <Mail className="h-5 w-5 shrink-0 text-yellow" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-3 text-base text-white/85 transition-colors hover:text-yellow"
                >
                  <InstagramIcon className="h-5 w-5 shrink-0 text-yellow" />
                  {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label={t('navHeading')}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-yellow">
              {t('navHeading')}
            </h2>
            <ul className="space-y-1">
              {NAV_FOOTER.map(({ routeKey: rk, labelKey }) => (
                <li key={rk}>
                  <a
                    href={localizedPath(locale, rk)}
                    className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {n(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-yellow">
              {t('legalHeading')}
            </h2>
            <ul className="space-y-1">
              <li>
                <a
                  href={localizedPath(locale, 'privacy')}
                  className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  {c('privacy')}
                </a>
              </li>
              <li>
                <a
                  href={localizedPath(locale, 'terms')}
                  className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  {c('terms')}
                </a>
              </li>
              <li>
                <a
                  href={localizedPath(locale, 'trec')}
                  className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  {c('trec')}
                </a>
              </li>
              <li>
                <a
                  href={SITE.iabsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white"
                >
                  {c('iabsLabel')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* TREC compliance / trust bar */}
      <div className="border-t border-white/10">
        <Container className="py-8 text-center">
          <p className="text-xl font-semibold text-white">{SITE.broker}</p>
          <p className="mt-2 text-base text-white/80">
            {SITE.agentName} · {c('licensedAgent')} · {SITE.trecNumber}
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-white/60">{c('realtorDisclaimer')}</p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {c('fairHousing')}
            </span>
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-white/55">
            {c('fairHousingStatement')}
          </p>

          <p className="mt-5 text-sm text-white/60">
            {t('copyright', { year, name: SITE.agentName, rights: c('allRightsReserved') })}
          </p>
        </Container>
      </div>
    </footer>
  );
}
