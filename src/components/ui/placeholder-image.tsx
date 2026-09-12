import type { ReactNode } from 'react';

interface PlaceholderImageProps {
  label: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Gray-gradient placeholder for any image asset that hasn't been supplied yet
 * (headshot, property photos). Real assets arrive in a later phase — no stock
 * photos, no external image CDNs.
 */
export default function PlaceholderImage({ label, className = '', children }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-gradient-to-br from-gray-soft to-[#d6d6e2] ${className}`}
    >
      {children}
    </div>
  );
}
