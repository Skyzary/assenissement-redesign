import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.scss';
import { SmoothScrollProvider } from '@/components/atoms/SmoothScroll/SmoothScrollProvider';
import { JsonLd } from '@/components/atoms/JsonLd/JsonLd';
import { BackToTop } from '@/components/atoms/BackToTop/BackToTop';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.burnens-assainissement.fr'),
  title: {
    default: "Débouchage & Fosse Septique Hérault | Burnens",
    template: "%s | Burnens Assainissement",
  },
  description: 'Débouchage canalisation, vidange fosse septique et pompage dans l\'Hérault. Burnens Assainissement à Cournonsec, urgences 7j/7 24h/24.',
  keywords: [
    'débouchage canalisation Montpellier',
    'vidange fosse septique Cournonsec',
    'pompage bac à graisses Hérault',
    'assainissement Sète',
    'caméra canalisation Palavas',
  ],
  authors: [{ name: 'Burnens Assainissement' }],
  creator: 'Burnens Assainissement',
  publisher: 'Burnens Assainissement',
  formatDetection: {
    telephone: true,
  },
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.burnens-assainissement.fr',
    siteName: 'Burnens Assainissement',
    title: 'Burnens Assainissement — Débouchage & Fosse septique Hérault',
    description: 'Spécialiste de l\'assainissement, débouchage de canalisation et vidange de fosse septique dans l\'Hérault. Urgences 7j/7 24h/24.',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Burnens Assainissement Intervention Hérault',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="light">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <SmoothScrollProvider>
          {children}
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
