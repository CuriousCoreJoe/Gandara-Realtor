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
      {/* pb accounts for the fixed bottom CTA bar */}
      <div className="pb-16 sm:pb-[68px]">
        <Footer locale={locale} />
      </div>
      <StickyCtaBar locale={locale} />

      {/* GHL CHAT global floating widget (after-hours capture).
          Paste the chat loader script here, e.g.:
          <script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"></script>
          The visible, labelled placeholder lives on the Contact page. */}
      <div id="ghl-chat-global" />
    </div>
  );
}
