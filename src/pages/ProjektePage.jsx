import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import BeforeAfter from '@/components/BeforeAfter';
import { projekte, projektKategorien } from '@/data/projekte';
import { images, min } from '@/data/images';
import { cn } from '@/lib/utils';

/* Editorial cover-hero mit Index-Zahl und Meta-Zeile */
function ProjekteHero({ total }) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 lg:pt-40">
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
          <span>Kapitel 03 / Projekte</span>
          <span className="hidden sm:inline">{total} Referenzen · Kanton Aargau</span>
          <span className="text-accent">Édition 2026</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-14 lg:grid-cols-[1.15fr,1fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <Reveal>
            <p className="font-display text-[0.75rem] font-bold uppercase tracking-[0.32em] text-accent">
              Projekte &amp; Referenzen
            </p>
            <h1 className="mt-8 font-display text-[2.75rem] font-black leading-[0.92] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[5.5rem]">
              Ergebnisse,
              <br />
              die man
              <br />
              <span className="text-accent">anfassen kann.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Küchen, Schränke, Möbel und Innenausbauten aus Strengelbach und der Region. Bewegen Sie den
              Griff über ein Projekt, um zwischen Vorher und Nachher zu wechseln.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex flex-col justify-end">
          <div className="grid grid-cols-3 gap-4 border-t-2 border-foreground pt-6">
            <div>
              <p className="font-display text-4xl font-black tracking-[-0.03em] text-foreground sm:text-5xl">
                {String(total).padStart(2, '0')}
              </p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Referenzen
              </p>
            </div>
            <div>
              <p className="font-display text-4xl font-black tracking-[-0.03em] text-foreground sm:text-5xl">
                {projektKategorien.length - 1}
              </p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Bereiche
              </p>
            </div>
            <div>
              <p className="font-display text-4xl font-black tracking-[-0.03em] text-foreground sm:text-5xl">
                37
              </p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Jahre
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Sticky Filter-Bar mit Counts */
function FilterBar({ filter, setFilter, counts }) {
  return (
    <div className="sticky top-[64px] z-30 border-y border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto py-4">
          {projektKategorien.map((k) => {
            const isActive = filter === k.key;
            return (
              <button
                key={k.key}
                onClick={() => setFilter(k.key)}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200',
                  isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-transparent text-foreground/70 hover:border-foreground hover:text-foreground'
                )}
              >
                {k.label}
                <span
                  className={cn(
                    'inline-block rounded-full px-1.5 py-0.5 text-[0.6rem] font-display font-bold tabular-nums',
                    isActive ? 'bg-background/20 text-background' : 'bg-muted text-muted-foreground'
                  )}
                >
                  {counts[k.key] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Karte im Grid: interaktiver Vorher/Nachher-Slider */
function ProjektCard({ p, index, onOpen, featured = false }) {
  const category = projektKategorien.find((k) => k.key === p.cat)?.label;
  return (
    <Reveal delay={(index % 3) * 0.05}>
      <article
        className={cn(
          'group relative overflow-hidden rounded-sm bg-background',
          featured && 'lg:col-span-2 lg:row-span-2'
        )}
      >
        {/* Bild-Container mit Slider */}
        <div
          className={cn(
            'relative overflow-hidden rounded-sm',
            featured ? 'aspect-[16/11]' : 'aspect-[4/3]'
          )}
        >
          {p.imgBefore ? (
            <BeforeAfter
              beforeSrc={min(images[p.imgBefore])}
              afterSrc={min(images[p.img])}
              beforeAlt={`Vorher: Ausgangszustand von ${p.title}`}
              afterAlt={`Nachher: ${p.title}, ${p.desc}`}
              className="h-full w-full"
              initial={featured ? 45 : 55}
            />
          ) : (
            <img
              src={min(images[p.img])}
              alt={`${p.title}: ${p.desc}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Meta-Zeile darunter, editorial */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              <span>No. {String(index + 1).padStart(2, '0')}</span>
              <span className="h-px flex-1 bg-border" />
              <span className="text-accent">{category}</span>
            </div>
            <h3
              className={cn(
                'mt-3 font-display font-extrabold tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent',
                featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
              )}
            >
              {p.title}
            </h3>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={12} className="text-accent" aria-hidden="true" /> {p.place}
            </p>
            {featured && (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => onOpen()}
            aria-label={`${p.title} in Grossansicht öffnen`}
            className="mt-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-white"
          >
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

/* Lightbox mit Drag-Slider und Metadaten-Panel */
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
  const category = projektKategorien.find((k) => k.key === item.cat)?.label;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, ${item.place}`}
    >
      {/* Top-Bar */}
      <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-8">
        <div className="min-w-0 text-white">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-accent">
            {category} · No. {String(index + 1).padStart(2, '0')} / {items.length}
          </p>
          <p className="mt-1 truncate font-display text-base font-extrabold sm:text-lg">
            {item.title}
          </p>
        </div>
        <button
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          onClick={onClose}
          aria-label="Schliessen"
        >
          <X size={20} />
        </button>
      </header>

      {/* Inhalt */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-6 sm:px-8">
        <button
          className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent sm:left-6"
          onClick={() => onNav(-1)}
          aria-label="Vorheriges Projekt"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent sm:right-6"
          onClick={() => onNav(1)}
          aria-label="Nächstes Projekt"
        >
          <ChevronRight size={22} />
        </button>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.6fr,1fr]">
          <div className="max-h-[70vh] w-full overflow-hidden rounded-sm">
            {item.imgBefore ? (
              <BeforeAfter
                beforeSrc={images[item.imgBefore]}
                afterSrc={images[item.img]}
                beforeAlt={`Vorher: Ausgangszustand von ${item.title}`}
                afterAlt={`Nachher: ${item.title}, ${item.desc}`}
                className="h-full max-h-[70vh] w-full [&_img]:max-h-[70vh]"
                initial={50}
              />
            ) : (
              <img
                src={images[item.img]}
                alt={`${item.title}: ${item.desc}`}
                className="mx-auto max-h-[70vh] w-auto rounded-sm object-contain"
              />
            )}
          </div>

          {/* Meta-Panel */}
          <aside className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.04] p-6 text-white sm:p-8">
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-accent">Objekt</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-accent" aria-hidden="true" /> {item.place}
              </p>
              <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/75">
                {item.desc}
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-widest text-white/50">Kategorie</span>
                <span className="font-bold text-white">{category}</span>
              </div>
              {item.imgBefore && (
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-widest text-white/50">Vergleich</span>
                  <span className="font-bold text-accent">Vorher / Nachher</span>
                </div>
              )}
              <Button asChild className="mt-4 w-full rounded-sm bg-accent font-bold text-white hover:bg-accent/90">
                <Link to="/kontakt">
                  Ähnliches Projekt anfragen
                  <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {/* Thumbnail-Strip */}
      <footer className="border-t border-white/10 px-4 py-4 sm:px-8">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto">
          {items.map((it, i) => (
            <button
              key={`${it.img}-${i}`}
              onClick={() => onNav(i - index)}
              aria-label={`${it.title} anzeigen`}
              className={cn(
                'relative h-14 w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-all',
                i === index ? 'border-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
              )}
            >
              <img src={min(images[it.img])} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </footer>
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

  const counts = useMemo(() => {
    const map = { alle: projekte.length };
    for (const k of projektKategorien) {
      if (k.key === 'alle') continue;
      map[k.key] = projekte.filter((p) => p.cat === k.key).length;
    }
    return map;
  }, []);

  const nav = (dir) =>
    setLightbox((i) => (i === null ? i : (i + dir + visible.length) % visible.length));

  return (
    <>
      <Seo
        title="Projekte & Referenzen · Küchen, Möbel & Innenausbau"
        description="Referenzen der Dätwyler Küchenbau & Schreinerei AG: realisierte Küchen, Schränke, Möbel, Bäder und Aussenprojekte nach Mass aus Strengelbach und der Region Aargau."
        image={images.projektKuecheInsel}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projekte & Referenzen · Dätwyler Küchenbau & Schreinerei AG',
          url: 'https://www.daetwyler-schreinerei.ch/projekte',
        }}
      />

      <ProjekteHero total={projekte.length} />
      <FilterBar filter={filter} setFilter={setFilter} counts={counts} />

      {/* Bento-Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjektCard
              key={`${p.img}-${i}`}
              p={p}
              index={i}
              featured={i === 0 && filter === 'alle'}
              onOpen={() => setLightbox(i)}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-24 text-center text-muted-foreground">
            Für diese Kategorie sind aktuell keine Referenzen hinterlegt.
          </p>
        )}
      </section>

      {/* CTA-Band */}
      <section className="border-t border-border bg-muted/40 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-accent">Nächstes Kapitel</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              Ihr Projekt als nächste Referenz.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Erzählen Sie uns von Ihrer Idee. Wir beraten Sie persönlich und erstellen eine unverbindliche
              Offerte.
            </p>
          </div>
          <Button asChild size="lg" className="group shrink-0 rounded-sm bg-accent px-8 py-7 text-base font-bold text-white hover:bg-accent/90">
            <Link to="/kontakt">
              Offerte anfragen
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox items={visible} index={lightbox} onClose={() => setLightbox(null)} onNav={nav} />
      )}
    </>
  );
}
