import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sun, Award, Leaf, GraduationCap, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { history, team, stats } from '@/data/company';
import { images, min } from '@/data/images';

function initials(name) {
  return name
    .replace(/&/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

/* Editorial hero: split screen mit riesigem Jahres-Display und Statement */
function EditorialHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 lg:pt-40">
      {/* Top metadata bar - edition style */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
          <span>Kapitel 01 / Über uns</span>
          <span className="hidden sm:inline">Strengelbach · Kanton Aargau</span>
          <span className="text-accent">Édition 2026</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-16 lg:grid-cols-[1.15fr,1fr] lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="flex flex-col justify-between">
          <Reveal>
            <p className="font-display text-[0.75rem] font-bold uppercase tracking-[0.32em] text-accent">
              Ein Familienbetrieb, zweite Generation
            </p>
            <h1 className="mt-8 font-display text-[2.75rem] font-black leading-[0.92] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[5.5rem]">
              Handwerk
              <br />
              gehört
              <br />
              <span className="italic text-accent">Menschen.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Was Walter Dätwyler 1989 als Ein-Mann-Betrieb für Küchen-Innenausbau gründete, führt heute
              seine Tochter Renate Jost-Dätwyler weiter. In zweiter Generation, mit dem gleichen Anspruch.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-border pt-6">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-black text-foreground sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary">
            <img
              src={images.gebaeudeSolar}
              alt="Werkstattgebäude der Dätwyler Küchenbau & Schreinerei AG in Strengelbach"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
          {/* Riesiges Display-Jahr überlappend */}
          <div className="pointer-events-none absolute -bottom-6 -left-3 sm:-left-6 lg:-left-16">
            <span className="block font-display text-[7rem] font-black leading-none tracking-[-0.06em] text-accent mix-blend-multiply sm:text-[10rem] lg:text-[14rem]">
              1989
            </span>
          </div>
          {/* Kleines Meta-Tag */}
          <div className="absolute right-4 top-4 rounded-sm bg-white/95 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-foreground backdrop-blur-sm">
            Werkstatt / Hüssiweg
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Manifesto: Kapitel-Marker, grosses Statement, marquee, Kernwerte */
function Manifesto() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[auto,1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="font-display text-[8rem] font-black leading-none tracking-[-0.06em] text-accent/15 sm:text-[10rem]">
              02
            </span>
            <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              Unsere Philosophie
            </p>
          </div>
          <Reveal>
            <p className="font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              „Kompetent, exakt und speditiv, mit gutem Preis-Leistungs-Verhältnis und der vollen
              Kundenzufriedenheit als Ziel."
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Was 1989 als Leitsatz formuliert wurde, gilt heute noch. Wir liefern nicht, was der Katalog
              hergibt, sondern was in Ihre Räume passt. Und wir bleiben dabei, bis das letzte Detail
              stimmt.
            </p>

            {/* Werte-Grid, editorial nummeriert */}
            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
              {[
                { nr: '01', label: 'Ein Ansprechpartner', text: 'Beratung, Planung, Fertigung und Montage. Alles läuft über eine Person.' },
                { nr: '02', label: 'Auf den Millimeter', text: 'Kein Standardmass. Wir bauen für Ihre Räume, nicht für den Durchschnitt.' },
                { nr: '03', label: 'Zeit für Details', text: 'Wir übergeben erst, wenn die Fuge stimmt und das Auszugsystem seidenweich läuft.' },
              ].map((v) => (
                <div key={v.nr} className="border-t-2 border-foreground pt-4">
                  <span className="font-display text-2xl font-black text-accent">{v.nr}</span>
                  <p className="mt-2 font-display text-base font-bold uppercase tracking-wider text-foreground">
                    {v.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Geschichte: editoriale Zeitleiste mit versetzten Karten */
function Geschichte() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-display text-[8rem] font-black leading-none tracking-[-0.06em] text-accent/15 sm:text-[10rem]">
              03
            </span>
            <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              Geschichte
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              37 Jahre Schreinerhandwerk.
              <br />
              <span className="text-muted-foreground">Kapitel für Kapitel.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Von der ersten Werkstatt in der Garage bis zur eigenen Liegenschaft am Hüssiweg. Ein Auszug
            aus über drei Jahrzehnten.
          </p>
        </div>

        {/* Versetzte Timeline-Karten */}
        <ol className="relative grid gap-6 lg:grid-cols-2 lg:gap-x-12">
          {history.map((h, i) => {
            const offset = i % 2 === 1 ? 'lg:mt-24' : '';
            return (
              <Reveal
                key={h.year}
                delay={(i % 2) * 0.06}
                className={`group relative ${offset}`}
              >
                <article className="relative flex items-start gap-6 border-t-2 border-foreground pt-6 transition-colors duration-300 hover:border-accent">
                  <span className="shrink-0 font-display text-4xl font-black tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                    {h.year}
                  </span>
                  <div className="flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                      No. {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground/85">{h.event}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* Werkstatt + Nachhaltigkeit als Bento-Modul */
function WerkstattNachhaltigkeit() {
  const values = [
    { icon: Sun, label: 'Solarstrom', detail: 'Seit 2010' },
    { icon: Cpu, label: 'CNC-Fertigung', detail: 'Seit 2017' },
    { icon: Leaf, label: 'Regionale Partner', detail: 'Aus der Schweiz' },
    { icon: GraduationCap, label: 'Lehrbetrieb', detail: 'Nächste Generation' },
    { icon: Award, label: 'VSSM-Mitglied', detail: 'Berufsverband' },
  ];

  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary py-24 text-white lg:py-32">
      {/* Textur-Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-8 lg:grid-cols-[auto,1fr] lg:gap-16">
          <div>
            <span className="font-display text-[8rem] font-black leading-none tracking-[-0.06em] text-white/10 sm:text-[10rem]">
              04
            </span>
            <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/50">
              Werkstatt &amp; Nachhaltigkeit
            </p>
          </div>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Handhobel trifft CNC.
              <br />
              <span className="italic text-accent">Sonne treibt beides an.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Präzision auf den Zehntelmillimeter, mit Strom vom eigenen Dach. Und mit Materialien, die
              länger halten als der letzte Trend.
            </p>
          </Reveal>
        </div>

        {/* Bento-Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Grosses Bild-Panel */}
          <Reveal className="relative overflow-hidden rounded-sm bg-white/5 lg:col-span-2 lg:row-span-2">
            <img
              src={min(images.gebaeudeSolar)}
              alt="Werkstattgebäude mit Solaranlage in Strengelbach"
              loading="lazy"
              className="h-full min-h-[280px] w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/95 via-secondary/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-accent">
                Werkstatt Hüssiweg 33
              </p>
              <p className="mt-3 max-w-md font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                Seit 2010 produziert unsere Solaranlage nachhaltigen Strom.
              </p>
            </div>
          </Reveal>

          {/* Werte als kompakte Tiles */}
          <Reveal delay={0.05} className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
            <Sun size={22} className="text-accent" strokeWidth={1.75} aria-hidden="true" />
            <p className="mt-6 font-display text-xl font-extrabold">Solarstrom</p>
            <p className="mt-1 text-sm text-white/60">Seit 2010 vom eigenen Dach.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
            <Cpu size={22} className="text-accent" strokeWidth={1.75} aria-hidden="true" />
            <p className="mt-6 font-display text-xl font-extrabold">CNC-Fertigung</p>
            <p className="mt-1 text-sm text-white/60">Präzision auf den Zehntelmillimeter.</p>
          </Reveal>
        </div>

        {/* Feature-Liste als Zeile */}
        <Reveal delay={0.15} className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {values.map((v) => (
            <div
              key={v.label}
              className="flex items-center gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-5"
            >
              <v.icon size={20} className="shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-bold">{v.label}</p>
                <p className="truncate text-xs text-white/55">{v.detail}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* Team: grosses Gruppenfoto plus editoriale Namensliste mit Hover-Detail */
function TeamSection() {
  const [active, setActive] = useState(null);
  const activeMember = active !== null ? team[active] : null;

  return (
    <section id="team" className="relative border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[auto,1fr] lg:gap-16">
          <div>
            <span className="font-display text-[8rem] font-black leading-none tracking-[-0.06em] text-accent/15 sm:text-[10rem]">
              05
            </span>
            <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              Das Team
            </p>
          </div>
          <div>
            <Reveal>
              <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
                13 Menschen.
                <br />
                <span className="text-muted-foreground">Ein Handwerk.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Vom 30-Jahre-Jubilar bis zur Lernenden im zweiten Lehrjahr. Fahren Sie mit der Maus über
                einen Namen und lernen Sie die Person dahinter kennen.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Gruppenfoto */}
        <Reveal className="mb-12 overflow-hidden rounded-sm bg-secondary">
          <div className="relative">
            <img
              src={images.teamGruppenfoto}
              alt="Das 13-köpfige Team der Dätwyler Küchenbau & Schreinerei AG vor der Werkstatt"
              className="aspect-[21/9] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 sm:p-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/80">
                Gruppenfoto / 2026
              </p>
              <p className="mt-2 font-display text-lg font-extrabold text-white sm:text-xl">
                Unser Team vor der Werkstatt in Strengelbach
              </p>
            </div>
          </div>
        </Reveal>

        {/* Editoriale Team-Liste mit Hover-Detail */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr,1fr] lg:gap-16">
          <ul className="divide-y divide-border">
            {team.map((m, i) => (
              <li key={m.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group grid w-full grid-cols-[auto,1fr,auto] items-center gap-4 py-5 text-left transition-all duration-300 sm:gap-6 ${
                    active === i ? 'pl-4' : 'hover:pl-4'
                  }`}
                >
                  <span className="w-10 font-mono text-[0.7rem] font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-display text-lg font-extrabold tracking-[-0.01em] transition-colors sm:text-xl lg:text-2xl ${
                      active === i ? 'text-accent' : 'text-foreground group-hover:text-accent'
                    }`}
                  >
                    {m.name}
                  </span>
                  <span className="hidden text-right text-xs uppercase tracking-widest text-muted-foreground sm:block">
                    {m.since ? `seit ${m.since}` : 'in Ausbildung'}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Detail-Panel, sticky */}
          <aside className="relative lg:sticky lg:top-32 lg:h-fit lg:self-start">
            <div className="rounded-sm border border-border bg-muted/40 p-8">
              {activeMember ? (
                <>
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-white"
                      aria-hidden="true"
                    >
                      {initials(activeMember.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-xl font-extrabold tracking-[-0.01em] text-foreground">
                        {activeMember.name}
                      </p>
                      <p className="text-sm font-semibold text-accent">{activeMember.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {activeMember.detail}
                  </p>
                  {activeMember.since && (
                    <div className="mt-6 flex items-baseline gap-3 border-t border-border pt-4">
                      <span className="font-display text-3xl font-black text-foreground">
                        {activeMember.since}
                      </span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                        Im Team seit
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                    Detailansicht
                  </p>
                  <p className="mt-4 font-display text-xl font-extrabold leading-tight text-foreground">
                    Wählen Sie einen Namen aus der Liste, um mehr über die Person zu erfahren.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Rolle, Fachgebiet und Betriebszugehörigkeit.
                  </p>
                </>
              )}
            </div>
          </aside>
        </div>

        {/* CTA */}
        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <p className="font-display text-2xl font-extrabold tracking-[-0.01em] text-foreground sm:text-3xl">
            Werde Teil des Teams.
          </p>
          <Button asChild className="group rounded-sm bg-accent px-7 py-6 font-bold text-white hover:bg-accent/90">
            <Link to="/jobs">
              Offene Stellen ansehen
              <ArrowUpRight size={17} className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      <Seo
        title="Über uns · Schreinerei mit Geschichte seit 1989"
        description="Die Dätwyler Küchenbau & Schreinerei AG in Strengelbach: seit 1989 in Familienhand, rund 13 Fachleute, eigener Solarstrom und anerkannter Lehrbetrieb. Lernen Sie uns kennen."
        image={images.gebaeudeSolar}
      />

      <EditorialHero />
      <Manifesto />
      <Geschichte />
      <WerkstattNachhaltigkeit />
      <TeamSection />
    </>
  );
}
