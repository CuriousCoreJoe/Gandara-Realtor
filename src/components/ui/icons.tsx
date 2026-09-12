import type { SVGProps } from 'react';

/**
 * Inline SVG marks ported verbatim from the source HTML.
 * Colors follow `currentColor` so call sites control tint.
 */

/** Brand house mark (matches the source site's favicon/brand icon). */
export function HouseMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

/** Equal Housing Opportunity mark (house + two bars). */
export function EqualHousingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}