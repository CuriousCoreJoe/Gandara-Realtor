import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  // A locale prefix is required for static export (no proxy/middleware runs).
  // English → /en, Spanish → /es.
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const locales = routing.locales as unknown as Locale[];

export const defaultLocale: Locale = routing.defaultLocale as Locale;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (routing.locales as readonly string[]).includes(value);
}
