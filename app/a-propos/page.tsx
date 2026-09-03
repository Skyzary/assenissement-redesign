import React from 'react';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { ContactForm } from '@/components/organisms/ContactForm/ContactForm';
import { FloatingUrgenceBar } from '@/components/molecules/FloatingUrgenceBar/FloatingUrgenceBar';
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './a-propos.module.scss';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'À Propos de Burnens Assainissement | Notre Entreprise',
  description: 'Découvrez Burnens Assainissement, votre expert en débouchage et assainissement dans l\'Hérault. Plus de 15 ans d\'expérience et de professionnalisme.',
};

export default function AProposPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__container}>
            <h1>Notre Entreprise</h1>
            <p>Spécialiste de l’assainissement collectif et autonome depuis 2009.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.content__container}>
            <div className={styles.grid}>
              <div className={styles.text_block}>
                <h2>Dans le métier depuis plus de 15 ans</h2>
                <p>
                  Burnens Assainissement est une entreprise à taille humaine, reconnue dans l&apos;Hérault pour son sérieux 
                  et son efficacité. Confiez-nous la réalisation de vos travaux d’assainissement et de terrassement. 
                  Nous œuvrons dans le domaine depuis plus de 10 ans. Avant de commencer les travaux, 
                  nous étudions minutieusement l’aspect technique de votre projet afin de vous proposer le dispositif 
                  d’assainissement adapté.
                </p>
                <p>
                  Nous assurons la durabilité de nos réalisations. Nos prix sont très attractifs et nous 
                  proposons toujours un <strong>devis gratuit</strong> avant toute intervention.
                </p>

                <h3>Nos garanties :</h3>
                <ul>
                  <li>✔️ Expertise terrain avant chaque intervention</li>
                  <li>✔️ Matériel de pointe (Camion hydrocureur, Caméra HD)</li>
                  <li>✔️ Transparence des prix et des conseils</li>
                  <li>✔️ Urgence disponible 7j/7 et 24h/24</li>
                </ul>
              </div>

              <div className={styles.image_block}>
                {/* We use a placeholder path, the user should put a real photo of the truck here */}
                <div className={styles.image_wrapper}>
                  <Image 
                    src="/images/hero-bg.webp" 
                    alt="Camion hydrocureur Burnens Assainissement" 
                    fill 
                    className={styles.image}
                  />
                  <div className={styles.image_caption}>Notre camion hydrocureur prêt à intervenir</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <FloatingUrgenceBar />
      <Footer />
    </>
  );
}
