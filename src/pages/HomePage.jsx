import React from 'react';
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
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            Küchenbau & Schreinerei in Strengelbach — seit 1989
          </span>
          <h1 className="mt-6 font-display text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Handwerk,
            <br />
            das <span className="text-accent">bleibt.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Küchen, Möbel und Innenausbau nach Mass — geplant, gefertigt und montiert von unserem Team in Strengelbach.
            Fachlich kompetent, exakt und speditiv, mit transparenten Kosten.
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

function MarqueeBand() {
  const words = leistungen.map((l) => l.title);
  return (
    <div className="overflow-hidden border-y border-border bg-white py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-10 text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
            {words.map((w) => (
              <span key={w} className="flex items-center gap-10">
                {w}
                <span className="text-accent">✕</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function WarumDaetwyler() {
  const usps = [
    {
      icon: Award,
      title: 'Alles aus einer Hand',
      text: 'Beratung, Planung, Produktion und Montage — ein Ansprechpartner von der Idee bis zur Übergabe.',
    },
    {
      icon: Users,
      title: 'Kleines, starkes Team',
      text: 'Rund 13 Fachleute mit jahrzehntelanger Erfahrung — viele sind seit über 25 Jahren dabei.',
    },
    {
      icon: Handshake,
      title: 'Transparente Kosten',
      text: 'Faire Offerten ohne Überraschungen: Sie wissen von Anfang an, was Ihr Projekt kostet.',
    },
    {
      icon: Sun,
      title: 'Nachhaltig produziert',
      text: 'Seit 2010 fertigen wir mit Solarstrom vom eigenen Dach — Handwerk mit gutem Gewissen.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <img
            src={min(images.haendeDetail)}
            alt="Schreinerhände schleifen eine Kante aus Eichenholz"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-8 -right-4 hidden max-w-[230px] rounded-sm bg-secondary p-6 text-white shadow-2xl sm:block lg:-right-10">
            <p className="font-display text-4xl font-black text-accent">1989</p>
            <p className="mt-1 text-sm leading-snug text-white/75">
              gegründet — und bis heute in Familienhand
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            kicker="Warum Dätwyler"
            title="Ihre Schreinerei für Projekte, die passen müssen"
            text="Ob neue Küche, Einbauschrank oder Haustür: Wir führen alle Schreinerarbeiten fachlich kompetent, exakt und speditiv aus — mit einem Preis-Leistungs-Verhältnis, das überzeugt."
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

function LeistungenGrid() {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Unsere Leistungen"
            title="Was wir für Sie bauen"
            text="Neun Bereiche, ein Anspruch: Massarbeit, die exakt zu Ihrem Raum und Ihrem Leben passt."
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline" className="group rounded-sm border-foreground/25 font-bold">
              <Link to="/leistungen">
                Alle Leistungen
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/leistungen/${l.slug}`}
                className="group relative block overflow-hidden rounded-sm bg-secondary"
              >
                <img
                  src={min(images[l.heroImg])}
                  alt={l.teaser}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
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
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          kicker="Referenzen"
          title="Ausgewählte Projekte"
          text="Ein kleiner Einblick in Arbeiten, die wir für unsere Kundinnen und Kunden realisiert haben — von der Wohnküche bis zur begehbaren Ankleide."
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
                alt={`${p.title} — ${p.desc}`}
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
      text: 'Wir hören zu, schauen uns Ihre Räume an und nehmen exakt Mass — bei Ihnen vor Ort oder in unserer Werkstatt.',
    },
    {
      icon: PencilRuler,
      nr: '02',
      title: 'Planung & Offerte',
      text: 'Sie erhalten eine durchdachte Planung und eine transparente Offerte — verständlich und ohne versteckte Kosten.',
    },
    {
      icon: Factory,
      nr: '03',
      title: 'Fertigung nach Mass',
      text: 'In unserer Werkstatt in Strengelbach entsteht Ihr Projekt — von Hand und mit moderner CNC-Technik.',
    },
    {
      icon: Truck,
      nr: '04',
      title: 'Montage & Übergabe',
      text: 'Wir montieren termingerecht, sauber und präzis — und übergeben erst, wenn alles perfekt sitzt.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <SectionHeading
        center
        kicker="So arbeiten wir"
        title="In vier Schritten zu Ihrem Projekt"
        text="Klar geregelt, persönlich betreut: So kommen Sie ohne Umwege von der ersten Idee zum fertigen Ergebnis."
        className="mb-16"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.nr} delay={i * 0.1} className="group relative rounded-sm border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
            <span className="font-display text-5xl font-black text-muted-foreground/15 transition-colors group-hover:text-accent/15">
              {s.nr}
            </span>
            <s.icon size={26} className="mt-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            {i < steps.length - 1 && (
              <ArrowRight
                size={20}
                className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-accent lg:block"
                aria-hidden="true"
              />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function NachhaltigkeitBand() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-32">
      <div className="absolute inset-0">
        <img
          src={min(images.gebaeudeSolar)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/40" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <SectionHeading
            dark
            kicker="Nachhaltigkeit"
            title="Schreinern mit Strom von der eigenen Sonne"
            text="Seit 2010 produziert unsere Solaranlage auf dem Werkstattdach nachhaltigen Strom. Dazu setzen wir auf langlebige Materialien, regionale Partner und Reparatur statt Wegwerfen — Handwerk, das Verantwortung übernimmt."
          />
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-sm bg-accent px-7 font-bold text-white hover:bg-accent/90">
              <Link to="/ueber-uns">Mehr über uns erfahren</Link>
            </Button>
          </div>
        </div>
        <Reveal delay={0.15} className="grid gap-4 sm:grid-cols-2">
          {[
            { value: 'Seit 2010', label: 'eigene Solaranlage auf dem Dach' },
            { value: 'CNC', label: 'moderne Fertigung seit 2017' },
            { value: 'Regional', label: 'Partner und Lieferanten aus der Schweiz' },
            { value: 'Lehrbetrieb', label: 'wir bilden die nächste Generation aus' },
          ].map((f) => (
            <div key={f.value} className="rounded-sm border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm">
              <p className="font-display text-2xl font-extrabold text-accent">{f.value}</p>
              <p className="mt-1.5 text-sm leading-snug text-white/70">{f.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function TeamTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            kicker="Das Team"
            title="Menschen, die ihr Handwerk lieben"
            text="Hinter jedem Möbelstück stehen rund 13 Fachleute — von der Inhaberin Renate Jost-Dätwyler bis zu unseren Lernenden. Viele sind seit über 25 Jahren Teil des Teams. Das spürt man: in der Beratung, in der Werkstatt und bei Ihnen zu Hause."
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
        <Reveal className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <img
            src={min(images.lehrling)}
            alt="Lernender Schreiner misst ein Holzbrett in der Werkstatt aus"
            loading="lazy"
            className="mt-8 aspect-[3/4] w-full rounded-sm object-cover"
          />
          <img
            src={min(images.werkstattCnc)}
            alt="CNC-Maschine fräst eine Holzplatte in der Schreinerei"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-sm object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="border-t border-border bg-white py-14" aria-label="Unsere Partner und Lieferanten">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Wir arbeiten mit führenden Marken
        </p>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-14">
              {partners.map((p) => (
                <span key={p} className="font-display text-xl font-bold text-foreground/35 transition-colors hover:text-foreground/70">
                  {p}
                </span>
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
      <MarqueeBand />
      <WarumDaetwyler />
      <GoogleReviews />
      <LeistungenGrid />
      <ProjekteTeaser />
      <Prozess />
      <TeamTeaser />
      <NachhaltigkeitBand />
      <Faq />
      <PartnerBand />
    </>
  );
}
