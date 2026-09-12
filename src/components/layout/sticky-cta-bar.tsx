import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';

export default async function StickyCtaBar({ locale }: { locale: Locale }) {
  const t = await getTranslations('sticky');
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-soft bg-white">
      <Container className="flex items-center gap-3 py-2">
        <a
          href={localizedPath(locale, 'sellers')}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-yellow px-4 text-center text-sm font-semibold text-ink transition-colors hover:bg-yellow-dark sm:text-base"
        >
          {t('valuation')}
        </a>
        <a
          href={localizedPath(locale, 'book')}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-copyblue px-4 text-center text-sm font-semibold text-white transition-colors hover:bg-copyblue-dark sm:text-base"
        >
          {t('bookCall')}
        </a>
      </Container>
    </div>
  );
}
