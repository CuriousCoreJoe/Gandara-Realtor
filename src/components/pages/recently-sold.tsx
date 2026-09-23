'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Container from '@/components/ui/container';

export interface SoldProperty {
  address: string;
  area: string;
  image: string;
  imageAlt: string;
}

interface RecentlySoldProps {
  eyebrow: string;
  title: string;
  lead: string;
  soldLabel: string;
  prevLabel: string;
  nextLabel: string;
  dotLabel: string;
  properties: SoldProperty[];
}

export default function RecentlySold({
  eyebrow,
  title,
  lead,
  soldLabel,
  prevLabel,
  nextLabel,
  dotLabel,
  properties,
}: RecentlySoldProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth : track.clientWidth;
    track.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>('[data-card]')[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-card]');
    const cardWidth = card ? card.offsetWidth : track.clientWidth;
    if (cardWidth <= 0) return;
    const index = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), properties.length - 1));
  };

  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copyblue">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{lead}</p>

        <ul
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {properties.map((property) => (
            <li key={property.address} data-card className="w-full flex-none snap-center">
              <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-soft bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.imageAlt}
                    className="aspect-video w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => scrollByCard('prev')}
                    aria-label={prevLabel}
                    className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-copyblue shadow-md transition-colors hover:bg-white sm:flex"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollByCard('next')}
                    aria-label={nextLabel}
                    className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-copyblue shadow-md transition-colors hover:bg-white sm:flex"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 p-6 sm:p-8">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{property.address}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-yellow px-4 py-1.5 text-sm font-semibold text-ink">
                    {soldLabel}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-center gap-2">
          {properties.map((property, index) => (
            <button
              key={property.address}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`${dotLabel} ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-copyblue' : 'bg-copyblue-light hover:bg-copyblue'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}