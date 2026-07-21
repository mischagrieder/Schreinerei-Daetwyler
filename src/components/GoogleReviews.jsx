import React from 'react';
import { Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { reviews, reviewsSummary } from '@/data/reviews';

// Google „G" als Inline-SVG (self-contained, kein externes Asset)
function GoogleG({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function Stars({ rating = 5, className = 'h-4 w-4' }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={className}
          strokeWidth={0}
          fill={i < Math.round(rating) ? '#FBBC05' : 'rgba(255,255,255,0.2)'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function initials(name) {
  const clean = name.replace(/[—-].*/, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  return (parts[0]?.[0] || 'G').toUpperCase();
}

function ReviewCard({ r }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col rounded-sm border border-white/10 bg-white/[0.06] p-6 sm:w-[340px]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-extrabold text-white">
          {initials(r.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{r.name}</p>
          <p className="text-xs text-white/50">{r.date}</p>
        </div>
        <GoogleG className="ml-auto h-5 w-5 shrink-0" />
      </div>
      <div className="mt-3">
        <Stars rating={r.rating} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-5">{r.text}</p>
    </article>
  );
}

export default function GoogleReviews() {
  const track = [...reviews, ...reviews]; // verdoppelt für nahtlose Schleife

  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <GoogleG className="h-7 w-7" />
            <span className="font-display text-lg font-bold text-white">Google Bewertungen</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-black text-white">{reviewsSummary.rating.toFixed(1)}</span>
            <div>
              <Stars rating={reviewsSummary.rating} className="h-5 w-5" />
              <p className="mt-1 text-left text-xs text-white/55">
                Sterne auf Google
              </p>
            </div>
          </div>
          <h2 id="reviews-heading" className="sr-only">
            Kundenbewertungen auf Google
          </h2>
        </Reveal>
      </div>

      {/* Laufband */}
      <div className="group relative mt-12">
        <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {track.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
        {/* Randverläufe */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent" aria-hidden="true" />
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6 text-center">
        <a
          href={reviewsSummary.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-accent"
        >
          <GoogleG className="h-4 w-4" />
          Alle Bewertungen auf Google ansehen
        </a>
      </div>
    </section>
  );
}
