import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sun, Award, Leaf, GraduationCap, Cpu } from 'lucide-react';
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

/* Cleaner Hero: strukturiert, ohne Italic-Akzent und ohne cropped Jahreszahl */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-[1.1fr,1fr] lg:gap-16 lg:pb-24">
        <div className="flex flex-col justify-between">
          <div>
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-accent">
                Über uns
              </p>
              <h1 className="mt-8 font-display text-4xl font-black leading-[0.96] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[4.5rem]">
                Ein Familienbetrieb
                <br />
                in zweiter <span className="text-accent">Generation.</span>
              </h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Was Walter Dätwyler 1989 als Ein-Mann-Betrieb für Küchen-Innenausbau gründete, führt
                heute seine Tochter Renate Jost-Dätwyler weiter. Mit rund 13 Fachleuten, eigener
                Werkstatt und dem gleichen Anspruch wie am ersten Tag.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-14 grid grid-cols-3 gap-6 border-t-2 border-accent pt-8">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-black tracking-tight text-accent sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary lg:aspect-[3/4]">
            <img
              src={images.gebaeudeSolar}
              alt="Werkstattgebäude der Dätwyler Küchenbau & Schreinerei AG in Strengelbach"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/80">
                  Werkstatt Hüssiweg 33
                </p>
                <p className="mt-1 font-display text-lg font-extrabold text-white sm:text-xl">
                  4802 Strengelbach
                </p>
              </div>
              <p className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                1989
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Philosophie: klarer Aufbau, ohne Italic, ohne Kapitel-Zahlen */
function PhilosophieSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:gap-24">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-accent">
              Unsere Philosophie
            </p>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl">
              Kompetent, exakt, speditiv.
            </h2>
          </div>

          <Reveal>
            <p className="font-display text-2xl font-bold leading-snug tracking-[-0.01em] text-foreground sm:text-3xl">
              „Alle Arbeiten fachlich kompetent, exakt und speditiv, mit gutem
              Preis-Leistungs-Verhältnis und der vollen Kundenzufriedenheit als Ziel."
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Was 1989 als Leitsatz formuliert wurde, gilt heute noch. Wir liefern nicht, was der
              Katalog hergibt, sondern was in Ihre Räume passt. Und wir bleiben dabei, bis das letzte
              Detail stimmt.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {[
                { nr: '01', label: 'Ein Ansprechpartner', text: 'Beratung, Planung, Fertigung und Montage. Alles läuft über eine Person.' },
                { nr: '02', label: 'Auf den Millimeter', text: 'Kein Standardmass. Wir bauen für Ihre Räume, nicht für den Durchschnitt.' },
                { nr: '03', label: 'Zeit für Details', text: 'Wir übergeben erst, wenn die Fuge stimmt und das Auszugsystem seidenweich läuft.' },
              ].map((v) => (
                <div key={v.nr} className="border-t border-foreground/80 pt-4">
                  <span className="font-display text-xl font-black text-accent">{v.nr}</span>
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

/* Geschichte: versetzte Karten, klar strukturiert */
function GeschichteSection() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-accent">
              Geschichte
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              37 Jahre Schreinerhandwerk.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Von der ersten Werkstatt in der Garage bis zur eigenen Liegenschaft am Hüssiweg. Ein Auszug
            aus über drei Jahrzehnten.
          </p>
        </div>

        <ol className="relative grid gap-6 lg:grid-cols-2 lg:gap-x-12">
          {history.map((h, i) => {
            const offset = i % 2 === 1 ? 'lg:mt-24' : '';
            return (
              <Reveal key={h.year} delay={(i % 2) * 0.06} className={`group relative ${offset}`}>
                <article className="relative flex items-start gap-6 border-t border-foreground pt-6 transition-colors duration-300 hover:border-accent">
                  <span className="shrink-0 font-display text-4xl font-black tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                    {h.year}
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-base leading-relaxed text-foreground/85">{h.event}</p>
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
function WerkstattNachhaltigkeitSection() {
  const values = [
    { icon: Sun, label: 'Solarstrom', detail: 'Seit 2010' },
    { icon: Cpu, label: 'CNC-Fertigung', detail: 'Seit 2017' },
    { icon: Leaf, label: 'Regionale Partner', detail: 'Aus der Schweiz' },
    { icon: GraduationCap, label: 'Lehrbetrieb', detail: 'Nächste Generation' },
    { icon: Award, label: 'VSSM-Mitglied', detail: 'Berufsverband' },
  ];

  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr,1.4fr] lg:gap-24">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-accent">
              Werkstatt &amp; Nachhaltigkeit
            </p>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl">
              Handhobel trifft CNC.
            </h2>
          </div>
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Präzision auf den Zehntelmillimeter, mit Strom vom eigenen Dach. Und mit Materialien, die
              länger halten als der letzte Trend. Seit 2010 versorgt eine Solaranlage auf dem Werkstattdach
              unsere Produktion mit nachhaltigem Strom.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
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

/* Team: Gruppenfoto plus editoriale Liste mit Hover-Detail */
function TeamSection() {
  const [active, setActive] = useState(null);
  const activeMember = active !== null ? team[active] : null;

  return (
    <section id="team" className="relative border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-accent">
            Das Team
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            13 Menschen, ein <span className="text-accent">Handwerk.</span>
          </h2>
        </div>

        <Reveal className="mb-12 overflow-hidden rounded-sm bg-secondary">
          <div className="relative">
            <img
              src={images.teamGruppenfoto}
              alt="Das 13-köpfige Team der Dätwyler Küchenbau & Schreinerei AG vor der Werkstatt"
              className="aspect-[21/9] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 sm:p-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/80">
                Gruppenfoto 2026
              </p>
              <p className="mt-2 font-display text-lg font-extrabold text-white sm:text-xl">
                Unser Team vor der Werkstatt in Strengelbach
              </p>
            </div>
          </div>
        </Reveal>

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
                  <span className="w-10 font-display text-xs font-bold tabular-nums text-muted-foreground">
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

      <HeroSection />
      <PhilosophieSection />
      <GeschichteSection />
      <WerkstattNachhaltigkeitSection />
      <TeamSection />
    </>
  );
}
