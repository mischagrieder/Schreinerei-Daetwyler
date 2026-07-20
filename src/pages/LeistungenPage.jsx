import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { leistungen } from '@/data/leistungen';
import { images, min } from '@/data/images';

function PageHero() {
  return (
    <section className="bg-secondary pb-20 pt-40 text-white lg:pb-24 lg:pt-48">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            Unsere Leistungen
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            Alles, was ein Schreiner kann — <span className="text-accent">nach Mass.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Von der Traumküche über Einbauschränke bis zur Holzterrasse: Wir planen, fertigen und montieren alle
            Schreinerarbeiten in eigener Werkstatt — inklusive fachlicher Spezialitäten wie Brandschutztüren.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function LeistungenPage() {
  return (
    <>
      <Seo
        title="Leistungen — Küchen, Möbel & Innenausbau nach Mass"
        description="Alle Leistungen der Dätwyler Küchenbau & Schreinerei AG: Küchen, Badmöbel, Schränke, Möbel, Tische, Türen, Terrassen und Gartenhäuser nach Mass. Tel. 062 751 49 88."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Leistungen der Dätwyler Küchenbau & Schreinerei AG',
          itemListElement: leistungen.map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: l.title,
            url: `https://www.daetwyler-schreinerei.ch/leistungen/${l.slug}`,
          })),
        }}
      />
      <PageHero />

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-24 lg:space-y-28 lg:py-32">
        {leistungen.map((l, i) => (
          <article key={l.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <Link to={`/leistungen/${l.slug}`} className="group relative block overflow-hidden rounded-sm">
                <img
                  src={min(images[l.heroImg])}
                  alt={l.teaser}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-sm bg-accent px-3 py-1 font-display text-xs font-black uppercase tracking-wider text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Link>
            </Reveal>
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <SectionHeading kicker={l.kicker} title={l.title} text={l.teaser} />
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {l.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={`/leistungen/${l.slug}`}
                className="group mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
              >
                Mehr zu {l.title}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
