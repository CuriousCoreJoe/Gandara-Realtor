import { getTranslations } from 'next-intl/server';
import { Mail, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import InstagramIcon from '@/components/ui/instagram-icon';
import { GhlCalendar, GhlForm } from '@/components/ghl/ghl-embeds';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <>
      {/* Hero + contact options */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('heroEyebrow')}</p>
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('heroTitle')}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroLead')}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

      {/* Form + calendar */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('bookEyebrow')}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">{t('bookTitle')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t('bookLead')}</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-soft bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-ink">{t('formTitle')}</h3>
              <p className="mt-2 text-sm text-muted">{t('formSubtitle')}</p>
              <div id="ghl-contact-form" className="mt-6">
                <GhlForm />
              </div>
            </div>

            <div className="rounded-2xl border border-gray-soft bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-ink">{t('calendarTitle')}</h3>
              <p className="mt-2 text-sm text-muted">{t('calendarSubtitle')}</p>
              <div id="ghl-calendar-embed" className="mt-6">
                <GhlCalendar />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}