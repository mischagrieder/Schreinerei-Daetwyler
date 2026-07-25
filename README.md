# Deploy-Branch — Dätwyler Küchenbau & Schreinerei AG

Dieser Branch enthält **ausschliesslich die fertig gebaute, statische Website**
(Output von `npm run build`) mit `index.html` im Wurzelverzeichnis.

**Nicht von Hand bearbeiten.** Quellcode und Entwicklung liegen im Branch `main`.
Dieser Branch wird bei jeder Änderung neu aus `main` gebaut und überschrieben.

## Hosting (Hostinger)
- Diesen Branch (`deploy`) mit dem Hosting verbinden.
- Document-Root zeigt auf das Wurzelverzeichnis dieses Branches (`index.html`).
- `.htaccess` regelt SPA-Routing, HTTPS-Weiterleitung, Sicherheits-Header und Caching.
