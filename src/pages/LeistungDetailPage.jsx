import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { leistungen, getLeistung } from '@/data/leistungen';
import { company } from '@/data/company';
import { images, min } from '@/data/images';

export default function LeistungDetailPage() {
  const { slug } = useParams();
  const leistung = getLeistung(slug);

  if (!leistung) return <Navigate to="/leistungen" replace />;

  const weitere = leistungen.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo
        title={leistung.seoTitle}
        description={leistung.seoDescription}
        image={images[leistung.heroImg]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: leistung.seoTitle,
          description: leistung.seoDescription,
          provider: { '@id': 'https://www.daetwyler-schreinerei.ch/#business' },
          areaServed: ['Strengelbach', 'Zofingen', 'Aarau', 'Olten', 'Kanton Aargau'],
          url: `https://www.daetwyler-schreinerei.ch/leistungen/${leistung.slug}`,
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-secondary pt-32">
        <div className="absolute inset-0">
          <img
            src={images[leistung.heroImg]}
            alt={leistung.teaser}
            className="h-full w-full object-cover"
           
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
          <Reveal>
            <nav aria-label="Brotkrumen" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
              <Link to="/" className="transition-colors hover:text-white">Start</Link>
              <ChevronRight size={13} aria-hidden="true" />
              <Link to="/leistungen" className="transition-colors hover:text-white">Leistungen</Link>
              <ChevronRight size={13} aria-hidden="true" />
              <span className="text-accent">{leistung.title}</span>
            </nav>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {leistung.headline}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                {leistung.kicker}
              </span>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">{leistung.description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground">Das machen wir für Sie</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {leistung.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-sm border border-border bg-white p-4 text-sm font-medium text-foreground/85">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <img
                src={images[leistung.detailImg]}
                alt={`${leistung.title} — Detailansicht einer Arbeit der Dätwyler Schreinerei`}
                loading="lazy"
                className="mt-12 aspect-[4/3] w-full rounded-sm object-cover"
              />
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal delay={0.1} className="rounded-sm bg-secondary p-8 text-white">
              <p className="font-display text-2xl font-extrabold leading-snug">
                Interessiert an {leistung.title === 'Kinder' ? 'einer Kinderküche' : `${leistung.title} nach Mass`}?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Rufen Sie uns an oder fordern Sie eine unverbindliche Offerte an — wir beraten Sie gerne persönlich.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <Button asChild size="lg" className="w-full rounded-sm bg-accent font-bold text-white hover:bg-accent/90">
                  <Link to="/kontakt">Offerte anfragen</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-sm border-white/40 bg-transparent font-bold text-white hover:bg-white hover:text-secondary"
                >
                  <a href={`tel:${company.phoneIntl}`}>
                    <Phone size={16} className="mr-2" aria-hidden="true" />
                    {company.phone}
                  </a>
                </Button>
              </div>
              <p className="mt-6 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/55">
                {company.name} · {company.street}, {company.zip} {company.city}
              </p>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="border-t border-border bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold text-foreground">Weitere Leistungen</h2>
            <Link
              to="/leistungen"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent"
            >
              Alle ansehen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {weitere.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.08}>
                <Link to={`/leistungen/${l.slug}`} className="group relative block overflow-hidden rounded-sm bg-secondary">
                  <img
                    src={min(images[l.heroImg])}
                    alt={l.teaser}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <h3 className="absolute bottom-5 left-6 font-display text-xl font-extrabold text-white">{l.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
