interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-copyblue">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-muted">{subtitle}</p> : null}
    </div>
  );
}
