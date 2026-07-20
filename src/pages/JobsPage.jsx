import React from 'react';
import { GraduationCap, Hammer, HeartHandshake, Mail, Phone, Send, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { company } from '@/data/company';
import { images } from '@/data/images';

export default function JobsPage() {
  return (
    <>
      <Seo
        title="Jobs & Lehrstellen — Schreiner:in werden bei Dätwyler"
        description="Karriere bei der Dätwyler Küchenbau & Schreinerei AG in Strengelbach: Schreinerlehre EFZ, Schnupperlehre und Initiativbewerbung. Anerkannter Lehrbetrieb. Tel. 062 751 49 88."
        image={images.lehrling}
      />

      {/* Hero */}
      <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-secondary pt-32">
        <div className="absolute inset-0">
          <img
            src={images.lehrling}
            alt="Lernender Schreiner bei der Arbeit in der Werkstatt"
            className="h-full w-full object-cover"
           
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Jobs & Lehre
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Arbeite dort, wo <span className="text-accent">Handwerk</span> noch zählt.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Warum bei uns */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <SectionHeading
          kicker="Warum Dätwyler"
          title="Ein kleines Team mit grossem Zusammenhalt"
          text="Bei uns bist du keine Nummer: In unserem rund 13-köpfigen Team kennt jeder jeden, die Wege sind kurz und die Projekte vielfältig — von der Traumküche bis zur Brandschutztür. Viele Mitarbeitende sind seit über 25 Jahren dabei. Das sagt mehr als jedes Inserat."
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Hammer, title: 'Vielfältige Projekte', text: 'Küchen, Möbel, Türen, Terrassen — bei uns arbeitest du nie zweimal am gleichen Projekt.' },
            { icon: HeartHandshake, title: 'Familiäres Klima', text: 'Flache Hierarchien, echte Wertschätzung und ein Team, das zusammenhält.' },
            { icon: GraduationCap, title: 'Lehrbetrieb mit Herz', text: 'Vier erfahrene Lehrlingsbetreuer:innen begleiten unsere Lernenden durch die Ausbildung.' },
            { icon: Sun, title: 'Moderner Betrieb', text: 'CNC-Fertigung, eigene Solaranlage und eine top eingerichtete Werkstatt.' },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="rounded-sm border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
              <b.icon size={26} className="text-accent" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offene Stellen / Lehre */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading kicker="Aktuell" title="Lehre, Schnupperlehre & Initiativbewerbung" className="mb-14" />
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal className="flex flex-col rounded-sm border border-border bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Schreinerlehre EFZ</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">Lehrstellen 2026/27</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Unsere Lehrstellen für 2026/2027 sind bereits vergeben. Interessierst du dich für den Lehrbeginn 2028?
                Melde dich frühzeitig — wir freuen uns auf dich.
              </p>
              <p className="mt-5 rounded-sm bg-muted px-4 py-3 text-xs font-semibold text-foreground/70">
                Aktuell besetzt · Vormerkung für 2028 möglich
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col rounded-sm border-2 border-accent bg-white p-8 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">2–3 Tage reinschauen</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">Schnupperlehre</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Finde heraus, ob Schreiner:in dein Traumberuf ist: Bei einer Schnupperlehre von 2–3 Tagen arbeitest du
                in unserer Werkstatt mit und erlebst den Berufsalltag hautnah.
              </p>
              <Button asChild className="mt-5 rounded-sm bg-accent font-bold text-white hover:bg-accent/90">
                <a href={`mailto:${company.email}?subject=Anfrage%20Schnupperlehre`}>
                  <Send size={15} className="mr-2" aria-hidden="true" />
                  Schnupperlehre anfragen
                </a>
              </Button>
            </Reveal>
            <Reveal delay={0.16} className="flex flex-col rounded-sm border border-border bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Fachleute gesucht?</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">Initiativbewerbung</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Zurzeit haben wir keine offenen Stellen — gute Leute sind uns aber immer willkommen. Sende deine
                Initiativbewerbung an Renate Jost-Dätwyler.
              </p>
              <Button asChild variant="outline" className="mt-5 rounded-sm border-foreground/25 font-bold">
                <a href={`mailto:${company.email}?subject=Initiativbewerbung`}>
                  <Mail size={15} className="mr-2" aria-hidden="true" />
                  Bewerbung senden
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-10 flex flex-col items-start justify-between gap-6 rounded-sm bg-secondary p-8 text-white sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-extrabold">Fragen zu Lehre oder Bewerbung?</p>
              <p className="mt-1 text-sm text-white/70">
                Renate Jost-Dätwyler gibt dir gerne persönlich Auskunft.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 rounded-sm bg-accent px-7 font-bold text-white hover:bg-accent/90">
              <a href={`tel:${company.phoneIntl}`}>
                <Phone size={17} className="mr-2" aria-hidden="true" />
                {company.phone}
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
