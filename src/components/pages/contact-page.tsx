import { getTranslations } from 'next-intl/server';
import { ExternalLink, Mail, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import InstagramIcon from '@/components/ui/instagram-icon';
import { GhlCalendar, GhlChat, GhlForm } from '@/components/ghl/ghl-embeds';

export default async function ContactPage() {
  const t = await getTranslations('contact');
  const c = await getTranslations('common');

  const methods = [
    { title: t('phoneTitle'), href: SITE.phoneHref, value: SITE.phoneDisplay, Icon: Phone, external: false },
    { title: t('emailTitle'), href: SITE.emailHref, value: SITE.email, Icon: Mail, external: false },
    { title: t('instagramTitle'), href: SITE.instagramUrl, value: SITE.instagramHandle, Icon: InstagramIcon, external: true },
  ];

  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">{t('subtitle')}</p>
        </Container>
      </section>

      {/* Above-the-fold direct contact */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {methods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group rounded-2xl border border-gray-soft bg-white p-7 text-center transition-shadow hover:shadow-md"
              >
                <m.Icon className="mx-auto h-9 w-9 text-copyblue" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted">{m.title}</p>
                <p className="mt-2 break-all text-xl font-semibold text-ink group-hover:text-copyblue">
                  {m.value}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + chat + calendar (GHL slots) */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-ink">{t('formTitle')}</h2>
              <p className="mt-2 text-muted">{t('formSubtitle')}</p>
              <div className="mt-6">
                <GhlForm />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-ink">{t('chatTitle')}</h2>
                <p className="mt-2 text-muted">{t('chatSubtitle')}</p>
                <div className="mt-6">
                  <GhlChat />
                </div>
              </div>
              <div>
                <GhlCalendar />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* IABS / compliance note */}
      <section className="bg-white">
        <Container className="py-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-soft bg-white p-7 text-center">
            <p className="text-muted">{t('iabsNote')}</p>
            <a
              href={SITE.iabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
            >
              {c('iabsLabel')}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
