import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { SITE_URL } from './src/lib/site';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// ---------------------------------------------------------------------------
// Launch gate: warn (once, at build start) if the canonical domain is still a
// placeholder. This runs exactly once per `next build`, so the warning is
// prominent in CI/deploy logs without spamming per-page output.
// ---------------------------------------------------------------------------
if (
  !process.env.NEXT_PUBLIC_SITE_URL ||
  /example\.com|EXAMPLE|TODO|placeholder/i.test(SITE_URL)
) {
  console.warn(
    '\n' +
      '╔══════════════════════════════════════════════════════════════╗\n' +
      '║  [site] WARNING: SITE_URL is still the placeholder domain.    ║\n' +
      '║  Set the real domain before deploying to production.          ║\n' +
      `║  Current: ${SITE_URL}\n` +
      '║  Fix: set NEXT_PUBLIC_SITE_URL, or edit src/lib/site.ts.      ║\n' +
      '╚══════════════════════════════════════════════════════════════╝\n',
  );
}

const nextConfig: NextConfig = {
  // Static export — no Node server, no ISR, no edge functions.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
