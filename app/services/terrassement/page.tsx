import React from 'react';
import Image from 'next/image';
import { Header } from '../../../components/organisms/Header/Header';
import { Footer } from '../../../components/organisms/Footer/Footer';
import { Button } from '../../../components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from '../debouchage/service.module.scss';

export const metadata: Metadata = {
  title: 'Terrassement VRD — Burnens Assainissement',
  description: 'Travaux de terrassement, drainage et VRD dans l\'Hérault. Raccordement égout, drainage, aménagement de terrain. Devis gratuit.',
};

export default function TerrassementPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Terrassement VRD</h1>
              <p>
                Terrassement, drainage, raccordement au tout-à-l&apos;égout et travaux de Voirie
                et Réseaux Divers (VRD). Nous réalisons vos aménagements extérieurs avec soin et précision.
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image src="/images/terrassement.jpg" alt="Terrassement VRD" width={560} height={380} priority />
            </div>
          </div>
        </section>

        <section className={styles['service-content']}>
          <div className={styles['service-content__container']}>
            <article>
              <h2>Nos prestations VRD</h2>
              <ul>
                <li>Petits terrassements et nivellement</li>
                <li>Travaux de drainage et assèchement</li>
                <li>Raccordement au réseau tout-à-l&apos;égout</li>
                <li>Installation de système d&apos;assainissement non collectif</li>
                <li>Création de tranchées et pose de canalisations</li>
              </ul>
              <h2>Notre approche</h2>
              <p>
                Avant de commencer les travaux, nous étudions minutieusement l&apos;aspect technique
                de votre projet afin de vous proposer le dispositif d&apos;assainissement le plus adapté
                à votre terrain et à la réglementation en vigueur.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
