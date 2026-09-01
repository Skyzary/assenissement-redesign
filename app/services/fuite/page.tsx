import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Button } from '@/components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from '@/app/services/debouchage/service.module.scss';

export const metadata: Metadata = {
  title: 'Recherche de fuite — Burnens Assainissement',
  description: 'Recherche de fuite dans les canalisations dans l\'Hérault. Détection sans destruction, intervention rapide.',
};

export default function FuitePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Recherche de fuite</h1>
              <p>
                Détection de fuites dans vos canalisations grâce à nos équipements d&apos;inspection
                de pointe. Localisation précise pour des réparations ciblées et économiques.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image 
                src="/images/camera.webp" 
                alt="Recherche de fuite" 
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
              <h2>Méthodes de détection</h2>
              <ul>
                <li>Inspection caméra endoscopique</li>
                <li>Test d&apos;étanchéité à l&apos;eau ou à l&apos;air</li>
                <li>Détection acoustique des canalisations enterrées</li>
                <li>Traçage de réseau</li>
              </ul>
              <h2>Signes d&apos;une fuite</h2>
              <ul>
                <li>Humidité anormale dans les murs ou au sol</li>
                <li>Odeurs persistantes sans cause apparente</li>
                <li>Effondrement ou affaissement du sol</li>
                <li>Surconsommation d&apos;eau inexpliquée</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
