import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { FacebookIcon } from '@/components/atoms/icons';
import { SITE_CONFIG } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3>{SITE_CONFIG.name}</h3>
          <p>Zi Creysses Saint Martin</p>
          <p>34660 COURNONSEC (<a href={SITE_CONFIG.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a>)</p>
          <p>Urgences: <a href={SITE_CONFIG.phones.urgent.href}>{SITE_CONFIG.phones.urgent.display}</a></p>
          <p>Tél: <a href={SITE_CONFIG.phones.standard.href}>{SITE_CONFIG.phones.standard.display}</a></p>
          <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className={styles.footer__email_link}>{SITE_CONFIG.email}</a></p>
        </div>

        <div className={styles.footer__column}>
          <h3>Navigation</h3>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services/debouchage">Débouchage</Link></li>
            <li><Link href="/services/vidange">Vidange Fosse</Link></li>
            <li><Link href="/services/pompage">Pompage Bac</Link></li>
            <li><Link href="/services/camera">Inspection Caméra</Link></li>
            <li><Link href="/contact">Nous contacter</Link></li>
            <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h3>Réseaux & Zone</h3>
          <a
            href={SITE_CONFIG.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__social_btn}
            title="Suivez Burnens Assainissement sur Facebook"
          >
            <FacebookIcon size={18} />
            <span>Facebook</span>
          </a>

          <div className={styles.footer__zone_coverage}>
            <p>Intervention dans l&apos;Hérault (34) :</p>
            <div className={styles.footer__cities}>
              <Link href="/intervention/montpellier">Montpellier</Link>
              <Link href="/intervention/sete">Sète</Link>
              <Link href="/intervention/palavas-les-flots">Palavas</Link>
              <Link href="/intervention/lattes">Lattes</Link>
              <Link href="/intervention/frontignan">Frontignan</Link>
              <Link href="/intervention/meze">Mèze</Link>
              <Link href="/intervention/balaruc-les-bains">Balaruc</Link>
              <Link href="/intervention/pignan">Pignan</Link>
              <Link href="/intervention/fabregues">Fabrègues</Link>
              <Link href="/intervention/cournonsec">Cournonsec</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</p>
        <div className={styles.footer__bottom_links}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <span aria-hidden="true">|</span>
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
};
