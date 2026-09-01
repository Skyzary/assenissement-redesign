import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Button } from '@/components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from '@/app/services/debouchage/service.module.scss';

export const metadata: Metadata = {
  title: 'Caméra canalisation — Burnens Assainissement',
  description: 'Inspection vidéo de canalisations dans l\'Hérault. Localisation précise de fuites, fissures et obstructions. Devis gratuit.',
};

export default function CameraPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Caméra canalisation</h1>
              <p>
                Inspection vidéo endoscopique pour un diagnostic précis de l&apos;état de vos canalisations.
                Nous localisons fuites, fissures, racines et obstructions sans travaux destructifs.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image 
                src="/images/camera.webp" 
                alt="Inspection caméra canalisation" 
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
              <h2>Inspection sans travaux destructifs</h2>
              <p>
                Grâce à notre caméra endoscopique de haute résolution, nous explorons vos canalisations
                de diamètre 50 mm à 300 mm sans ouvrir les murs ni casser les sols.
                Le diagnostic est immédiat et le rapport vidéo vous est remis.
              </p>
              <h2>Cas d&apos;utilisation</h2>
              <ul>
                <li>Localisation d&apos;une fuite ou d&apos;une fissure</li>
                <li>Contrôle avant achat immobilier</li>
                <li>Diagnostic de canalisation bouchée chronique</li>
                <li>Vérification après travaux</li>
                <li>Bilan de l&apos;état de vos canalisations</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
