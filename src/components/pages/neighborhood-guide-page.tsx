import { getMessages, getTranslations } from 'next-intl/server';
import {
  Clock,
  GraduationCap,
  Home,
  MapPinned,
  Mountain,
  Shield,
  Store,
  Tag,
  Users,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import type { NeighborhoodKey } from '@/lib/neighborhoods';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';

interface Fact {
  label: string;
  value: string;
}

interface Highlight {
  title: string;
  body: string;
}

const HIGHLIGHT_ICONS: Record<NeighborhoodKey, LucideIcon[]> = {
  westside: [Mountain, GraduationCap, Store],
  upperValley: [Waves, Home, Clock],
  eastSide: [Home, Users, Tag],
  fortBliss: [Shield, Clock, Home],
};

export default async function NeighborhoodGuidePage({
  locale,
  neighborhoodKey,
}: {
  locale: Locale;
  neighborhoodKey: NeighborhoodKey;
}) {
  const t = await getTranslations('neighborhoods');
  const messages = await getMessages();

  const guide = messages.neighborhoods.guides[neighborhoodKey];
  const highlights = guide.highlights as Highlight[];
  const icons = HIGHLIGHT_ICONS[neighborhoodKey];

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('hubEyebrow')}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{guide.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{guide.heroLead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={localizedPath(locale, 'contact')} className="w-full sm:w-auto">
              {t('hubBookCall')}
            </ButtonLink>
            <ButtonLink href={localizedPath(locale, 'neighborhoods')} variant="outline" className="w-full sm:w-auto">
              {t('allNeighborhoods')}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('overviewEyebrow')}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{guide.overviewTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink">{guide.overview1}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink">{guide.overview2}</p>

              <h3 className="mt-8 text-xl font-semibold text-ink">{t('localsLoveLabel')}</h3>
              <p className="mt-3 font-display text-2xl font-semibold italic leading-snug text-ink">
                &ldquo;{guide.localsLove}&rdquo;
              </p>

              <div className="mt-8">
                <ButtonLink href={localizedPath(locale, 'contact')}>{guide.bookAreaCta}</ButtonLink>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-soft bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-ink">{t('quickFactsTitle')}</h3>
              <table className="mt-4 w-full border-collapse text-sm">
                <caption className="sr-only">{guide.factLabel}</caption>
                <tbody>
                  {(guide.facts as Fact[]).map((f) => (
                    <tr key={f.label} className="border-b border-gray-soft last:border-b-0">
                      <th scope="row" className="py-2.5 text-left font-medium uppercase tracking-wide text-muted">
                        {f.label}
                      </th>
                      <td className="py-2.5 text-right font-semibold text-ink">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-sm text-muted">{t('dataNote')}</p>
              <div className="mt-5">
                <ButtonLink href={localizedPath(locale, 'contact')} variant="outline" className="w-full">
                  {t('hubBookCall')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What makes [area] special */}
      <section className="bg-gray-soft">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('livingEyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{guide.livingTitle}</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = icons[i] ?? MapPinned;
              return (
                <div key={h.title} className="rounded-2xl border border-gray-soft bg-white p-7 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-soft text-copyblue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{h.title}</h3>
                  <p className="mt-3 text-muted">{h.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-copyblue">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{guide.ctaTitle}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white">{guide.ctaBody}</p>
            </div>
            <div className="flex md:justify-end">
              <ButtonLink href={localizedPath(locale, 'contact')} variant="accent">
                {t('hubBookCall')}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}