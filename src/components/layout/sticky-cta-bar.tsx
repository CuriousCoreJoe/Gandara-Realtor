import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';

export default async function StickyCtaBar({ locale }: { locale: Locale }) {
  const t = await getTranslations('sticky');
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 hidden border-t border-gray-soft bg-white sm:flex">
      <Container className="flex items-center gap-3 py-2">
        <a
          href={localizedPath(locale, 'contact')}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-copyblue px-4 text-center text-sm font-semibold text-white transition-colors hover:bg-copyblue-dark sm:text-base"
        >
          {t('bookCall')}
        </a>
      </Container>
    </div>
  );
}