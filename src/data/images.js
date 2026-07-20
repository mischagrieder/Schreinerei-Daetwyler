// Zentrale Bild-Registry.
// Die Fotos wurden mit Higgsfield (nano_banana_2, 2K) generiert und werden vom
// Higgsfield-CDN ausgeliefert. Zum Selbst-Hosten: Dateien herunterladen, unter
// apps/web/public/images/ ablegen und die URLs hier auf '/images/<name>.png' ändern.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp';

// Kleine WebP-Variante eines Bildes (für Karten, Thumbnails und
// Hintergrund-Overlays). Heroes und Lightbox nutzen die Vollauflösung.
export const min = (url) => url.replace(/\.png$/, '_min.webp');

export const images = {
  heroWerkstatt: `${CDN}/hf_20260715_163834_b27e9c7d-6193-472e-aa73-d126dc6480db.png`,
  kuecheHero: `${CDN}/hf_20260715_164131_733bda81-f2b0-42d1-89c5-95d0c6c414c2.png`,
  kuecheDetail: `${CDN}/hf_20260715_164134_35551217-be36-4add-82c7-50e65a704bd4.png`,
  badHero: `${CDN}/hf_20260715_164140_6650aa5e-d2da-4f6a-9239-eea97b282d04.png`,
  badDetail: `${CDN}/hf_20260715_164147_8016759e-6691-4416-9123-bd7163e45c44.png`,
  schraenkeHero: `${CDN}/hf_20260715_164156_09483fea-f111-490e-8a9d-527b2865932c.png`,
  schraenkeDetail: `${CDN}/hf_20260715_164159_34c3e4cf-1de4-4a54-9d2d-a675551f20cd.png`,
  moebelHero: `${CDN}/hf_20260715_164214_70ab6aa5-4948-4c40-ba5b-640995aeb893.png`,
  moebelDetail: `${CDN}/hf_20260716_043145_5c12a984-ca80-479f-83e8-328405207c73.png`,
  tischHero: `${CDN}/hf_20260716_043149_6ad0ca70-c174-4ce5-9c4f-8a94035688e3.png`,
  tischDetail: `${CDN}/hf_20260716_043151_09cf7cce-31a4-48ea-a58d-9d34e4147f4e.png`,
  tuerenHero: `${CDN}/hf_20260716_043153_e758c71d-d4d3-4046-911d-a53dbd18b3c9.png`,
  tuerenDetail: `${CDN}/hf_20260716_043202_66b00ce6-9b55-4265-a031-362feae7f263.png`,
  terrasseHero: `${CDN}/hf_20260716_043204_b06f7bd9-6ab4-49ad-9510-60a43bbb04e1.png`,
  terrasseDetail: `${CDN}/hf_20260716_043206_dc0339a0-b465-476b-acb9-5dd4cd8f00a1.png`,
  gartenhausHero: `${CDN}/hf_20260716_043209_638cfc0a-89e4-4545-8524-09e8d0c000b6.png`,
  gartenhausDetail: `${CDN}/hf_20260716_043218_d1832e46-7bb0-4cb4-a7f9-dac32266bcb3.png`,
  kinderHero: `${CDN}/hf_20260716_043221_8d1489ac-e36a-4880-b1fd-49a2e0acf003.png`,
  kinderDetail: `${CDN}/hf_20260716_043223_23a4cea5-53cb-4453-9af3-da0fc57f2236.png`,
  werkstattCnc: `${CDN}/hf_20260716_043225_9c9e9a81-83f5-4ca7-a054-e8562b0d7eb8.png`,
  gebaeudeSolar: `${CDN}/hf_20260716_043238_329af8c0-740e-451d-8d8d-03bf742ea081.png`,
  haendeDetail: `${CDN}/hf_20260716_043240_d02ad03b-4589-43e1-995d-73f20d19c82b.png`,
  lehrling: `${CDN}/hf_20260716_043243_5a598ddd-2646-4126-8c28-e0ffd1c8839b.png`,
  beratung: `${CDN}/hf_20260716_043246_6cd8982a-4557-436d-a288-70ada03f24ce.png`,
  // Referenz-/Projektbilder
  projektKuecheInsel: `${CDN}/hf_20260716_193038_307a04cf-92e4-4af4-93b0-739cdb52b007.png`,
  projektBibliothek: `${CDN}/hf_20260716_193040_7f31742a-61b6-4399-9a4f-ac2a066d4c33.png`,
  projektSchlafzimmer: `${CDN}/hf_20260716_193047_6b6dd262-d0a6-4734-84ea-2c14016c2675.png`,
  projektTreppe: `${CDN}/hf_20260716_193050_33a5a31f-3dc5-4cb8-9f06-b249a822ced6.png`,
  projektLaden: `${CDN}/hf_20260716_193058_873866ab-c5e4-413b-adf5-e5ecc3cd62ec.png`,
  projektEmpfang: `${CDN}/hf_20260716_193101_7b38764a-915a-4391-a730-a3886b83a79d.png`,
};
