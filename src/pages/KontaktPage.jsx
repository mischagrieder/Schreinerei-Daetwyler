import React, { useState } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { company } from '@/data/company';
import { leistungen } from '@/data/leistungen';
import { images, min } from '@/data/images';

const inputCls =
  'w-full rounded-sm border border-input bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-accent';

export default function KontaktPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'Küchen', message: '' });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Offertanfrage: ${form.topic} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\nThema: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Seo
        title="Kontakt & Offerte — Schreinerei in Strengelbach"
        description="Kontaktieren Sie die Dätwyler Küchenbau & Schreinerei AG: Hüssiweg 33, 4802 Strengelbach. Tel. 062 751 49 88 — kostenlose Offerte für Küchen, Möbel und Schreinerarbeiten."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Kontakt — Dätwyler Küchenbau & Schreinerei AG',
          url: 'https://www.daetwyler-schreinerei.ch/kontakt',
          mainEntity: { '@id': 'https://www.daetwyler-schreinerei.ch/#business' },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary pb-16 pt-40 text-white lg:pt-48">
        <div className="absolute inset-0">
          <img
            src={min(images.beratung)}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Kontakt & Offerte
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              Reden wir über <span className="text-accent">Ihr Projekt.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Offerte, Beratungstermin oder eine schnelle Frage: Rufen Sie an oder schreiben Sie uns — wir melden uns
              rasch und unkompliziert.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr,1.2fr]">
          {/* Kontaktinfo */}
          <div>
            <Reveal className="space-y-4">
              <a
                href={`tel:${company.phoneIntl}`}
                className="group flex items-center gap-5 rounded-sm border border-border bg-white p-6 transition-colors hover:border-accent"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Am schnellsten: anrufen
                  </span>
                  <span className="font-display text-xl font-extrabold text-foreground group-hover:text-accent">
                    {company.phone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-5 rounded-sm border border-border bg-white p-6 transition-colors hover:border-accent"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">E-Mail</span>
                  <span className="block truncate font-display text-lg font-extrabold text-foreground group-hover:text-accent">
                    {company.email}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-5 rounded-sm border border-border bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wood text-white">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Werkstatt & Büro</p>
                  <p className="mt-0.5 font-semibold text-foreground">
                    {company.street}, {company.zip} {company.city}
                  </p>
                  <a
                    href={company.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-accent hover:underline"
                  >
                    Route in Google Maps öffnen →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-sm border border-border bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-accent">
                  <Clock size={19} aria-hidden="true" />
                </span>
                <div className="text-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Öffnungszeiten</p>
                  <ul className="mt-1.5 space-y-1 text-foreground/85">
                    {company.openingHours.map((o) => (
                      <li key={o.days}>
                        <span className="font-semibold">{o.days}:</span> {o.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Formular */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="rounded-sm border border-border bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-foreground">Offerte anfragen</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Kostenlos und unverbindlich — wir melden uns in der Regel innerhalb eines Arbeitstags.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground">
                    Name *
                  </label>
                  <input id="name" required value={form.name} onChange={set('name')} className={inputCls} placeholder="Ihr Name" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground">
                    E-Mail *
                  </label>
                  <input id="email" type="email" required value={form.email} onChange={set('email')} className={inputCls} placeholder="ihre@email.ch" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground">
                    Telefon
                  </label>
                  <input id="phone" type="tel" value={form.phone} onChange={set('phone')} className={inputCls} placeholder="Für Rückfragen" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="topic" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground">
                    Worum geht es?
                  </label>
                  <select id="topic" value={form.topic} onChange={set('topic')} className={inputCls}>
                    {leistungen.map((l) => (
                      <option key={l.slug} value={l.title}>
                        {l.title}
                      </option>
                    ))}
                    <option value="Reparatur / Service">Reparatur / Service</option>
                    <option value="Anderes">Anderes</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-foreground">
                    Ihr Projekt *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={set('message')}
                    className={inputCls}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben — z. B. Raummasse, Wünsche, Zeitrahmen …"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-7 w-full rounded-sm bg-accent py-6 text-base font-bold text-white hover:bg-accent/90 sm:w-auto sm:px-10">
                <Send size={17} className="mr-2" aria-hidden="true" />
                Anfrage senden
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Die Anfrage öffnet Ihr E-Mail-Programm — Ihre Angaben werden nirgends sonst gespeichert.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Karte */}
      <section aria-label="Anfahrt" className="border-t border-border">
        <iframe
          title="Standort der Dätwyler Küchenbau & Schreinerei AG, Hüssiweg 33, 4802 Strengelbach"
          src={company.mapsEmbed}
          className="h-[420px] w-full border-0 grayscale-[35%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
