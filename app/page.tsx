import dynamic from 'next/dynamic';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { ServicesSection } from '@/components/organisms/ServicesSection/ServicesSection';
import { AboutSection } from '@/components/organisms/AboutSection/AboutSection';
import { StatsSection } from '@/components/organisms/StatsSection/StatsSection';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection/TestimonialsSection';
import { FaqSection } from '@/components/organisms/FaqSection/FaqSection';
import { FloatingUrgenceBar } from '@/components/molecules/FloatingUrgenceBar/FloatingUrgenceBar';
import type { Metadata } from 'next';

const QuoteCalculator = dynamic(
  () => import('@/components/organisms/QuoteCalculator/QuoteCalculator').then((mod) => mod.QuoteCalculator),
  { ssr: true }
);

const ContactForm = dynamic(
  () => import('@/components/organisms/ContactForm/ContactForm').then((mod) => mod.ContactForm),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Débouchage & Fosse Septique Hérault | Burnens",
  description: 'Débouchage canalisation, inondation, vidange fosse septique et pompage dans l\'Hérault. Burnens Assainissement à Cournonsec, urgences 7j/7 24h/24.',
  keywords: 'débouchage canalisation, inondation, vidange fosse septique, pompage bac à graisses, assainissement Montpellier, Hérault, Cournonsec',
  openGraph: {
    title: "Burnens Assainissement — Débouchage & Assainissement Hérault",
    description: 'Spécialiste du débouchage de canalisation, fosse septique et assainissement dans l\'Hérault depuis 2009.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <QuoteCalculator />
        <TestimonialsSection />
        <FaqSection />
        <ContactForm />
      </main>
      <FloatingUrgenceBar />
      <Footer />
    </>
  );
}
