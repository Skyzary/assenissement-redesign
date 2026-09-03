export const SITE_CONFIG = {
  name: 'Burnens Assainissement',
  tagline: "Assainissement & Débouchage dans l'Hérault",
  description: "Débouchage de canalisation, fosse septique, pompage et assainissement dans l'Hérault depuis 2009. Urgences 7j/7 et 24h/24 en 30 à 45 min.",
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
    responseTime: 'Intervention d\'urgence en 30-45 min',
    freeQuote: 'Devis gratuit avant travaux',
    available: 'Urgences 7j/7 — 24h/24',
    artisan: 'Artisan Local — Entreprise Familiale',
    experience: 'Depuis 2009 — +15 ans de savoir-faire',
  },
  googleMaps: 'https://maps.app.goo.gl/iLUPagSZHpzki1w77?g_st=ac',
  facebook: 'https://www.facebook.com/profile.php?id=100089272197547&ref=page_internal',
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Débouchage', href: '/services/debouchage' },
    { label: 'Vidange Fosse', href: '/services/vidange' },
    { label: 'Pompage Bac', href: '/services/pompage' },
    { label: 'Inspection Caméra', href: '/services/camera' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const SERVICES = [
  {
    id: 'debouchage',
    title: 'Débouchage de canalisations',
    tagline: 'Intervention d\'urgence 24/7',
    description: 'Débouchage haute pression pour WC, éviers, baignoires et canalisations principales. Matériel professionnel spécialisé.',
    href: '/services/debouchage',
  },
  {
    id: 'vidange',
    title: 'Vidange de fosse septique',
    tagline: 'Nettoyage & curage complet',
    description: 'Pompage et vidange réglementée de fosses septiques et toutes eaux. Remise de bordereau de suivi des déchets.',
    href: '/services/vidange',
  },
  {
    id: 'pompage',
    title: 'Pompage bac à graisses',
    tagline: 'Particuliers & Restauration',
    description: 'Entretien et curage périodique des bacs à graisses pour préserver vos évacuations et respecter la réglementation.',
    href: '/services/pompage',
  },
  {
    id: 'camera',
    title: 'Caméra canalisation',
    tagline: 'Diagnostic vidéo HD',
    description: 'Inspection vidéo endoscopique de précision pour localiser casse, effondrement, bouchon ou infiltration.',
    href: '/services/camera',
  },
  {
    id: 'fuite',
    title: 'Recherche de fuites',
    tagline: 'Sans destruction',
    description: 'Détection et géolocalisation des fuites enterrées ou encastrées grâce à l\'acoustique et l\'inspection vidéo.',
    href: '/contact',
  },
  {
    id: 'terrassement',
    title: 'Terrassement & VRD',
    tagline: 'Raccordement & Drainage',
    description: 'Travaux de terrassement, création de tranchées, pose de drains et raccordement complet au tout-à-l\'égout.',
    href: '/contact',
  },
] as const;
