import { getTranslations } from 'next-intl/server';
import { Mail } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath, type RouteKey } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { EQUAL_HOUSING_MARK, REALTOR_LOGO_WHITE } from '@/lib/credentials';
import Container from '@/components/ui/container';
import InstagramIcon from '@/components/ui/instagram-icon';
import { HouseMark } from '@/components/ui/icons';

const EXPLORE: { routeKey?: RouteKey; labelKey: 'about' | 'buyers' | 'sellers' | 'blog' | 'links' | 'neighborhoods'; href?: string }[] = [
  { routeKey: 'about', labelKey: 'about' },
  { routeKey: 'buyers', labelKey: 'buyers' },
  { routeKey: 'sellers', labelKey: 'sellers' },
  { routeKey: 'neighborhoods', labelKey: 'neighborhoods' },
  { labelKey: 'blog', href: SITE.blogUrl },
  { routeKey: 'links', labelKey: 'links' },
];

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations('footer');
  const c = await getTranslations('common');
  const n = await getTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <a href={localizedPath(locale, 'home')} className="inline-flex min-h-[44px] items-center gap-2 font-display text-2xl font-semibold text-white">
              <HouseMark className="h-7 w-7 text-yellow" />
              {SITE.agentName}
            </a>
            <p className="mt-1 text-sm font-medium text-yellow">{SITE.siteName}</p>
            <p className="mt-3 max-w-xs text-sm text-white/70">{t('tagline')}</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-yellow">
              {t('contactHeading')}
            </h2>
            <ul className="space-y-3">
              <li>
                <address className="text-sm not-italic text-white/85">
                  {SITE.brokerAddress.streetAddress}
                  <br />
                  {SITE.brokerAddress.addressLocality}, {SITE.brokerAddress.addressRegion}{' '}
                  {SITE.brokerAddress.postalCode}
                </address>
              </li>
              <li>
                <a href={SITE.phoneHref} className="font-display text-xl font-semibold text-white transition-colors hover:text-yellow">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/85 transition-colors hover:text-yellow">
                  <Mail className="h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/85 transition-colors hover:text-yellow"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-yellow" />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <p className="text-sm text-white/60">{c('byAppointment')}</p>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-yellow">
              {t('exploreHeading')}
            </h2>
            <ul className="space-y-1">
              {EXPLORE.map(({ routeKey: rk, labelKey, href }) => (
                <li key={rk ?? labelKey}>
                  <a
                    href={href ?? localizedPath(locale, rk!)}
                    className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white"
                    {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {rk === 'about' ? t('aboutAngelina') : n(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-yellow">
              {t('legalHeading')}
            </h2>
            <ul className="space-y-1">
              <li>
                <a href={localizedPath(locale, 'privacy')} className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white">
                  {c('privacy')}
                </a>
              </li>
<li>
                <a href={localizedPath(locale, 'terms')} className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white">
                  {c('terms')}
                </a>
              </li>
              <li>
                <a href="https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab190e498fc609c5db9a4ef.pdf" target="_blank" rel="noopener noreferrer" className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white">
                  Consumer Protection
                </a>
              </li>
              <li>
                <a href="https://assets.cdn.filesafe.space/UqxL7nKdq43kO71KOplf/media/6ab19e0c4091fa65e6bbc177.pdf" target="_blank" rel="noopener noreferrer" className="flex min-h-[40px] items-center text-sm text-white/80 transition-colors hover:text-white">
                  Brokerage Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* TREC compliance */}
      <div className="border-t border-white/10">
        <Container className="py-8">
          <img
            src={REALTOR_LOGO_WHITE.src}
            alt={REALTOR_LOGO_WHITE.alt}
            className="h-9 w-auto"
          />

          <p className="mt-5 text-sm text-white/85">
            {SITE.dbaName} · {t('dbaLabel')} {SITE.siteName}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {SITE.broker} · Broker of Record: {SITE.brokerOfRecord}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {SITE.agentName} · {c('licensedAgent')} · {SITE.trecNumber}
          </p>

          <p className="mt-3 text-sm text-white/70">
            <a href={SITE.iabsUrl} target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-yellow">
              {c('iabsLabel')}
            </a>
          </p>



          <div className="mt-5 flex items-start gap-3">
            <img
              src={EQUAL_HOUSING_MARK.src}
              alt={EQUAL_HOUSING_MARK.alt}
              className="mt-0.5 h-9 w-auto shrink-0 rounded-md bg-white p-1"
            />
            <p className="max-w-2xl text-xs leading-relaxed text-white/70">
              <strong className="font-semibold text-white">{c('fairHousing')}</strong> {c('fairHousingStatement')}
            </p>
          </div>

          <p className="mt-5 text-sm text-white/55">
            {t('dbaDisclosure', { year, dbaName: SITE.dbaName, siteName: SITE.siteName, rights: c('allRightsReserved') })}
          </p>
        </Container>
      </div>
    </footer>
  );
}