import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { company } from '@/data/company';

function LegalLayout({ kicker, title, children }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pb-14 pt-40 text-white lg:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {kicker}
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] sm:text-5xl">{title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <div className="space-y-10 text-[0.95rem] leading-relaxed text-foreground/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-foreground [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </section>
    </>
  );
}

export function ImpressumPage() {
  return (
    <>
      <Seo
        title="Impressum"
        description={`Impressum der ${company.name}, ${company.street}, ${company.zip} ${company.city}.`}
      />
      <LegalLayout kicker="Rechtliches" title="Impressum">
        <div>
          <h2>Verantwortliches Unternehmen</h2>
          <p>
            {company.name}
            <br />
            {company.street}
            <br />
            {company.zip} {company.city}
            <br />
            Schweiz
          </p>
          <p>
            Telefon: <a href={`tel:${company.phoneIntl}`} className="font-semibold text-accent hover:underline">{company.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${company.email}`} className="font-semibold text-accent hover:underline">{company.email}</a>
          </p>
        </div>
        <div>
          <h2>Vertretungsberechtigte Person</h2>
          <p>Renate Jost-Dätwyler, Inhaberin und Geschäftsleitung</p>
        </div>
        <div>
          <h2>Rechtsform & Eintrag</h2>
          <p>
            Aktiengesellschaft (AG) nach schweizerischem Recht, eingetragen im Handelsregister des Kantons Aargau.
            Gegründet 1989, Aktiengesellschaft seit 2000.
          </p>
        </div>
        <div>
          <h2>Berufsverband</h2>
          <p>Mitglied VSSM — Verband Schweizerischer Schreinermeister und Möbelfabrikanten.</p>
        </div>
        <div>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Haftungsansprüche gegen die{' '}
            {company.name} wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw.
            Nichtnutzung der veröffentlichten Informationen entstehen, sind ausgeschlossen, soweit gesetzlich zulässig.
          </p>
          <p>
            Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs. Der Zugriff und
            die Nutzung solcher Websites erfolgen auf eigene Gefahr der Nutzerinnen und Nutzer.
          </p>
        </div>
        <div>
          <h2>Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website
            gehören ausschliesslich der {company.name} oder den speziell genannten Rechtsinhabern. Für die Reproduktion
            jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
          </p>
        </div>
        <p className="border-t border-border pt-6 text-sm text-muted-foreground">
          Siehe auch: <Link to="/datenschutz" className="font-semibold text-accent hover:underline">Datenschutzerklärung</Link>
        </p>
      </LegalLayout>
    </>
  );
}

export function DatenschutzPage() {
  return (
    <>
      <Seo
        title="Datenschutzerklärung"
        description={`Datenschutzerklärung der ${company.name}: Informationen zur Bearbeitung von Personendaten gemäss Schweizer Datenschutzgesetz (DSG).`}
      />
      <LegalLayout kicker="Rechtliches" title="Datenschutzerklärung">
        <div>
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Bearbeitung von Personendaten im Zusammenhang mit dieser Website ist:
          </p>
          <p>
            {company.name}
            <br />
            {company.street}, {company.zip} {company.city}, Schweiz
            <br />
            Telefon: {company.phone} · E-Mail:{' '}
            <a href={`mailto:${company.email}`} className="font-semibold text-accent hover:underline">{company.email}</a>
          </p>
          <p>
            Wir bearbeiten Personendaten im Einklang mit dem schweizerischen Datenschutzgesetz (DSG).
          </p>
        </div>
        <div>
          <h2>2. Welche Daten wir bearbeiten</h2>
          <ul>
            <li>
              <strong>Kontakt- und Offertanfragen:</strong> Wenn Sie uns per Formular, E-Mail oder Telefon
              kontaktieren, bearbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail, Telefonnummer, Inhalt der
              Anfrage) ausschliesslich zur Beantwortung Ihrer Anfrage und zur Erstellung einer Offerte. Das
              Kontaktformular auf dieser Website öffnet Ihr eigenes E-Mail-Programm; es werden keine Formulardaten auf
              unserem Webserver gespeichert.
            </li>
            <li>
              <strong>Server-Logdaten:</strong> Beim Besuch der Website können durch den Hosting-Anbieter technisch
              bedingt Zugriffsdaten (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp)
              protokolliert werden. Diese Daten dienen der Sicherheit und Stabilität des Betriebs.
            </li>
            <li>
              <strong>Bewerbungen:</strong> Bewerbungsunterlagen behandeln wir vertraulich und verwenden sie nur für
              das Bewerbungsverfahren.
            </li>
          </ul>
        </div>
        <div>
          <h2>3. Cookies & Tracking</h2>
          <p>
            Diese Website verwendet keine eigenen Tracking- oder Analyse-Cookies und kein Werbe-Tracking.
          </p>
        </div>
        <div>
          <h2>4. Eingebundene Dienste Dritter</h2>
          <ul>
            <li>
              <strong>Google Maps:</strong> Auf der Kontaktseite ist eine Karte von Google Maps (Google LLC)
              eingebunden. Beim Laden der Karte kann Google Ihre IP-Adresse und weitere technische Daten bearbeiten.
              Es gelten die Datenschutzbestimmungen von Google.
            </li>
            <li>
              <strong>Bild-Hosting (CDN):</strong> Bilder dieser Website werden über ein Content Delivery Network
              ausgeliefert. Dabei wird technisch bedingt Ihre IP-Adresse an den CDN-Betreiber übermittelt.
            </li>
            <li>
              <strong>Instagram:</strong> Unsere Website verlinkt auf unser Instagram-Profil. Beim Aufruf des Links
              gelten die Datenschutzbestimmungen von Meta.
            </li>
          </ul>
        </div>
        <div>
          <h2>5. Weitergabe von Daten</h2>
          <p>
            Wir geben Personendaten nur weiter, wenn dies zur Abwicklung Ihres Auftrags nötig ist (z.&nbsp;B. an
            Lieferanten oder beigezogene Handwerksbetriebe), wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt
            haben. Ein Verkauf Ihrer Daten findet nicht statt.
          </p>
        </div>
        <div>
          <h2>6. Aufbewahrung</h2>
          <p>
            Wir bewahren Personendaten nur so lange auf, wie es für den jeweiligen Zweck erforderlich ist oder wie es
            gesetzliche Aufbewahrungspflichten (z.&nbsp;B. handels- und steuerrechtliche Fristen) verlangen.
          </p>
        </div>
        <div>
          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft über die von uns bearbeiteten Personendaten sowie auf deren Berichtigung
            oder Löschung, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Wenden Sie sich dazu an{' '}
            <a href={`mailto:${company.email}`} className="font-semibold text-accent hover:underline">{company.email}</a>{' '}
            oder rufen Sie uns an: {company.phone}.
          </p>
        </div>
        <div>
          <h2>8. Änderungen</h2>
          <p>
            Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die jeweils auf dieser Website
            publizierte Fassung. Stand: Juli 2026.
          </p>
        </div>
        <p className="border-t border-border pt-6 text-sm text-muted-foreground">
          Siehe auch: <Link to="/impressum" className="font-semibold text-accent hover:underline">Impressum</Link>
        </p>
      </LegalLayout>
    </>
  );
}
