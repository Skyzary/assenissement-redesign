import React from 'react';
import { Header } from '../../components/organisms/Header/Header';
import { Footer } from '../../components/organisms/Footer/Footer';
import type { Metadata } from 'next';
import styles from './mentions.module.scss';

export const metadata: Metadata = {
  title: 'Mentions légales — Burnens Assainissement',
  description: 'Mentions légales et politique de confidentialité de Burnens Assainissement.',
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.page__container}>
          <h1>Mentions légales</h1>

          <section>
            <h2>Éditeur du site</h2>
            <p><strong>Burnens Assainissement</strong></p>
            <p>Zi Creysses Saint Martin</p>
            <p>34660 Cournonsec</p>
            <p>Téléphone : 04 67 85 97 80</p>
          </section>

          <section>
            <h2>Protection des données personnelles</h2>
            <p>
              BURNENS ASSAINISSEMENT s&apos;engage à ce que la collecte et le traitement de vos données,
              effectués à partir de notre site <strong>burnens-assainissement.fr</strong>, soient conformes
              au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
            </p>
            <p>
              Pour connaître et exercer vos droits, notamment de retrait de votre consentement à l&apos;utilisation
              des données collectées par ce formulaire, veuillez nous contacter directement par téléphone ou email.
            </p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
