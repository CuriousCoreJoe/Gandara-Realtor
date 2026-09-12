import type { ReactNode } from 'react';
import { SITE } from '@/lib/site';
import Container from '@/components/ui/container';

export type LegalBlock =
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'note'; text: string }
  | { kind: 'contact'; text: string };

export interface LegalSection {
  title: string;
  id?: string;
  blocks: LegalBlock[];
}

interface LegalArticleProps {
  eyebrow: string;
  title: string;
  lead: string;
  updated?: string;
  sections: LegalSection[];
  cta?: {
    title: string;
    body: string;
    button: string;
    href: string;
  };
}

function ContactInline({ text }: { text: string }) {
  return (
    <p className="text-muted">
      {text ? `${text} ` : ''}
      <a href={SITE.emailHref} className="font-semibold text-copyblue underline underline-offset-4 transition-colors hover:text-copyblue-dark">
        {SITE.email}
      </a>{' '}
      or{' '}
      <a href={SITE.phoneHref} className="font-semibold text-copyblue underline underline-offset-4 transition-colors hover:text-copyblue-dark">
        {SITE.phoneDisplay}
      </a>
      .
    </p>
  );
}

function Block({ block }: { block: LegalBlock }): ReactNode {
  switch (block.kind) {
    case 'h3':
      return <h3 className="text-xl font-semibold text-ink">{block.text}</h3>;
    case 'p':
      return <p className="text-muted">{block.text}</p>;
    case 'ul':
      return (
        <ul className="list-disc space-y-2 pl-6 text-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'note':
      return <p className="text-sm text-muted">{block.text}</p>;
    case 'contact':
      return <ContactInline text={block.text} />;
    default:
      return null;
  }
}

export default function LegalArticle({ eyebrow, title, lead, updated, sections, cta }: LegalArticleProps) {
  return (
    <>
      <section className="bg-gray-soft">
        <Container className="py-16 text-center sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{eyebrow}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{lead}</p>
          {updated ? <p className="mt-4 text-sm text-muted">{updated}</p> : null}
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <article className="mx-auto max-w-3xl space-y-12">
            {sections.map((s) => (
              <div key={s.title} id={s.id}>
                <h2 className="text-2xl font-semibold text-ink">{s.title}</h2>
                <div className="mt-4 space-y-4">
                  {s.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </article>
        </Container>
      </section>

      {cta ? (
        <section className="bg-copyblue">
          <Container className="py-16 sm:py-20">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">{cta.title}</h2>
                <p className="mt-4 max-w-2xl text-lg text-white">{cta.body}</p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href={cta.href}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-yellow px-6 py-2.5 text-base font-semibold text-ink transition-colors hover:bg-yellow-dark"
                >
                  {cta.button}
                </a>
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}