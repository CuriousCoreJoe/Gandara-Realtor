import { getTranslations } from 'next-intl/server';
import { Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { alternatePath, localizedPath, type RouteKey } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import MobileMenu, { type NavLink } from './mobile-menu';

const NAV_KEYS: { routeKey: RouteKey; labelKey: 'about' | 'buyers' | 'sellers' | 'neighborhoods' | 'contact' }[] = [
  { routeKey: 'about', labelKey: 'about' },
  { routeKey: 'buyers', labelKey: 'buyers' },
  { routeKey: 'sellers', labelKey: 'sellers' },
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

  const isHome = routeKey === 'home';
  const allLinks: NavLink[] = isHome
    ? links
    : [{ href: localizedPath(locale, 'home'), label: t('home') }, ...links];

  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';
  const toggleHref = alternatePath(locale, routeKey);
  const toggleLabel = locale === 'en' ? c('langNames.es') : c('langNames.en');
  const toggleAria = locale === 'en' ? c('switchToSpanish') : c('switchToEnglish');

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar: click-to-call + language toggle */}
      <div className="bg-copyblue text-white">
        <Container className="flex h-10 items-center justify-between !max-w-7xl">
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
<Container className="relative flex h-16 items-center justify-between !max-w-7xl">
          <div className="flex items-center">
            <a
              href={localizedPath(locale, 'home')}
              aria-label={`${SITE.agentName}, ${locale === 'en' ? 'El Paso real estate home' : 'bienes raíces en El Paso inicio'}`}
              className="flex min-h-[44px] items-center gap-3"
            >
              <img src="/homepros-logo.png" className="h-12 w-auto" alt="Home Pros Real Estate Group" />
              <span className="text-2xl font-light text-gray-300" aria-hidden="true">|</span>
              <img src="/logo.svg" className="h-12 w-auto" alt="Angelina Gándara Real Estate" />
            </a>
          </div>

          <nav aria-label="Primary" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden items-center gap-4 lg:flex">
            {allLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] content-center text-sm font-medium text-ink transition-colors hover:text-copyblue whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ButtonLink
                href={localizedPath(locale, 'contact')}
                variant="accent"
                className="px-4 py-2 text-sm"
              >
                {c('bookCall')}
              </ButtonLink>
            </div>
            <div className="lg:hidden">
              <MobileMenu
                links={allLinks}
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
