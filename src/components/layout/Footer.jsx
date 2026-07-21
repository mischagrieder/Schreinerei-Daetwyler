import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import { company } from '@/data/company';
import { leistungen } from '@/data/leistungen';
import logo from '@/assets/daetwyler-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Zur Startseite" className="inline-flex">
            <img
              src={logo}
              alt="Dätwyler Küchenbau & Schreinerei AG"
              className="h-11 w-auto"
              width="225"
              height="100"
              loading="lazy"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Seit 1989 fertigen wir Küchen, Möbel und Innenausbauten nach Mass — mit einem kleinen, topmotivierten Team.
          </p>
          <a
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:bg-accent hover:text-white"
            aria-label="Dätwyler Schreinerei auf Instagram"
          >
            <Instagram size={17} />
          </a>
        </div>

        <nav aria-label="Leistungen">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Leistungen</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {leistungen.map((l) => (
              <li key={l.slug}>
                <Link to={`/leistungen/${l.slug}`} className="text-foreground/70 transition-colors hover:text-accent">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Unternehmen</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/projekte" className="text-foreground/70 transition-colors hover:text-accent">Projekte & Referenzen</Link></li>
            <li><Link to="/ueber-uns" className="text-foreground/70 transition-colors hover:text-accent">Über uns & Team</Link></li>
            <li><Link to="/jobs" className="text-foreground/70 transition-colors hover:text-accent">Jobs & Lehrstellen</Link></li>
            <li><Link to="/kontakt" className="text-foreground/70 transition-colors hover:text-accent">Kontakt & Offerte</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Kontakt</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={company.mapsLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-foreground/70 transition-colors hover:text-accent">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {company.name}
                  <br />
                  {company.street}, {company.zip} {company.city}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${company.phoneIntl}`} className="flex items-center gap-3 font-semibold text-foreground transition-colors hover:text-accent">
                <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-accent">
                <Mail size={16} className="shrink-0 text-accent" aria-hidden="true" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Öffnungszeiten</p>
          <ul className="mt-5 space-y-3 text-sm">
            {company.openingHours.map((o) => (
              <li key={o.days} className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-foreground/70">
                  <span className="block font-semibold text-foreground">{o.days}</span>
                  {o.hours}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-sm border border-border bg-muted p-3 text-xs leading-relaxed text-muted-foreground">
            Anerkannter Lehrbetrieb — wir bilden Schreiner:innen EFZ aus.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} · Alle Rechte vorbehalten
          </p>
          <div className="flex items-center gap-5">
            <Link to="/impressum" className="transition-colors hover:text-accent">Impressum</Link>
            <Link to="/datenschutz" className="transition-colors hover:text-accent">Datenschutz</Link>
            <span className="hidden sm:inline">Mitglied VSSM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
