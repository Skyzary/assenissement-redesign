import React from 'react';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { QuoteCalculator } from '@/components/organisms/QuoteCalculator/QuoteCalculator';
import { ContactForm } from '@/components/organisms/ContactForm/ContactForm';
import { FloatingUrgenceBar } from '@/components/molecules/FloatingUrgenceBar/FloatingUrgenceBar';
import type { Metadata, ResolvingMetadata } from 'next';
import styles from './ville.module.scss';
import { SITE_CONFIG } from '@/config/site';

interface VillePageProps {
  params: Promise<{ ville: string }>;
}

export async function generateMetadata({ params }: VillePageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { ville } = await params;
  // Capitalize city name and decode URL encoded characters
  const decodedVille = decodeURIComponent(ville);
  const formattedVille = decodedVille.charAt(0).toUpperCase() + decodedVille.slice(1).replace(/-/g, ' ');

  return {
    title: `Débouchage & Assainissement à ${formattedVille} (34) | Burnens`,
    description: `Urgence débouchage de canalisation, vidange de fosse septique et pompage bac à graisses à ${formattedVille}. Intervention rapide 24h/24 7j/7. Devis gratuit.`,
    alternates: {
      canonical: `/intervention/${ville.toLowerCase()}`,
    }
  };
}

export default async function VilleInterventionPage({ params }: VillePageProps) {
  const { ville } = await params;
  const decodedVille = decodeURIComponent(ville);
  const formattedVille = decodedVille.charAt(0).toUpperCase() + decodedVille.slice(1).replace(/-/g, ' ');

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__container}>
            <h1>Expert en Assainissement et Débouchage à {formattedVille}</h1>
            <p>
              Burnens Assainissement intervient à <strong>{formattedVille}</strong> et dans tout l&apos;Hérault. 
              Urgence 7j/7 et 24h/24 pour vos canalisations bouchées, fosses septiques pleines et recherches de fuites.
            </p>
            <div className={styles.hero__actions}>
              <a href={SITE_CONFIG.phones.urgent.href} className={styles.btn_primary}>
                Urgence : {SITE_CONFIG.phones.urgent.display}
              </a>
              <a href="#devis" className={styles.btn_outline}>
                Obtenir un devis
              </a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.content__container}>
            <h2>Nos services à {formattedVille}</h2>
            <div className={styles.services_grid}>
              <div className={styles.service_card}>
                <h3>Débouchage Canalisation</h3>
                <p>Curage haute pression et débouchage en urgence pour WC, éviers et regards extérieurs bouchés à {formattedVille}.</p>
              </div>
              <div className={styles.service_card}>
                <h3>Vidange Fosse Septique</h3>
                <p>Pompage et entretien de votre fosse toutes eaux par camion hydrocureur pour éviter les remontées et odeurs.</p>
              </div>
              <div className={styles.service_card}>
                <h3>Inspection Caméra</h3>
                <p>Localisation précise de bouchons ou de fuites grâce à notre équipement de diagnostic par caméra HD.</p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCalculator />
        <ContactForm />
      </main>
      <FloatingUrgenceBar />
      <Footer />
    </>
  );
}
