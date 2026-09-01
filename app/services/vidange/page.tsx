import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Button } from '@/components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from '@/app/services/debouchage/service.module.scss';

export const metadata: Metadata = {
  title: 'Vidange de fosse septique — Burnens Assainissement',
  description: 'Vidange et entretien de fosse septique dans l\'Hérault. Camion pompe, intervention rapide, devis gratuit. Cournonsec, Montpellier, Sète.',
};

export default function VidangePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Vidange de fosse septique</h1>
              <p>
                Entretien et vidange de fosses septiques, toutes fosses toutes eaux, microstations.
                Intervention rapide dans un rayon de 50 km autour de Cournonsec avec camion pompe.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">Urgence : 06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image 
                src="/images/fosse.webp" 
                alt="Vidange de fosse septique" 
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
              <h2>Nos prestations vidange</h2>
              <ul>
                <li>Vidange fosse septique toutes eaux</li>
                <li>Entretien et curage de fosse</li>
                <li>Pose et installation de nouvelle fosse</li>
                <li>Raccordement au tout-à-l&apos;égout</li>
                <li>Inspection et diagnostic SPANC</li>
              </ul>
              <h2>Fréquence recommandée</h2>
              <p>
                La réglementation impose de vidanger sa fosse septique tous les 4 ans minimum.
                Burnens Assainissement vous accompagne dans cette démarche et vous délivre un bordereau
                de suivi de matières de vidange conforme à la réglementation.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
