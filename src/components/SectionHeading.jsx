import React from 'react';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

export default function SectionHeading({ kicker, title, text, dark = false, center = false, className }) {
  return (
    <Reveal className={cn('max-w-2xl', center && 'mx-auto text-center', className)}>
      {kicker && (
        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {kicker}
          {center && <span className="h-px w-8 bg-accent" aria-hidden="true" />}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl',
          dark ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={cn('mt-5 text-base leading-relaxed sm:text-lg', dark ? 'text-white/70' : 'text-muted-foreground')}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
