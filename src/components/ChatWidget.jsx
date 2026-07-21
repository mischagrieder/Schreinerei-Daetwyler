import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, Phone, FileText } from 'lucide-react';
import { company } from '@/data/company';
import { leistungen } from '@/data/leistungen';
import { reviewsSummary } from '@/data/reviews';

// Wissensbasis: einfache Stichwort-Zuordnung (kein externer Dienst, CSP-konform).
const KB = [
  { k: ['hallo', 'hi', 'hey', 'guten tag', 'grüezi', 'gruezi', 'servus', 'moin'], a: 'Grüezi! 👋 Ich bin der digitale Assistent von Dätwyler. Fragen Sie mich zu Küchen, Möbeln, Offerten, Öffnungszeiten oder unseren Leistungen.' },
  { k: ['öffnungszeit', 'offnungszeit', 'offen', 'geöffnet', 'geoffnet', 'wann habt', 'zeiten', 'uhrzeit'], a: `Unsere Öffnungszeiten:\n${company.openingHours.map((o) => `• ${o.days}: ${o.hours}`).join('\n')}` },
  { k: ['telefon', 'nummer', 'anrufen', 'erreichen', 'kontakt', 'mail', 'e-mail', 'email'], a: `Am schnellsten erreichen Sie uns telefonisch unter ${company.phone} oder per E-Mail an ${company.email}.` },
  { k: ['adresse', 'wo seid', 'wo sind', 'standort', 'anfahrt', 'finden', 'strengelbach', 'hüssiweg', 'huessiweg', 'karte'], a: `Sie finden uns an der ${company.street}, ${company.zip} ${company.city} (Kanton Aargau). Auf der Kontaktseite ist auch eine Karte eingebunden.` },
  { k: ['offerte', 'angebot', 'preis', 'kosten', 'kostet', 'teuer', 'budget', 'richtpreis', 'was kostet'], a: `Jedes Projekt fertigen wir individuell – deshalb erstellen wir Ihnen eine kostenlose, unverbindliche Offerte. Beschreiben Sie uns kurz Ihr Vorhaben oder rufen Sie an unter ${company.phone}. Meist melden wir uns noch am selben Arbeitstag.` },
  { k: ['leistung', 'was macht', 'was bietet', 'bieten', 'macht ihr', 'was könnt', 'was koennt', 'dienstleistung', 'angebot allgemein'], a: `Wir fertigen alles nach Mass: ${leistungen.map((l) => l.title).join(', ')}. Zu welchem Bereich möchten Sie mehr wissen?` },
  { k: ['küche', 'kueche', 'kuchen', 'kochen', 'kochinsel'], a: 'Küchen sind unser Herzstück seit 1989 – Planung, Fertigung und Montage aus einer Hand. Wir nutzen jede Ecke optimal und verbauen Markengeräte (V-ZUG, Miele, Electrolux).' },
  { k: ['bad', 'badezimmer', 'waschtisch', 'spiegelschrank', 'dusche'], a: 'Fürs Bad fertigen wir Waschtische, Unterbaumöbel, Spiegelschränke und Duschtrennwände nach Mass – passgenau und feuchtraumgeeignet.' },
  { k: ['schrank', 'schränke', 'schraenke', 'ankleide', 'garderobe', 'einbauschrank', 'schiebetür', 'schiebetuer'], a: 'Wir bauen Einbau- und Schiebetürschränke, Garderoben und begehbare Ankleiden auf den Millimeter genau – auch für Dachschrägen und Nischen.' },
  { k: ['möbel', 'moebel', 'sideboard', 'regal', 'tisch', 'bank', 'fernsehmöbel'], a: 'Von Sideboards über TV-Möbel und Regale bis zu Massivholztischen und Bänken fertigen wir Einzelstücke nach Ihren Vorstellungen.' },
  { k: ['tür', 'türen', 'tuer', 'tueren', 'haustür', 'brandschutz', 'zimmertür'], a: 'Wir liefern und montieren Hauseingangs-, Zimmer-, Schiebe- und Glastüren sowie geprüfte Brandschutztüren.' },
  { k: ['terrasse', 'garten', 'gartenhaus', 'velounterstand', 'aussen', 'draussen'], a: 'Für draussen bauen wir Holzterrassen nach Mass sowie Gartenhäuser und Velounterstände – wetterfest und langlebig.' },
  { k: ['kind', 'kinder', 'kinderküche', 'kinderkueche', 'spielküche'], a: 'Ja – unsere handgefertigte Kinderküche aus Sperrholz ist robust, kindgerecht und ein beliebtes Geschenk.' },
  { k: ['ablauf', 'wie läuft', 'wie lauft', 'wie lange', 'dauer', 'lieferzeit', 'planung', 'montage', 'termin'], a: 'In vier Schritten: 1) Beratung & Aufmass, 2) Planung & transparente Offerte, 3) Fertigung in unserer Werkstatt in Strengelbach, 4) termingerechte Montage. Die Dauer hängt vom Projekt ab – sprechen wir darüber.' },
  { k: ['region', 'gebiet', 'umkreis', 'umgebung', 'aargau', 'zofingen', 'aarau', 'olten', 'einzugsgebiet'], a: 'Wir arbeiten vor allem in Strengelbach, Zofingen, Aarau, Olten und im ganzen Kanton Aargau – Projekte etwas ausserhalb prüfen wir gerne.' },
  { k: ['material', 'marke', 'holz', 'v-zug', 'vzug', 'miele', 'electrolux', 'blum', 'qualität'], a: 'Wir setzen auf langlebige Materialien und führende Marken wie V-ZUG, Miele, Electrolux, Blum und Franke. Bei der Holzwahl beraten wir Sie individuell.' },
  { k: ['job', 'stelle', 'lehre', 'lehrstelle', 'schnupperlehre', 'bewerbung', 'arbeiten bei', 'karriere', 'ausbildung'], a: 'Wir sind ein anerkannter Lehrbetrieb. Schnupperlehren sind jederzeit möglich; die Lehrstellen 2026/27 sind vergeben. Initiativbewerbungen sind willkommen – mehr auf der Seite «Jobs & Lehre».' },
  { k: ['bewertung', 'google', 'sterne', 'referenz', 'erfahrung', 'zufrieden'], a: `Unsere Kundinnen und Kunden bewerten uns mit ${reviewsSummary.rating} von 5 Sternen auf Google. Eine Auswahl finden Sie auf der Startseite.` },
  { k: ['danke', 'merci', 'vielen dank', 'besten dank'], a: 'Sehr gerne! 😊 Wenn Sie möchten, rufen Sie uns an oder fordern Sie gleich eine unverbindliche Offerte an.' },
  { k: ['seit wann', 'gegründet', 'gegrundet', 'geschichte', 'wer seid', 'familie', 'inhaber', 'renate'], a: 'Die Dätwyler Küchenbau & Schreinerei AG besteht seit 1989 und wird heute von Renate Jost-Dätwyler geführt – ein kleines, eingespieltes Team von rund 13 Fachleuten.' },
];

