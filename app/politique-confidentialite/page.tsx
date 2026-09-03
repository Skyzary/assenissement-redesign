import React from 'react';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import type { Metadata } from 'next';
import styles from './politique-confidentialite.module.scss';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Burnens Assainissement',
  description: 'Politique de confidentialité et de protection des données personnelles de Burnens Assainissement.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__container}>
            <h1>Politique de confidentialité</h1>
            <p>Dernière mise à jour : Septembre 2026</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.content__container}>
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur le site 
              <strong> {SITE_CONFIG.name}</strong> est la société Burnens Assainissement, 
              située à Zi Creysses Saint Martin, 34660 COURNONSEC.
            </p>
            <p>
              Email : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a><br />
              Téléphone : <a href={SITE_CONFIG.phones.standard.href}>{SITE_CONFIG.phones.standard.display}</a>
            </p>

            <h2>2. Données collectées</h2>
            <p>
              Nous collectons les données suivantes via notre formulaire de contact :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Contenu du message</li>
            </ul>

            <h2>3. Base légale et finalité</h2>
            <p>
              Les données sont collectées sur la base de votre consentement et de notre intérêt légitime à vous répondre. 
              Elles servent uniquement à traiter vos demandes de devis ou d&apos;intervention d&apos;urgence.
            </p>

            <h2>4. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant une durée maximale de 3 ans après notre dernier contact.
            </p>

            <h2>5. Vos droits</h2>
            <p>
              Conformément à la réglementation (RGPD), vous disposez des droits suivants concernant vos données :
            </p>
            <ul>
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p>
              Pour exercer vos droits, veuillez nous contacter à l&apos;adresse email : <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Ce site n&apos;utilise <strong>aucun cookie de ciblage publicitaire ni de tracking tiers</strong>. 
              Seuls des cookies techniques strictement nécessaires au fonctionnement du site (comme la sauvegarde de votre préférence de thème clair/sombre) peuvent être utilisés.
            </p>

            <h2>7. Hébergement</h2>
            <p>
              Le site est hébergé par Cloudflare, Inc.<br />
              Adresse : 101 Townsend St, San Francisco, CA 94107, USA.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
