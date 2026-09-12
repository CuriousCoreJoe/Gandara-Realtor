import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import PlaceholderImage from '@/components/ui/placeholder-image';

export default async function ListingsPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('listings');

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">{t('subtitle')}</p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="overflow-hidden rounded-2xl border border-gray-soft bg-white transition-shadow hover:shadow-md">
                <PlaceholderImage label={t('imageAlt')} className="aspect-[4/3] w-full" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-copyblue">{t('cardLabel')}</p>
                  <p className="mt-2 text-muted">{t('cardPlaceholder')}</p>
                  <a
                    href={localizedPath(locale, 'contact')}
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
                  >
                    {t('cardCta')}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-copyblue">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">{t('ctaTitle')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{t('ctaBody')}</p>
          <div className="mt-8">
            <ButtonLink href={localizedPath(locale, 'book')} variant="accent">
              {t('ctaButton')}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
