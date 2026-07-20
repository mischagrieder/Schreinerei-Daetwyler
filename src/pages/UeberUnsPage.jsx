import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Award, Leaf, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { company, history, team, stats } from '@/data/company';
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

export default function UeberUnsPage() {
  return (
    <>
      <Seo
        title="Über uns — Schreinerei mit Geschichte seit 1989"
        description="Die Dätwyler Küchenbau & Schreinerei AG in Strengelbach: seit 1989 in Familienhand, rund 13 Fachleute, eigener Solarstrom und anerkannter Lehrbetrieb. Lernen Sie uns kennen."
        image={images.gebaeudeSolar}
      />

      {/* Hero */}
      <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-secondary pt-32">
        <div className="absolute inset-0">
          <img
            src={images.gebaeudeSolar}
            alt="Werkstattgebäude der Dätwyler Küchenbau & Schreinerei AG mit Solaranlage auf dem Dach"
            className="h-full w-full object-cover"
           
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Über uns
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Seit 1989 in Strengelbach — <span className="text-accent">in Familienhand.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Philosophie */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            kicker="Unsere Philosophie"
            title="Kompetent. Exakt. Speditiv."
            text="Was Walter Dätwyler 1989 als Ein-Mann-Betrieb für Küchen-Innenausbau gründete, führt heute seine Tochter Renate Jost-Dätwyler in zweiter Generation. Geblieben ist der Anspruch: alle Arbeiten fachlich kompetent, exakt und speditiv auszuführen — mit gutem Preis-Leistungs-Verhältnis, transparenten Kosten und dem Ziel der vollen Kundenzufriedenheit."
          />
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-sm border border-border bg-white p-6">
                <p className="font-display text-3xl font-black text-accent">{s.value}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Geschichte */}
      <section className="bg-muted py-24 lg:py-32" aria-labelledby="geschichte">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading kicker="Unsere Geschichte" title="Über 35 Jahre Schreinerhandwerk" className="mb-14" />
          <div className="relative border-l-2 border-accent/30 pl-8 sm:pl-12">
            {history.map((h, i) => (
              <Reveal key={h.year} delay={i * 0.05} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-muted bg-accent sm:-left-[57px]"
                  aria-hidden="true"
                />
                <p className="font-display text-xl font-black text-accent">{h.year}</p>
                <p className="mt-1 max-w-2xl text-foreground/80">{h.event}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werkstatt / Nachhaltigkeit */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img
              src={min(images.werkstattCnc)}
              alt="Moderne CNC-Fertigung in der Werkstatt in Strengelbach"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-sm object-cover"
            />
            <img
              src={min(images.haendeDetail)}
              alt="Handarbeit: Schleifen einer Holzkante"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full rounded-sm object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="Werkstatt & Werte"
              title="Traditionelles Handwerk, moderne Fertigung"
              text="In unserer Werkstatt am Hüssiweg treffen Handhobel auf CNC-Technik: Seit 2017 ergänzt ein moderner Maschinenpark unsere Handarbeit — für Präzision auf den Zehntelmillimeter bei gleichbleibender handwerklicher Qualität."
            />
            <ul className="mt-9 space-y-5">
              {[
                { icon: Sun, text: 'Eigene Solaranlage seit 2010 — wir schreinern mit Sonnenstrom' },
                { icon: Award, text: 'Mitglied im Verband Schweizerischer Schreinermeister (VSSM)' },
                { icon: GraduationCap, text: 'Anerkannter Lehrbetrieb mit eigener Lehrlingsbetreuung' },
                { icon: Leaf, text: 'Langlebige Materialien und Reparatur statt Wegwerfen' },
              ].map((p) => (
                <li key={p.text} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
                    <p.icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="pt-2 text-sm font-medium text-foreground/85">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-secondary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              dark
              kicker="Das Team"
              title="13 Fachleute, ein Anspruch"
              text="Vom 30-Jahre-Jubilar bis zur Lernenden im zweiten Lehrjahr: Unser Team verbindet Erfahrung mit frischen Ideen."
            />
            <Reveal delay={0.1}>
              <Button asChild className="rounded-sm bg-accent font-bold text-white hover:bg-accent/90">
                <Link to="/jobs">
                  Werde Teil des Teams
                  <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={(i % 3) * 0.06}
                className="group flex items-center gap-5 rounded-sm border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-accent/60"
              >
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-white"
                  aria-hidden="true"
                >
                  {initials(m.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-base font-bold">{m.name}</h3>
                  <p className="text-sm text-accent">{m.role}</p>
                  <p className="mt-0.5 truncate text-xs text-white/55">
                    {m.detail}
                    {m.since ? ` · im Team seit ${m.since}` : ''}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
