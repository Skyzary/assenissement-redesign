import React from 'react';

export const JsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Burnens Assainissement',
    image: 'https://www.burnens-assainissement.fr/images/logo.png',
    '@id': 'https://www.burnens-assainissement.fr/#organization',
    url: 'https://www.burnens-assainissement.fr',
    telephone: '+33467859780',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zi Creysses Saint Martin',
      addressLocality: 'Cournonsec',
      postalCode: '34660',
      addressCountry: 'FR',
      addressRegion: 'Hérault',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5486,
      longitude: 3.7022,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      { '@type': 'City', name: 'Cournonsec' },
      { '@type': 'City', name: 'Montpellier' },
      { '@type': 'City', name: 'Sète' },
      { '@type': 'City', name: 'Frontignan' },
      { '@type': 'City', name: 'Palavas-les-Flots' },
      { '@type': 'City', name: 'Lattes' },
      { '@type': 'City', name: 'Mèze' },
      { '@type': 'City', name: 'Balaruc-les-Bains' },
      { '@type': 'City', name: 'Fabrègues' },
      { '@type': 'City', name: 'Pignan' },
    ],
    sameAs: [
      'https://www.facebook.com/Burnens-Assainissement-147761132573325/',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
