import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Button } from '@/components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from './service.module.scss';

export const metadata: Metadata = {
  title: 'Débouchage Canalisation Hérault (34) — Intervention 24/7 | Burnens',
  description: 'Débouchage d\'urgence de canalisation dans l\'Hérault : WC bouché, évier, regard, colonne. Intervention express en 30 à 45 min avec camion hydrocureur. Devis 100% gratuit.',
  keywords: 'débouchage canalisation Montpellier, urgence débouchage WC Hérault, camion hydrocureur 34, débouchage regard Cournonsec, Sète',
};

export default function DebouchagePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Débouchage de canalisation & Urgences dans l&apos;Hérault</h1>
              <p>
                Canalisation bouchée, évacuation lente ou débordement ? Burnens Assainissement intervient 
                en 30 à 45 minutes avec un camion hydrocureur haute pression sur Montpellier, Sète, Frontignan, 
                Palavas, Lattes, Cournonsec et tout le département 34.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Demander un devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">Urgence 24/7 : 06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image
                src="/images/hero-bg.webp"
                alt="Camion hydrocureur Burnens Assainissement en intervention de débouchage de canalisation dans l'Hérault"
                width={560}
                height={380}
                sizes="(max-width: 900px) 100vw, 560px"
                quality={75}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles['service-content']}>
          <div className={styles['service-content__container']}>
            <article>
              <h2>Nos interventions de débouchage et d&apos;assainissement</h2>
              <p>
                Nous traitons tous types d&apos;engorgements domestiques et collectifs avec du matériel professionnel 
                de pointe, sans aucun produit chimique agressif pour préserver vos tuyauteries :
              </p>
              <ul>
                <li><strong>Débouchage sanitaire :</strong> WC suspendus ou classiques, éviers, lavabos, baignoires, douches à l&apos;italienne.</li>
                <li><strong>Hydrocurage haute pression :</strong> nettoyage et décapage intégral des parois de tuyauteries jusqu&apos;au tout-à-l&apos;égout.</li>
                <li><strong>Curage de regards & colonnes montantes :</strong> copropriétés, immeubles, pavillons et locaux professionnels.</li>
                <li><strong>Passage caméra HD :</strong> diagnostic vidéo précis pour repérer racines, cassures ou obstructions complexes.</li>
                <li><strong>Réparation & raccordement :</strong> remise en état durable de vos réseaux d&apos;évacuation d&apos;eaux usées et pluviales.</li>
              </ul>

              <h2>Comment se déroule notre intervention ?</h2>
              <ol>
                <li><strong>Diagnostic immédiat :</strong> localisation précise de l&apos;engorgement et validation du devis gratuit avant travaux.</li>
                <li><strong>Action hydrocurage :</strong> injection d&apos;eau à haute pression (jusqu&apos;à 350 bars) pour pulvériser le bouchon et curer le conduit.</li>
                <li><strong>Contrôle & propreté :</strong> test d&apos;écoulement, vérification visuelle et nettoyage complet du lieu d&apos;intervention.</li>
              </ol>

              <h2>Pourquoi choisir Burnens Assainissement ?</h2>
              <ul>
                <li><strong>Plus de 15 ans d&apos;expérience</strong> sur le terrain dans l&apos;Hérault depuis 2009.</li>
                <li><strong>Camion hydrocureur compact</strong> adapté aux accès difficiles et ruelles étroites.</li>
                <li><strong>Intervention express en 30 à 45 minutes</strong> 7j/7 et 24h/24 pour toutes urgences.</li>
                <li><strong>Devis 100% gratuit & transparent</strong> : aucun frais caché ni mauvaise surprise.</li>
                <li><strong>Garantie 3 mois</strong> sur l&apos;ensemble de nos débouchages.</li>
              </ul>

              <h2>Zone d&apos;intervention rapide (Rayon de 50 km)</h2>
              <p>
                Basés à <strong>Cournonsec (34660)</strong>, nous nous déplaçons immédiatement à :
                Montpellier, Sète, Fabrègues, Grabels, Pignan, Cournonterral, Balaruc-les-Bains,
                Bouzigues, Lavérune, Mireval, Saint-Jean-de-Védas, Palavas-les-Flots, Lattes, Mèze, Frontignan et communes limitrophes.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
