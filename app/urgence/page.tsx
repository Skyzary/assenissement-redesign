import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './urgence.module.scss';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Urgence Débouchage 24/7 Hérault | Burnens Assainissement',
  description: 'Urgence canalisation bouchée, inondation ou fosse pleine ? Intervention en 30 à 45 min dans tout l\'Hérault. Appelez le 06 65 14 55 76.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function UrgencePage() {
  return (
    <main className={styles.urgence_page}>
      <div className={styles.urgence_page__bg}>
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className={styles.urgence_page__bg_img}
        />
        <div className={styles.urgence_page__overlay}></div>
      </div>
      
      <div className={styles.urgence_page__content}>
        <div className={styles.badge}>
          <span className={styles.pulse_dot}></span>
          Service d&apos;astreinte 24h/24 et 7j/7
        </div>
        
        <h1>URGENCE ASSAINISSEMENT</h1>
        <p className={styles.subtitle}>
          Canalisation bouchée, débordement, ou fosse pleine ?<br />
          Notre technicien intervient en <strong>30 à 45 minutes</strong> sur tout le secteur de Montpellier et l&apos;Hérault.
        </p>

        <a href={SITE_CONFIG.phones.urgent.href} className={styles.cta_button}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          APPELER LE {SITE_CONFIG.phones.urgent.display}
        </a>

        <div className={styles.guarantees}>
          <span>✔️ Camion hydrocureur prêt à partir</span>
          <span>✔️ Tarifs clairs annoncés avant travaux</span>
          <span>✔️ Agréé assurances</span>
        </div>

        <a href="/" className={styles.back_link}>
          ← Retourner à l&apos;accueil du site
        </a>
      </div>
    </main>
  );
}
