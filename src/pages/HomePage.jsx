import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Ruler,
  PencilRuler,
  Factory,
  Truck,
  Sun,
  Award,
  Users,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo, { localBusinessJsonLd } from '@/components/Seo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Faq from '@/components/Faq';
import GoogleReviews from '@/components/GoogleReviews';
import { company, stats, partners } from '@/data/company';
import { leistungen } from '@/data/leistungen';
import { projekte } from '@/data/projekte';
import { images, min } from '@/data/images';

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-secondary pt-28 lg:min-h-[100svh]">
      <div className="absolute inset-0">
        <img
          src={images.heroWerkstatt}
          alt="Schreiner bei der Arbeit in der Werkstatt der Dätwyler Küchenbau & Schreinerei AG in Strengelbach"
          className="h-full w-full object-cover"
         
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-16 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Küchenbau &amp; Schreinerei · seit 1989
          </span>
          <h1 className="mt-6 font-display text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Handwerk,
            <br />
            das <span className="text-accent">bleibt.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Massgefertigte Küchen, Möbel und Innenausbauten, mit höchster Präzision geplant, gefertigt
            und montiert. Qualität, auf die Sie sich verlassen können.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group rounded-sm bg-accent px-8 py-6 text-base font-bold text-white hover:bg-accent/90">
              <Link to="/kontakt">
                Jetzt Offerte anfragen
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-2 border-white/60 bg-transparent px-8 py-6 text-base font-bold text-white hover:border-white hover:bg-white hover:text-secondary"
            >
              <a href={`tel:${company.phoneIntl}`}>
                <Phone size={18} className="mr-2" aria-hidden="true" />
                {company.phone}
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="order-2 text-xs uppercase tracking-wider text-white/60">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function WerkstattSlideshow() {
  const slides = [
    { src: images.haendeDetail, alt: 'Schreinerhände schleifen eine Kante aus Eichenholz' },
    { src: images.werkstattCnc, alt: 'CNC-Maschine fräst eine Holzplatte in der Werkstatt' },
    { src: images.lehrling, alt: 'Lernender Schreiner beim Ausmessen eines Holzbretts' },
    { src: images.beratung, alt: 'Beratungsgespräch in der Werkstatt' },
    { src: images.gebaeudeSolar, alt: 'Werkstattgebäude mit Solaranlage auf dem Dach' },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <Reveal className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-secondary">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={min(s.src)}
            alt={s.alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              idx === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Bild ${idx + 1} von ${slides.length} anzeigen`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? 'w-8 bg-accent' : 'w-1.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-8 -right-4 hidden max-w-[230px] rounded-sm bg-secondary p-6 text-white shadow-2xl sm:block lg:-right-10">
        <p className="font-display text-4xl font-black text-accent">1989</p>
        <p className="mt-1 text-sm leading-snug text-white/75">
          gegründet und bis heute in Familienhand
        </p>
      </div>
    </Reveal>
  );
}

function WarumDaetwyler() {
  const usps = [
    {
      icon: Award,
      title: 'Alles aus einer Hand',
      text: 'Beratung, Planung, Produktion und Montage: ein Ansprechpartner von der Idee bis zur Übergabe.',
    },
    {
      icon: Users,
      title: 'Kleines, starkes Team',
      text: 'Rund 13 Fachleute mit jahrzehntelanger Erfahrung. Viele sind seit über 25 Jahren dabei.',
    },
    {
      icon: Handshake,
      title: 'Transparente Kosten',
      text: 'Faire Offerten ohne Überraschungen: Sie wissen von Anfang an, was Ihr Projekt kostet.',
    },
    {
      icon: Sun,
      title: 'Nachhaltig produziert',
      text: 'Seit 2010 fertigen wir mit Solarstrom vom eigenen Dach. Handwerk mit gutem Gewissen.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-14">
        <WerkstattSlideshow />

        <div>
          <SectionHeading
            kicker="Warum Dätwyler"
            title="Ihre Schreinerei für Projekte, die passen müssen"
            text="Ob neue Küche, Einbauschrank oder Haustür: Wir führen alle Schreinerarbeiten fachlich kompetent, exakt und speditiv aus. Mit einem Preis-Leistungs-Verhältnis, das überzeugt."
          />
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.08} className="border-l-2 border-accent pl-5">
                <u.icon size={24} className="text-wood" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{u.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeistungCard({ l, className = '' }) {
  return (
    <Link
      to={`/leistungen/${l.slug}`}
      className={`group relative block aspect-[4/5] h-[52vh] shrink-0 overflow-hidden rounded-sm bg-white/5 sm:h-[58vh] lg:h-[64vh] ${className}`}
    >
      <img
        src={min(images[l.heroImg])}
        alt={l.teaser}
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-white">{l.title}</h3>
          <p className="mt-1 line-clamp-2 max-w-xs text-sm text-white/70">{l.teaser}</p>
        </div>
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-accent"
          aria-hidden="true"
        >
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

const leistungHeading = (
  <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
    <SectionHeading
      dark
      kicker="Unsere Leistungen"
      title="Was wir für Sie bauen"
    />
    <Button
      asChild
      variant="outline"
      className="group rounded-sm border-2 border-white/30 bg-transparent font-bold text-white hover:border-white hover:bg-white hover:text-secondary"
    >
      <Link to="/leistungen">
        Alle Leistungen
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </Button>
  </div>
);

// Linkes/rechtes Gutter, das mit dem zentrierten max-w-7xl-Container fluchtet.
const GUTTER = 'w-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]';

/* Desktop-Variante: horizontales Scroll-Hijacking mit sanftem Nachgleiten */
function LeistungenGridDesktop() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let currentX = 0;
    let targetX = 0;

    const computeTarget = () => {
      const vh = window.innerHeight;
      const maxX = Math.max(track.scrollWidth - window.innerWidth, 0);
      const total = section.offsetHeight - vh;
      const top = section.getBoundingClientRect().top;
      const scrolled = Math.min(Math.max(-top, 0), Math.max(total, 0));
      const progress = total > 0 ? scrolled / total : 0;
      return -progress * maxX;
    };

    const render = () => {
      const diff = targetX - currentX;
      if (Math.abs(diff) < 0.4) {
        currentX = targetX;
        track.style.transform = `translate3d(${currentX}px,0,0)`;
        raf = 0;
        return;
      }
      currentX += diff * 0.085;
      track.style.transform = `translate3d(${currentX}px,0,0)`;
      raf = requestAnimationFrame(render);
    };

    const onScroll = () => {
      targetX = computeTarget();
      if (!raf) raf = requestAnimationFrame(render);
    };
    const measure = () => {
      const maxX = Math.max(track.scrollWidth - window.innerWidth, 0);
      section.style.height = `${Math.round(window.innerHeight + maxX)}px`;
      targetX = computeTarget();
      currentX = targetX;
      track.style.transform = `translate3d(${currentX}px,0,0)`;
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 1200);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      section.style.height = '';
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-secondary">
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden py-12">
        <div className="mx-auto w-full max-w-7xl px-6">{leistungHeading}</div>
        <div ref={trackRef} className="flex will-change-transform">
          <div className={`shrink-0 ${GUTTER}`} aria-hidden="true" />
          {leistungen.map((l) => (
            <LeistungCard key={l.slug} l={l} className="mr-5" />
          ))}
          <div className={`shrink-0 ${GUTTER}`} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/* Mobile-Variante: Snap-Scroll mit Pfeil-Buttons, kein Scroll-Hijacking */
function LeistungenGridMobile() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector('[data-card]');
    const step = first ? first.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-secondary py-14">
      <div className="mx-auto w-full max-w-7xl px-6">{leistungHeading}</div>

      <div className="relative mt-4">
        {/* Pfeile über dem Track, kompakt für Mobile */}
        <div className="mb-3 flex items-center justify-end gap-2 px-6">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Vorherige Leistung"
            disabled={!canPrev}
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 ${
              canPrev ? 'opacity-100 hover:border-accent hover:bg-accent' : 'pointer-events-none opacity-30'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Nächste Leistung"
            disabled={!canNext}
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 ${
              canNext ? 'opacity-100 hover:border-accent hover:bg-accent' : 'pointer-events-none opacity-30'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6"
        >
          <div className="w-6 shrink-0" aria-hidden="true" />
          {leistungen.map((l) => (
            <div key={l.slug} data-card className="snap-start">
              <LeistungCard l={l} />
            </div>
          ))}
          <div className="w-6 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/* Wechselt zwischen Desktop-Hijacking und Mobile-Slider anhand der Viewport-Breite */
function LeistungenGrid() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia?.('(min-width: 1024px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isDesktop ? <LeistungenGridDesktop /> : <LeistungenGridMobile />;
}

function ProjekteTeaser() {
  const preview = [
    projekte.find((p) => p.img === 'projektKuecheInsel'),
    projekte.find((p) => p.img === 'projektSchlafzimmer'),
    projekte.find((p) => p.img === 'projektTreppe'),
    projekte.find((p) => p.img === 'badHero'),
    projekte.find((p) => p.img === 'projektBibliothek'),
  ].filter(Boolean);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          kicker="Referenzen"
          title="Ausgewählte Projekte"
          text="Ein kleiner Einblick in Arbeiten, die wir für unsere Kundinnen und Kunden realisiert haben."
        />
        <Reveal delay={0.1}>
          <Button asChild variant="outline" className="group rounded-sm border-foreground/25 font-bold">
            <Link to="/projekte">
              Alle Projekte
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {preview.map((p, i) => (
          <Reveal
            key={p.img}
            delay={(i % 4) * 0.07}
            className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
          >
            <Link
              to="/projekte"
              className="group relative block h-full overflow-hidden rounded-sm bg-secondary"
            >
              <img
                src={min(images[p.img])}
                alt={`${p.title}: ${p.desc}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? 'h-full min-h-[240px] lg:aspect-auto' : 'aspect-[4/3]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-extrabold text-white">{p.title}</h3>
                <p className="mt-0.5 text-xs text-white/65">{p.place}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Prozess() {
  const steps = [
    {
      icon: Ruler,
      nr: '01',
      title: 'Beratung & Aufmass',
      text: 'Wir hören zu, schauen uns Ihre Räume an und nehmen exakt Mass, bei Ihnen vor Ort oder in unserer Werkstatt.',
    },
    {
      icon: PencilRuler,
      nr: '02',
      title: 'Planung & Offerte',
      text: 'Sie erhalten eine durchdachte Planung und eine transparente Offerte: verständlich und ohne versteckte Kosten.',
    },
    {
      icon: Factory,
      nr: '03',
      title: 'Fertigung nach Mass',
      text: 'In unserer Werkstatt in Strengelbach entsteht Ihr Projekt, von Hand und mit moderner CNC-Technik.',
    },
    {
      icon: Truck,
      nr: '04',
      title: 'Montage & Übergabe',
      text: 'Wir montieren termingerecht, sauber und präzis. Übergeben wird erst, wenn alles perfekt sitzt.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <SectionHeading
        center
        kicker="So arbeiten wir"
        title="In vier Schritten zu Ihrem Projekt"
        text="Klar geregelt, persönlich betreut: So kommen Sie ohne Umwege von der ersten Idee zum fertigen Ergebnis."
        className="mb-12"
      />
      <div className="relative mx-auto max-w-3xl">
        {/* geschwungene „Schnur" von oben nach unten */}
        <div
          className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />
        <div className="space-y-8 md:space-y-2">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal
                key={s.nr}
                delay={i * 0.08}
                className={`relative md:flex md:min-h-[150px] md:items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Knoten mit Schritt-Nummer auf der Schnur */}
                <span className="absolute left-8 top-1 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-accent font-display text-lg font-black text-white shadow-lg ring-8 ring-background md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  {s.nr}
                </span>
                {/* Karte, abwechselnd links/rechts */}
                <div
                  className={`ml-20 rounded-sm border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}
                >
                  <s.icon
                    size={24}
                    className={`block text-accent ${isLeft ? 'md:ml-auto' : ''}`}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 lg:order-1">
          <SectionHeading
            kicker="Das Team"
            title="Menschen, die ihr Handwerk lieben"
            text="Hinter jedem Möbelstück stehen rund 13 Fachleute, von der Inhaberin Renate Jost-Dätwyler bis zu unseren Lernenden. Viele sind seit über 25 Jahren Teil des Teams. Das spürt man: in der Beratung, in der Werkstatt und bei Ihnen zu Hause."
          />
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="group rounded-sm bg-secondary px-7 font-bold text-white hover:bg-black">
              <Link to="/ueber-uns#team">
                Team kennenlernen
                <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm border-foreground/25 px-7 font-bold">
              <Link to="/jobs">Jobs & Lehrstellen</Link>
            </Button>
          </div>
        </div>
        <Reveal className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-sm bg-secondary shadow-xl">
            <img
              src={min(images.teamGruppenfoto)}
              alt="Das 13-köpfige Team der Dätwyler Küchenbau & Schreinerei AG vor der Werkstatt in Strengelbach"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                Unser Team vor der Werkstatt in Strengelbach
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Stilisierte Wordmarks — keine offiziellen Marken-Logos, sondern
// typografische Platzhalter mit unterschiedlichem Look pro Partner.
const PARTNER_STYLES = {
  Electrolux: 'font-display text-2xl font-black tracking-tight',
  Miele: 'font-display text-2xl font-black uppercase tracking-widest',
  'V-ZUG': 'font-display text-2xl font-black uppercase tracking-[0.25em]',
  Blum: 'font-display text-2xl font-black lowercase tracking-tighter',
  Franke: 'font-display text-2xl font-bold uppercase tracking-wide',
  Wesco: 'font-display text-2xl font-black uppercase tracking-tight',
  Suter: 'font-display text-2xl font-semibold tracking-wide',
  Formex: 'font-display text-2xl font-black uppercase tracking-widest',
  'Koch Beschläge': 'font-display text-xl font-semibold tracking-tight',
  Wasem: 'font-display text-2xl font-bold tracking-wide',
  Werkstation: 'font-display text-xl font-light uppercase tracking-[0.3em]',
  'Schürmann Natursteine': 'font-display text-xl font-normal tracking-wide',
  BBAG: 'font-display text-2xl font-black tracking-[0.35em]',
};

function PartnerMark({ name }) {
  const cls = PARTNER_STYLES[name] ?? 'font-display text-2xl font-bold';
  return (
    <span
      className={`inline-flex h-16 min-w-[140px] shrink-0 items-center justify-center whitespace-nowrap rounded-sm border border-border/60 bg-white px-6 text-foreground/70 grayscale transition-all duration-300 hover:border-accent hover:text-foreground hover:grayscale-0 ${cls}`}
      aria-label={name}
    >
      {name}
    </span>
  );
}

function PartnerBand() {
  return (
    <section className="border-t border-border bg-muted/40 py-14" aria-label="Unsere Partner und Lieferanten">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Wir arbeiten mit führenden Marken
        </p>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-6">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-6">
              {partners.map((p) => (
                <PartnerMark key={`${i}-${p}`} name={p} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Seo jsonLd={localBusinessJsonLd} image={images.heroWerkstatt} />
      <Hero />
      <LeistungenGrid />
      <WarumDaetwyler />
      <GoogleReviews />
      <ProjekteTeaser />
      <Prozess />
      <TeamTeaser />
      <Faq />
      <PartnerBand />
    </>
  );
}
