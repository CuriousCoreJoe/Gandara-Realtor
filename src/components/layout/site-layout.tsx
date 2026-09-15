import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/routing';
import type { RouteKey } from '@/lib/routes';
import Header from './header';
import Footer from './footer';
import StickyCtaBar from './sticky-cta-bar';

export default function SiteLayout({
  locale,
  routeKey,
  children,
}: {
  locale: Locale;
  routeKey: RouteKey;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} routeKey={routeKey} />
      <main className="flex-1">{children}</main>
      <div className="pb-16 sm:pb-[68px]">
        <Footer locale={locale} />
      </div>
      <StickyCtaBar locale={locale} />
      <div id="ghl-chat-global" />
    </div>
  );
}
