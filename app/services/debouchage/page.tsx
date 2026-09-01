import React from 'react';
import Image from 'next/image';
import { Header } from '../../../components/organisms/Header/Header';
import { Footer } from '../../../components/organisms/Footer/Footer';
import { Button } from '../../../components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from './service.module.scss';

export const metadata: Metadata = {
  title: 'Débouchage de canalisation — Burnens Assainissement',
  description: 'Débouchage de canalisation dans l\'Hérault : WC, évier, baignoire, regard. Intervention rapide 7j/7 24h/24. Camion hydrocureur. Devis gratuit.',
  keywords: 'débouchage canalisation Montpellier, débouchage Hérault, canalisation bouchée',
};

export default function DebouchagePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Débouchage de canalisation</h1>
              <p>
                Canalisation bouchée ? Nous intervenons rapidement avec notre camion hydrocureur partout
                dans l&apos;Hérault : Montpellier, Sète, Palavas, Frontignan, Lattes, Mèze et plus encore.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Demander un devis</Button>
                <Button href="tel:+33665145576" variant="outline">Urgence : 06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image
                src="/images/hero-bg.jpg"
                alt="Débouchage de canalisation"
                width={560}
                height={380}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles['service-content']}>
          <div className={styles['service-content__container']}>
            <article>
              <h2>Nos interventions de débouchage</h2>
              <ul>
                <li>Débouchage WC, lavabo, évier, baignoire</li>
                <li>Curage de canalisations et regards</li>
                <li>Débouchage de colonnes montantes</li>
                <li>Inspection caméra pour localisation du bouchon</li>
                <li>Raccordement et réparation de canalisations</li>
              </ul>

              <h2>Pourquoi choisir Burnens Assainissement ?</h2>
              <ul>
                <li><strong>Plus de 15 ans d&apos;expérience</strong> dans le domaine</li>
                <li><strong>Camion hydrocureur</strong> haute pression</li>
                <li><strong>Caméra d&apos;inspection</strong> pour un diagnostic précis</li>
                <li><strong>Intervention dans la journée</strong> — urgences 7j/7 24h/24</li>
                <li><strong>Devis gratuit</strong> avant toute intervention</li>
                <li><strong>Garantie 3 mois</strong> sur nos interventions</li>
              </ul>

              <h2>Zone d&apos;intervention</h2>
              <p>
                Basés à Cournonsec (34660), nous intervenons dans un rayon de 50 km :
                Montpellier, Sète, Fabrègues, Grabels, Pignan, Cournonterral, Balaruc-les-Bains,
                Bouzigues, Lavérune, Mireval, Saint-Jean-de-Védas, Palavas-les-Flots, Lattes, Mèze, Frontignan.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
