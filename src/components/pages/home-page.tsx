import { getTranslations } from 'next-intl/server';
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Home,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Zap,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import SectionHeading from '@/components/ui/section-heading';
import InstagramIcon from '@/components/ui/instagram-icon';
import PlaceholderImage from '@/components/ui/placeholder-image';
import { GhlForm } from '@/components/ghl/ghl-embeds';

const VALUE_ICONS = [Home, MessageCircle, Languages];
const FEATURE_ICONS = [Languages, Zap, MapPin];

export default async function HomePage({ locale }: { locale: Locale }) {
  const t = await getTranslations('home');
  const ab = await getTranslations('about');

  const valueProps = [
    { title: t('value1Title'), body: t('value1Body') },
    { title: t('value2Title'), body: t('value2Body') },
    { title: t('value3Title'), body: t('value3Body') },
  ];

  const features = [t('feature1'), t('feature2'), t('feature3')];

  const neighborhoods = [
    { routeKey: 'westside' as const, label: 'Westside' },
    { routeKey: 'upperValley' as const, label: 'Upper Valley' },
    { routeKey: 'eastSide' as const, label: 'East Side / Horizon City' },
    { routeKey: 'fortBliss' as const, label: 'Fort Bliss Area' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-24">
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('heroSubtitle')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={localizedPath(locale, 'book')} className="w-full sm:w-auto">
              {t('heroPrimary')}
            </ButtonLink>
            <ButtonLink href={localizedPath(locale, 'sellers')} variant="outline" className="w-full sm:w-auto">
              {t('heroSecondary')}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Trust / license strip */}
      <section className="border-b border-gray-soft bg-white">
        <Container className="grid gap-6 py-8 text-center sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3">
            <Languages className="h-6 w-6 shrink-0 text-copyblue" aria-hidden="true" />
            <span className="font-semibold text-ink">{t('trust.bilingual')}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <BadgeCheck className="h-6 w-6 shrink-0 text-copyblue" aria-hidden="true" />
            <span className="font-semibold text-ink">{t('trust.licensed')}</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-6 w-6 shrink-0 text-copyblue" aria-hidden="true" />
            <span className="font-semibold text-ink">{t('trust.responsive')}</span>
          </div>
        </Container>
      </section>

      {/* Buyer value props */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('valueTitle')} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueProps.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <div key={v.title} className="rounded-2xl border border-gray-soft bg-white p-7 transition-shadow hover:shadow-md">
                  <Icon className="h-9 w-9 text-copyblue" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-ink">{v.title}</h3>
                  <p className="mt-3 text-muted">{v.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Seller CTA */}
      <section className="bg-copyblue">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            {t('sellerCtaTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{t('sellerCtaBody')}</p>
          <div className="mt-8">
            <ButtonLink href={localizedPath(locale, 'sellers')} variant="accent">
              {t('sellerCtaButton')}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Featured neighborhoods */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('neighborhoodsTitle')} subtitle={t('neighborhoodsSubtitle')} />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods.map((n) => (
              <a
                key={n.routeKey}
                href={localizedPath(locale, n.routeKey)}
                className="flex min-h-[44px] items-center rounded-full border border-gray-soft bg-gray-soft px-6 py-2.5 font-medium text-ink transition-colors hover:bg-copyblue hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature strip */}
      <section className="bg-ink">
        <Container className="flex flex-col items-center justify-around gap-6 py-10 text-center md:flex-row">
          {features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div key={f} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-yellow" aria-hidden="true" />
                <span className="font-display text-lg text-white">{f}</span>
              </div>
            );
          })}
        </Container>
      </section>

      {/* About teaser */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <PlaceholderImage label={ab('imageAlt')} className="min-h-[320px] rounded-2xl">
              <span className="font-display text-xl font-semibold text-muted">{SITE.agentName}</span>
            </PlaceholderImage>
            <div>
              <h2 className="text-3xl font-semibold italic text-ink sm:text-4xl">{t('aboutTitle')}</h2>
              <p className="mt-6 text-lg text-muted">{t('aboutExcerpt')}</p>
              <div className="mt-6">
                <a
                  href={localizedPath(locale, 'about')}
                  className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-copyblue transition-colors hover:text-copyblue-dark"
                >
                  {t('aboutLink')}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews (placeholders) */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('reviewsTitle')} subtitle={t('reviewsSubtitle')} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-gray-soft bg-white p-7 text-center">
                <p className="italic text-muted">“{t('reviewQuote')}”</p>
                <p className="mt-4 font-semibold text-ink">{t('reviewAuthor')}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t('contactTitle')} subtitle={t('contactSubtitle')} />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-soft bg-gray-soft p-7">
              <h3 className="text-xl font-semibold text-ink">{t('contactHeading')}</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href={SITE.phoneHref} className="flex min-h-[44px] items-center gap-3 font-semibold text-ink transition-colors hover:text-copyblue">
                    <Phone className="h-5 w-5 text-copyblue" aria-hidden="true" />
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={SITE.emailHref} className="flex min-h-[44px] items-center gap-3 font-semibold text-ink transition-colors hover:text-copyblue">
                    <Mail className="h-5 w-5 text-copyblue" aria-hidden="true" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-3 font-semibold text-ink transition-colors hover:text-copyblue">
                    <InstagramIcon className="h-5 w-5 text-copyblue" />
                    {SITE.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
            <GhlForm />
          </div>
        </Container>
      </section>
    </>
  );
}
