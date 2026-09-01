import React from 'react';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { ContactForm } from '@/components/organisms/ContactForm/ContactForm';
import type { Metadata } from 'next';
import styles from './contact.module.scss';

export const metadata: Metadata = {
  title: 'Nous contacter — Burnens Assainissement',
  description: 'Contactez Burnens Assainissement pour un devis gratuit de débouchage, vidange de fosse septique ou assainissement dans l\'Hérault.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__container}>
            <h1>Nous contacter</h1>
            <p>Notre équipe vous répond rapidement. Urgences : <a href="tel:+33665145576">06 65 14 55 76</a></p>
          </div>
        </section>

        <section className={styles.info}>
          <div className={styles.info__container}>
            <article className={styles.info__card}>
              <h2>Adresse</h2>
              <p>Zi Creysses Saint Martin</p>
              <p>34660 Cournonsec</p>
            </article>
            <article className={styles.info__card}>
              <h2>Téléphone</h2>
              <p><a href="tel:+33467859780">04 67 85 97 80</a></p>
              <p>Urgences: <a href="tel:+33665145576">06 65 14 55 76</a></p>
            </article>
            <article className={styles.info__card}>
              <h2>Disponibilité</h2>
              <p>Urgences 7j/7 — 24h/24</p>
              <p>Intervention dans la journée</p>
            </article>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
