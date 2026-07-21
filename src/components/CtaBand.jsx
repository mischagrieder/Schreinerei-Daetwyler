import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/data/company';
import Reveal from './Reveal';

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-secondary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)',
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Kostenlos & unverbindlich</p>
          <h2 id="cta-heading" className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Haben Sie ein Projekt im Kopf?
            <br />
            Wir machen es aus Holz.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            Erzählen Sie uns von Ihrer Idee — wir beraten Sie persönlich und erstellen Ihnen eine transparente Offerte.
            Meist melden wir uns noch am selben Arbeitstag.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Button asChild size="lg" className="group rounded-sm bg-accent px-7 font-bold text-white hover:bg-accent/90">
            <Link to="/kontakt">
              Offerte anfragen
              <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-sm border-2 border-white bg-transparent px-7 font-bold text-white hover:bg-white hover:text-secondary"
          >
            <a href={`tel:${company.phoneIntl}`}>
              <Phone size={17} className="mr-2" aria-hidden="true" />
              {company.phone}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
