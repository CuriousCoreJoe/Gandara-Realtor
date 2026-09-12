'use client';

import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  ctaHref: string;
  ctaLabel: string;
  phoneHref: string;
  phoneLabel: string;
  openLabel: string;
  closeLabel: string;
}

export default function MobileMenu({
  links,
  ctaHref,
  ctaLabel,
  phoneHref,
  phoneLabel,
  openLabel,
  closeLabel,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-copyblue transition-colors hover:bg-copyblue-light"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-ink/50"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-ink">Angelina Gándara</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={closeLabel}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-ink transition-colors hover:bg-gray-soft"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col" aria-label={openLabel}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-gray-soft py-2 text-lg font-medium text-ink transition-colors hover:text-copyblue"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-6">
              <a
                href={phoneHref}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-copyblue font-semibold text-copyblue transition-colors hover:bg-copyblue-light"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {phoneLabel}
              </a>
              <a
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded-full bg-copyblue px-6 font-semibold text-white transition-colors hover:bg-copyblue-dark"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
