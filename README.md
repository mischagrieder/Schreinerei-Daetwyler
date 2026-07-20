# Dätwyler Küchenbau & Schreinerei AG — Website

Moderne Website für die [Dätwyler Küchenbau & Schreinerei AG](https://www.daetwyler-schreinerei.ch)
in Strengelbach AG. Eigenständiges **React + Vite + Tailwind CSS**-Projekt,
deutschsprachig (de-CH), SEO-optimiert und conversion-fokussiert.

## Schnellstart

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server auf http://localhost:3000
npm run build    # Produktions-Build nach ./dist
npm run preview  # gebauten Build lokal ansehen
npm run lint     # ESLint
```

## Seitenstruktur

| Route | Inhalt |
|---|---|
| `/` | Start: Hero, USPs, Leistungen, Projekte-Teaser, Prozess, Nachhaltigkeit, Team, FAQ |
| `/leistungen` + `/leistungen/:slug` | Übersicht + 9 Leistungs-Detailseiten |
| `/projekte` | Referenzgalerie mit Filter und Lightbox |
| `/ueber-uns` | Geschichte, Team, Philosophie |
| `/jobs` | Lehre, Schnupperlehre, Bewerbung |
| `/kontakt` | Offert-Formular (mailto), Karte, Öffnungszeiten |
| `/impressum`, `/datenschutz` | Rechtsseiten (Schweizer DSG) |

## Inhalte pflegen

Alle Texte/Daten liegen zentral in `src/data/`:
`company.js` (Stammdaten), `leistungen.js`, `projekte.js`, `faq.js`,
`images.js` (Bild-URLs). SEO/Meta pro Seite: `src/components/Seo.jsx`.

## Deployment auf Hostinger

Das Projekt liegt in **zwei Varianten** vor:

### Variante A — Branch `main` mit Build (empfohlen, wenn Hostinger baut)
- **Build-Command:** `npm install && npm run build`
- **Publish-/Output-Verzeichnis:** `dist`

### Variante B — Branch `deploy` ohne Build (immer sicher)
Der Branch **`deploy`** enthält die **fertig gebaute Seite direkt im
Wurzelverzeichnis** (`index.html` liegt zuoberst). In Hostinger:
- **Branch:** `deploy`
- **Build-Command:** keiner
- **Publish-Verzeichnis:** `/` (Wurzel)

Beide Varianten liefern die mitgelieferte `public/.htaccess` mit aus, die
automatisch SPA-Routing (kein 404 bei Reload/Direktaufruf), HTTPS-Erzwingung,
Security-Header (HSTS, CSP, X-Frame-Options …), Kompression und Caching regelt.

> `deploy`-Branch aktualisieren nach Code-Änderungen: `npm run build`, dann den
> **Inhalt** von `dist/` in den `deploy`-Branch-Root übernehmen.

## Bilder

Die Fotos wurden mit Higgsfield generiert und werden vom Higgsfield-CDN
ausgeliefert (URLs zentral in `src/data/images.js`). Zum Selbst-Hosten:
herunterladen, nach `public/images/` legen und die URLs auf `/images/…` ändern.
Wird selbst gehostet, kann der CDN-Eintrag in der CSP (`public/.htaccess`) weg.

## Design-System

- **Farben:** Schwarz / Weiss / Dätwyler-Rot `#E62F33` / Holzbraun-Akzent
- **Schriften:** Archivo (Display) + Inter (Text), lokal via Fontsource (kein
  externer Google-Fonts-Request, DSG-freundlich)
