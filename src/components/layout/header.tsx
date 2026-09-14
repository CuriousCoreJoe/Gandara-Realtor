import { getTranslations } from 'next-intl/server';
import { Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { alternatePath, localizedPath, type RouteKey } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import { HouseMark } from '@/components/ui/icons';
import MobileMenu, { type NavLink } from './mobile-menu';

const NAV_KEYS: { routeKey: RouteKey; labelKey: 'about' | 'buyers' | 'sellers' | 'listings' | 'neighborhoods' | 'contact' }[] = [
  { routeKey: 'about', labelKey: 'about' },
  { routeKey: 'buyers', labelKey: 'buyers' },
  { routeKey: 'sellers', labelKey: 'sellers' },
  { routeKey: 'listings', labelKey: 'listings' },
  { routeKey: 'neighborhoods', labelKey: 'neighborhoods' },
  { routeKey: 'contact', labelKey: 'contact' },
];

export default async function Header({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  const t = await getTranslations('nav');
  const c = await getTranslations('common');

  const links: NavLink[] = NAV_KEYS.map(({ routeKey: rk, labelKey }) => ({
    href: localizedPath(locale, rk),
    label: t(labelKey),
  }));

  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  const toggleHref = alternatePath(locale, routeKey);
  const toggleLabel = locale === 'en' ? c('langNames.es') : c('langNames.en');
  const toggleAria = locale === 'en' ? c('switchToSpanish') : c('switchToEnglish');

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar: click-to-call + language toggle */}
      <div className="bg-copyblue text-white">
        <Container className="flex h-10 items-center justify-between">
          <a
            href={SITE.phoneHref}
            className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-white transition-colors hover:text-yellow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={toggleHref}
            aria-label={toggleAria}
            lang={otherLocale}
            className="flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-yellow"
          >
            <span aria-hidden="true">⇄</span>
            {toggleLabel}
          </a>
        </Container>
      </div>

      {/* Main navigation */}
      <div className="border-b border-gray-soft bg-white">
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href={localizedPath(locale, 'home')}
            aria-label={`${SITE.agentName}, ${locale === 'en' ? 'El Paso real estate home' : 'bienes raíces en El Paso inicio'}`}
            className="flex min-h-[44px] items-center gap-2"
          >
            <HouseMark className="h-7 w-7 shrink-0 text-copyblue" />
            <span className="flex flex-col justify-center leading-tight">
              <span className="font-display text-lg font-semibold text-copyblue">
                Angelina Gándara
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-copyblue">
                Real Estate
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] content-center text-sm font-medium text-ink transition-colors hover:text-copyblue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ButtonLink
                href={localizedPath(locale, 'contact')}
              >
                {c('bookCall')}
              </ButtonLink>
            </div>
            <div className="lg:hidden">
              <MobileMenu
                links={links}
                ctaHref={localizedPath(locale, 'contact')}
                ctaLabel={c('bookCall')}
                phoneHref={SITE.phoneHref}
                phoneLabel={SITE.phoneDisplay}
                openLabel={t('openMenu')}
                closeLabel={t('closeMenu')}
              />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
