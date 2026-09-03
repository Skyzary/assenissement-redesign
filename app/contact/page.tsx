import React from 'react';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { ContactForm } from '@/components/organisms/ContactForm/ContactForm';
import type { Metadata } from 'next';
import styles from './contact.module.scss';

import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contactez-nous — Devis Débouchage Hérault | Burnens Assainissement',
  description: 'Contactez Burnens Assainissement pour un devis gratuit de débouchage, vidange de fosse septique ou assainissement dans l\'Hérault.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__container}>
            <h1>Contactez Burnens Assainissement</h1>
            <p>Devis gratuit & interventions dans l&apos;Hérault. Urgences : <a href={SITE_CONFIG.phones.urgent.href}>{SITE_CONFIG.phones.urgent.display}</a></p>
          </div>
        </section>

        <section className={styles.info}>
          <div className={styles.info__container}>
            <article className={styles.info__card}>
              <h2>Adresse</h2>
              <p>Zi Creysses Saint Martin</p>
              <p>34660 Cournonsec</p>
              <p className={styles.info__link_wrapper}>
                <a href={SITE_CONFIG.googleMaps} target="_blank" rel="noopener noreferrer" className={styles.info__maps_link}>
                  📍 Voir sur Google Maps
                </a>
              </p>
            </article>
            <article className={styles.info__card}>
              <h2>Téléphone</h2>
              <p><a href={SITE_CONFIG.phones.standard.href}>{SITE_CONFIG.phones.standard.display}</a></p>
              <p>Urgences: <a href={SITE_CONFIG.phones.urgent.href}>{SITE_CONFIG.phones.urgent.display}</a></p>
            </article>
            <article className={styles.info__card}>
              <h2>Disponibilité</h2>
              <p>Urgences 7j/7 — 24h/24</p>
              <p>Intervention dans la journée</p>
            </article>
            <article className={styles.info__card}>
              <h2>Réseaux Sociaux</h2>
              <p>Suivez nos interventions</p>
              <p className={styles.info__link_wrapper}>
                <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer" className={styles.info__facebook_link}>
                  Facebook ↗
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className={styles.map}>
          <div className={styles.map__container}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11566.248671677271!2d3.7144983999999996!3d43.5531478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b133919e90098f%3A0xe5479fa93dc5bc3c!2sBurnens%20Assainissement!5e0!3m2!1sfr!2sfr!4v1690000000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
