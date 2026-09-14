import { getTranslations } from 'next-intl/server';
import { Mail, Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import InstagramIcon from '@/components/ui/instagram-icon';
import { GhlCalendar } from '@/components/ghl/ghl-embeds';

export default async function ContactPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('contact');

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('heroTitle')}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroLead')}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('bookEyebrow')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{t('bookTitle')}</h2>
            <p className="mt-4 text-lg text-muted">{t('bookLead')}</p>

            <div className="mt-12">
              <GhlCalendar locale={locale} />
            </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <a href={SITE.phoneHref} className="group rounded-2xl border border-gray-soft bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ink">{t('phoneTitle')}</h2>
              <p className="mt-2 break-all text-lg text-ink group-hover:text-copyblue">{SITE.phoneDisplay}</p>
            </a>

            <a href={SITE.emailHref} className="group rounded-2xl border border-gray-soft bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ink">{t('emailTitle')}</h2>
              <p className="mt-2 break-all text-lg text-ink group-hover:text-copyblue">{SITE.email}</p>
            </a>

            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-gray-soft bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
                <InstagramIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ink">{t('instagramTitle')}</h2>
              <p className="mt-2 break-all text-lg text-ink group-hover:text-copyblue">{SITE.instagramHandle}</p>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}