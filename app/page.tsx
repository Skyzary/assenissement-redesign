import React from 'react';
import { Header } from '../components/organisms/Header/Header';
import { Footer } from '../components/organisms/Footer/Footer';
import { HeroSection } from '../components/organisms/HeroSection/HeroSection';
import { ServicesSection } from '../components/organisms/ServicesSection/ServicesSection';
import { AboutSection } from '../components/organisms/AboutSection/AboutSection';
import { StatsSection } from '../components/organisms/StatsSection/StatsSection';
import { QuoteCalculator } from '../components/organisms/QuoteCalculator/QuoteCalculator';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection/TestimonialsSection';
import { FaqSection } from '../components/organisms/FaqSection/FaqSection';
import { ContactForm } from '../components/organisms/ContactForm/ContactForm';
import { FloatingUrgenceBar } from '../components/molecules/FloatingUrgenceBar/FloatingUrgenceBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Débouchage canalisation Montpellier & Hérault — Burnens Assainissement",
  description: 'Burnens assainissement à Cournonsec : débouchage de canalisation, vidange de fosse septique, pompage bac à graisses, caméra canalisation. Urgences 7j/7 24h/24.',
  keywords: 'débouchage canalisation, vidange fosse septique, pompage bac à graisses, assainissement Montpellier, Hérault, Cournonsec',
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
