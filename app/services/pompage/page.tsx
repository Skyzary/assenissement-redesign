import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Button } from '@/components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from '@/app/services/debouchage/service.module.scss';

export const metadata: Metadata = {
  title: 'Pompage bac à graisses — Burnens Assainissement',
  description: 'Pompage et entretien de bac à graisses pour restaurants et professionnels dans l\'Hérault. Devis gratuit.',
};

export default function PompagePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Pompage bac à graisses</h1>
              <p>
                Vidange et entretien de bac à graisses pour restaurateurs, collectivités et industriels.
                Intervention conforme à la réglementation sanitaire dans tout l&apos;Hérault.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image 
                src="/images/vidange.webp" 
                alt="Pompage bac à graisses" 
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
              <h2>Pourquoi entretenir son bac à graisses ?</h2>
              <p>
                Un bac à graisses non entretenu provoque des odeurs, des obstructions et des
                problèmes de mise aux normes. La réglementation impose un pompage régulier,
                notamment pour les établissements de restauration.
              </p>
              <h2>Nos prestations</h2>
              <ul>
                <li>Pompage et vidange du bac à graisses</li>
                <li>Nettoyage haute pression</li>
                <li>Transport et traitement des graisses</li>
                <li>Bordereau de suivi de déchet conforme</li>
                <li>Contrat d&apos;entretien périodique disponible</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