const FALLBACK = `Das beantworte ich Ihnen am liebsten persönlich. Rufen Sie uns an unter ${company.phone} oder fordern Sie eine unverbindliche Offerte an – wir helfen gerne weiter.`;

const QUICK = ['Eure Leistungen', 'Küchen', 'Offerte', 'Öffnungszeiten', 'Standort'];

function answerFor(input) {
  const t = input.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    const score = entry.k.reduce((s, kw) => (t.includes(kw) ? s + 1 : s), 0);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore > 0 ? best.a : FALLBACK;
}

export default function ChatWidget({ open, setOpen }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Begrüssung beim ersten Öffnen
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'bot', text: 'Grüezi! 👋 Ich bin der digitale Assistent von Dätwyler. Wie kann ich Ihnen helfen?' }]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = (raw) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    const reply = answerFor(text);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 500);
  };

  return (
    <>
      {/* Launcher (Desktop) — auf Mobile sitzt der Chat-Button in der CTA-Pille */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Chat öffnen"
          className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-2xl shadow-black/30 transition-transform hover:scale-105 lg:flex"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat mit dem Dätwyler Assistenten"
          className="fixed inset-x-3 bottom-3 z-50 flex max-h-[75vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-secondary shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:h-[560px] sm:w-[380px]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-black/40 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
              <MessageCircle size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-bold text-white">Dätwyler Assistent</p>
              <p className="text-[11px] text-white/50">Antwortet meist sofort</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Chat schliessen" className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Nachrichten */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <p
                  className={
                    m.role === 'user'
                      ? 'max-w-[80%] whitespace-pre-line rounded-2xl rounded-br-sm bg-accent px-3.5 py-2 text-sm text-white'
                      : 'max-w-[85%] whitespace-pre-line rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2 text-sm text-white/90'
                  }
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <p className="rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 text-sm text-white/60">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />
                  </span>
                </p>
              </div>
            )}

            {/* Schnellauswahl nur zu Beginn */}
            {messages.length <= 1 && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-accent hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Direkt-Aktionen */}
          <div className="grid grid-cols-2 gap-2 border-t border-white/10 px-3 py-2.5">
            <a href={`tel:${company.phoneIntl}`} className="flex items-center justify-center gap-1.5 rounded-full border border-white/15 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10">
              <Phone size={13} className="text-accent" /> Anrufen
            </a>
            <Link to="/kontakt" onClick={() => setOpen(false)} className="flex items-center justify-center gap-1.5 rounded-full bg-accent py-2 text-xs font-bold text-white transition-colors hover:bg-accent/90">
              <FileText size={13} /> Offerte
            </Link>
          </div>

          {/* Eingabe */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ihre Frage …"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-accent"
            />
            <button type="submit" aria-label="Senden" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent/90">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
