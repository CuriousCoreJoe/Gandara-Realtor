import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Fraunces, Inter } from 'next/font/google';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for the whole [locale] segment.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      {/* NOTE: no NextIntlClientProvider here all translations are consumed
          in Server Components (getTranslations). The only client component
          (MobileMenu) receives its labels as props, so serializing the full
          message files to the client would be pure overhead. */}
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
