import type { ReactNode } from 'react';
import Container from '@/components/ui/container';

export interface LegalSection {
  title: string;
  body: string;
  extra?: ReactNode;
}

interface LegalArticleProps {
  title: string;
  updated?: string;
  intro?: string;
  sections: LegalSection[];
}

export default function LegalArticle({ title, updated, intro, sections }: LegalArticleProps) {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
          {updated ? (
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-muted">{updated}</p>
          ) : null}
          {intro ? <p className="mt-6 text-lg text-ink">{intro}</p> : null}

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 text-muted">{s.body}</p>
                {s.extra ? <div className="mt-4">{s.extra}</div> : null}
              </div>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
