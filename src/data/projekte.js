import { images } from './images';

// Repräsentative Referenzbilder. `img` = Nachher, `imgBefore` = Vorher-Bild
// (Platzhalter mit Werkstatt-/Rohzustand-Aufnahmen — für echte Projekte durch
// tatsächliche Vorher-Fotos ersetzen).
export const projektKategorien = [
  { key: 'alle', label: 'Alle Projekte' },
  { key: 'kueche', label: 'Küchen' },
  { key: 'wohnen', label: 'Wohnen & Möbel' },
  { key: 'schrank', label: 'Schränke & Ankleiden' },
  { key: 'bad', label: 'Bad' },
  { key: 'aussen', label: 'Aussenbereich' },
];

export const projekte = [
  { img: 'projektKuecheInsel', imgBefore: 'werkstattCnc', cat: 'kueche', title: 'Wohnküche mit Kochinsel', place: 'Strengelbach', desc: 'Grosszügige Eichenküche mit matt-schwarzen Fronten und Steinabdeckung.' },
  { img: 'kuecheHero', imgBefore: 'haendeDetail', cat: 'kueche', title: 'Grifflose Designküche', place: 'Zofingen', desc: 'Grifflose Küche in Eiche mit integrierten Markengeräten.' },
  { img: 'kuecheDetail', imgBefore: 'werkstattCnc', cat: 'kueche', title: 'Küche im Detail', place: 'Aargau', desc: 'Soft-Close-Auszüge und präzise Verarbeitung bis ins Detail.' },
  { img: 'projektBibliothek', imgBefore: 'haendeDetail', cat: 'wohnen', title: 'Bibliothek nach Mass', place: 'Oftringen', desc: 'Raumhohes Eichenregal mit integriertem Arbeitsplatz.' },
  { img: 'moebelHero', imgBefore: 'werkstattCnc', cat: 'wohnen', title: 'Wohnwand & Sideboard', place: 'Zofingen', desc: 'Schwebendes TV-Möbel mit offenen Regalen aus Eiche.' },
  { img: 'moebelDetail', imgBefore: 'haendeDetail', cat: 'wohnen', title: 'Sideboard aus Eiche', place: 'Aargau', desc: 'Massives Sideboard mit sichtbaren Verbindungen.' },
  { img: 'projektTreppe', imgBefore: 'werkstattCnc', cat: 'wohnen', title: 'Eichentreppe', place: 'Strengelbach', desc: 'Freitragende Treppe mit Eichenstufen und filigranem Geländer.' },
  { img: 'projektSchlafzimmer', imgBefore: 'haendeDetail', cat: 'schrank', title: 'Schrankwand im Schlafzimmer', place: 'Zofingen', desc: 'Wandhoher Schiebetürschrank mit indirekter Beleuchtung.' },
  { img: 'schraenkeHero', imgBefore: 'werkstattCnc', cat: 'schrank', title: 'Begehbare Ankleide', place: 'Aargau', desc: 'Offene Ankleide mit Regalen, Auszügen und LED-Licht.' },
  { img: 'schraenkeDetail', imgBefore: 'haendeDetail', cat: 'schrank', title: 'Garderobe im Eingang', place: 'Oftringen', desc: 'Einbauschrank mit Eiche- und Schwarzflächen kombiniert.' },
  { img: 'badHero', imgBefore: 'werkstattCnc', cat: 'bad', title: 'Badmöbel mit Doppelwaschtisch', place: 'Strengelbach', desc: 'Schwebender Waschtisch mit Spiegelschrank und LED-Licht.' },
  { img: 'badDetail', imgBefore: 'haendeDetail', cat: 'bad', title: 'Waschtisch aus Eiche', place: 'Zofingen', desc: 'Waschtisch mit warmem Holz und mattschwarzer Armatur.' },
  { img: 'projektLaden', imgBefore: 'werkstattCnc', cat: 'wohnen', title: 'Ladenbau', place: 'Region Aargau', desc: 'Massgefertigte Verkaufsmöbel und Regale aus Eiche.' },
  { img: 'projektEmpfang', imgBefore: 'haendeDetail', cat: 'wohnen', title: 'Empfangsbereich', place: 'Region Aargau', desc: 'Empfangstheke mit hinterleuchteter Lamellenwand.' },
  { img: 'terrasseHero', imgBefore: 'werkstattCnc', cat: 'aussen', title: 'Holzterrasse', place: 'Strengelbach', desc: 'Terrassenboden aus Lärche mit passender Unterkonstruktion.' },
  { img: 'gartenhausHero', imgBefore: 'haendeDetail', cat: 'aussen', title: 'Gartenhaus mit Unterstand', place: 'Zofingen', desc: 'Gartenhaus nach Mass mit integriertem Velounterstand.' },
  { img: 'tuerenHero', imgBefore: 'werkstattCnc', cat: 'wohnen', title: 'Hauseingangstür', place: 'Aargau', desc: 'Eingangstür in dunkler Eiche mit vertikaler Lattung.' },
  { img: 'tischHero', imgBefore: 'haendeDetail', cat: 'wohnen', title: 'Massivholztisch mit Bank', place: 'Oftringen', desc: 'Esstisch und Bank aus geölter Eiche nach Mass.' },
];

export { images };
