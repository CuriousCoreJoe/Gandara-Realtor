import type { ReactNode } from 'react';

type Variant = 'primary' | 'accent' | 'outline' | 'white' | 'whiteOutline' | 'ghost';

const variants: Record<Variant, string> = {
  primary: 'bg-copyblue text-white hover:bg-copyblue-dark',
  accent: 'bg-yellow text-ink hover:bg-yellow-dark',
  outline: 'border border-copyblue text-copyblue hover:bg-copyblue-light',
  white: 'bg-white text-copyblue hover:bg-gray-soft',
  whiteOutline: 'border border-white text-white hover:bg-white/10',
  ghost: 'text-copyblue hover:bg-copyblue-light',
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  'aria-label'?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  ...rest
}: ButtonLinkProps) {
  const base =
    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-base font-semibold transition-colors';

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
