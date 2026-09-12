import { getMessages, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from '@/lib/routes';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import Container from '@/components/ui/container';
import ButtonLink from '@/components/ui/button-link';
import PlaceholderImage from '@/components/ui/placeholder-image';

interface Fact {
  label: string;
  value: string;
}

export default async function NeighborhoodsHubPage({ locale }: { locale: Locale }) {
  const t = await getTranslations('neighborhoods');
  const messages = await getMessages();

  const guides = messages.neighborhoods.guides;
  const cards = NEIGHBORHOODS.map((n) => ({
    ...n,
    guide: guides[n.key],
  }));

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{t('hubEyebrow')}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{t('hubHeroTitle')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t('hubHeroLead')}</p>
        </Container>
      </section>

      {/* Area cards */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <h2 className="sr-only">{t('hubAreasTitle')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((c) => (
              <article key={c.key} className="flex flex-col overflow-hidden rounded-2xl border border-gray-soft bg-white shadow-sm transition-shadow hover:shadow-md">
                <PlaceholderImage label={`${c.guide.name}`} className="aspect-[4/3] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold text-ink">{c.guide.name}</h3>
                    <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-ink">
                      {c.guide.badge}
                    </span>
                  </div>

                  <table className="mt-5 w-full border-collapse text-sm">
                    <caption className="sr-only">{c.guide.factLabel}</caption>
                    <tbody>
                      {(c.guide.facts as Fact[]).map((f) => (
                        <tr key={f.label} className="border-b border-gray-soft last:border-b-0">
                          <th scope="row" className="py-2 text-left font-medium uppercase tracking-wide text-muted">
                            {f.label}
                          </th>
                          <td className="py-2 text-right font-semibold text-ink">{f.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="mt-4 text-sm text-muted">
                    <strong className="font-semibold text-ink">{t('whatLocalsLove')}</strong> {c.guide.localsLove}
                  </p>

                  <div className="mt-6 pt-1">
                    <ButtonLink href={localizedPath(locale, 'contact')} variant="outline" className="w-full">
                      {t('hubBookCall')}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted">{t('hubNote')}</p>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-copyblue">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('hubCtaTitle')}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white">{t('hubCtaBody')}</p>
            </div>
            <div className="flex md:justify-end">
              <ButtonLink href={localizedPath(locale, 'book')} variant="accent">
                {t('hubCtaButton')}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}