import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { company } from '@/data/company';

const SITE_URL = 'https://www.daetwyler-schreinerei.ch';

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: company.name,
  description:
    'Schreinerei und Küchenbau nach Mass in Strengelbach, Aargau. Küchen, Badmöbel, Schränke, Möbel, Türen, Terrassen und mehr — seit 1989.',
  url: SITE_URL,
  telephone: company.phoneIntl,
  email: company.email,
  foundingDate: String(company.founded),
  image: `${SITE_URL}/images/daetwyler-logo.png`,
  logo: `${SITE_URL}/images/daetwyler-logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.street,
    postalCode: company.zip,
    addressLocality: company.city,
    addressRegion: 'AG',
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.283621,
    longitude: 7.932119,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '07:00',
      closes: '16:00',
    },
  ],
  sameAs: [company.instagram],
  areaServed: ['Strengelbach', 'Zofingen', 'Aarau', 'Olten', 'Kanton Aargau'],
  priceRange: '$$',
};

export default function Seo({ title, description, image, jsonLd }) {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const fullTitle = title
    ? `${title} | Dätwyler Küchenbau & Schreinerei AG`
    : 'Dätwyler Küchenbau & Schreinerei AG — Schreinerei in Strengelbach AG';
  const desc =
    description ||
    'Dätwyler Küchenbau & Schreinerei AG in Strengelbach: Küchen, Badmöbel, Schränke, Möbel und Türen nach Mass — seit 1989. Jetzt Offerte anfordern: 062 751 49 88.';
  const ogImage = image || `${SITE_URL}/images/daetwyler-logo.png`;

  return (
    <Helmet>
      <html lang="de-CH" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="de_CH" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
