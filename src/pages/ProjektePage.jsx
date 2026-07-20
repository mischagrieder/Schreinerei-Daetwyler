import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { projekte, projektKategorien } from '@/data/projekte';
import { images, min } from '@/data/images';
import { cn } from '@/lib/utils';

function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNav]);

  const item = items[index];
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, ${item.place}`}
    >
      <button
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
        aria-label="Schliessen"
      >
        <X size={22} />
      </button>
      <button
        className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent sm:left-8"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent sm:right-8"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        aria-label="Nächstes Bild"
      >
        <ChevronRight size={24} />
      </button>
      <figure className="max-h-[86vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[item.img]}
          alt={`${item.title} — ${item.desc}`}
          className="max-h-[76vh] w-auto rounded-sm object-contain"
        />
        <figcaption className="mt-4 text-center">
          <p className="font-display text-lg font-bold text-white">{item.title}</p>
          <p className="mt-1 text-sm text-white/60">{item.place} · {item.desc}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default function ProjektePage() {
  const [filter, setFilter] = useState('alle');
  const [lightbox, setLightbox] = useState(null);

  const visible = useMemo(
    () => (filter === 'alle' ? projekte : projekte.filter((p) => p.cat === filter)),
    [filter]
  );

  const nav = (dir) =>
    setLightbox((i) => (i === null ? i : (i + dir + visible.length) % visible.length));

  return (
    <>
      <Seo
        title="Projekte & Referenzen — Küchen, Möbel & Innenausbau"
        description="Referenzen der Dätwyler Küchenbau & Schreinerei AG: realisierte Küchen, Schränke, Möbel, Bäder und Aussenprojekte nach Mass aus Strengelbach und der Region Aargau."
        image={images.projektKuecheInsel}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projekte & Referenzen — Dätwyler Küchenbau & Schreinerei AG',
          url: 'https://www.daetwyler-schreinerei.ch/projekte',
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-secondary pt-32">
        <div className="absolute inset-0">
          <img src={images.projektKuecheInsel} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Projekte & Referenzen
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ergebnisse, die man <span className="text-accent">anfassen</span> kann.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Ein Einblick in unsere Arbeit: Küchen, Schränke, Möbel und Innenausbauten, die wir für unsere Kundinnen
              und Kunden in Strengelbach und der Region realisiert haben.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Galerie */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Filter */}
        <div className="mb-12 flex flex-wrap gap-2.5">
          {projektKategorien.map((k) => (
            <button
              key={k.key}
              onClick={() => setFilter(k.key)}
              className={cn(
                'rounded-sm border px-4 py-2 text-sm font-bold transition-colors',
                filter === k.key
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-white text-foreground/70 hover:border-accent hover:text-accent'
              )}
            >
              {k.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={`${p.img}-${i}`} delay={(i % 3) * 0.06}>
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-sm bg-secondary text-left"
              >
                <img
                  src={min(images[p.img])}
                  alt={`${p.title} — ${p.desc}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">
                    {projektKategorien.find((k) => k.key === p.cat)?.label}
                  </span>
                  <h2 className="mt-1 font-display text-lg font-extrabold text-white">{p.title}</h2>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/65">
                    <MapPin size={12} className="text-accent" aria-hidden="true" /> {p.place}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Hinweis + CTA */}
        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-sm border border-border bg-muted p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground">Ihr Projekt als nächste Referenz?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Erzählen Sie uns von Ihrer Idee — wir beraten Sie persönlich und erstellen eine unverbindliche Offerte.
            </p>
          </div>
          <Button asChild size="lg" className="group shrink-0 rounded-sm bg-accent px-7 font-bold text-white hover:bg-accent/90">
            <Link to="/kontakt">
              Offerte anfragen
              <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {lightbox !== null && (
        <Lightbox items={visible} index={lightbox} onClose={() => setLightbox(null)} onNav={nav} />
      )}
    </>
  );
}
