import { getMessages, getTranslations } from 'next-intl/server';
import { Search } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import PlaceholderImage from '@/components/ui/placeholder-image';

interface ListingItem {
  name: string;
  price: string;
  badge: 'active' | 'new' | 'reduced';
  details: string;
  area: string;
  imageAlt: string;
}

export default async function ListingsPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('listings');
  const messages = await getMessages();

  const items = messages.listings.items as ListingItem[];

  const badgeLabel = (badge: ListingItem['badge']) => {
    if (badge === 'new') return t('badgeNew');
    if (badge === 'reduced') return t('badgeReduced');
    return t('badgeActive');
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('heroTitle')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroLead')}</p>
        </Container>
      </section>

      {/* Listings grid */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <h2 className="sr-only">{t('gridTitle')}</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.name} className="flex flex-col overflow-hidden rounded-2xl border border-gray-soft bg-white shadow-sm transition-shadow hover:shadow-md">
                <PlaceholderImage label={item.imageAlt} className="aspect-[4/3] w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-ink">{item.price}</span>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        item.badge === 'active' ? 'bg-gray-soft text-ink' : 'bg-yellow text-ink'
                      }`}
                    >
                      {badgeLabel(item.badge)}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.details}</p>
                  <p className="mt-1 text-sm text-muted">{item.area}</p>
                  <div className="mt-5 pt-1">
                    <ButtonLink href={localizedPath(locale, 'contact')} className="w-full">
                      {t('viewDetails')}
                    </ButtonLink>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Coming soon */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
              <Search className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{t('comingSoonTitle')}</h2>
            <p className="mt-4 text-lg text-muted">{t('comingSoonBody')}</p>
            <div className="mt-8">
              <ButtonLink href={localizedPath(locale, 'book')}>{t('comingSoonCta')}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}