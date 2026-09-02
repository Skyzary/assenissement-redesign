export const SITE_CONFIG = {
  name: 'Burnens Assainissement',
  tagline: "Assainissement & Débouchage dans l'Hérault",
  description: "Débouchage de canalisation, fosse septique, pompage et assainissement dans l'Hérault depuis 2009. Urgences 7j/7 et 24h/24.",
  phones: {
    standard: {
      display: '04 67 85 97 80',
      href: 'tel:+33467859780',
    },
    urgent: {
      display: '06 65 14 55 76',
      href: 'tel:+33665145576',
    },
  },
  email: 'contact@burnens-assainissement.fr',
  rating: {
    score: '4.9/5',
    stars: '★★★★★',
    source: 'sur Google',
    reviewsCount: '120+',
  },
  guarantees: {
    responseTime: 'Intervention en 30-45 min',
    freeQuote: 'Devis gratuit avant travaux',
    available: 'Urgences 7j/7 — 24h/24',
  },
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Débouchage', href: '/services/debouchage' },
    { label: 'Vidange Fosse', href: '/services/vidange' },
    { label: 'Pompage Bac', href: '/services/pompage' },
    { label: 'Inspection Caméra', href: '/services/camera' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
