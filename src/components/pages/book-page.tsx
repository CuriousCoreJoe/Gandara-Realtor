import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/container';
import { GhlCalendar } from '@/components/ghl/ghl-embeds';

export default async function BookPage() {
  const t = await getTranslations('book');

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
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-center text-muted">{t('calendarNote')}</p>
            <GhlCalendar />
          </div>
        </Container>
      </section>
    </>
  );
}
