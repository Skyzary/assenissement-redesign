import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3>{SITE_CONFIG.name}</h3>
          <p>Zi Creysses Saint Martin</p>
          <p>34660 COURNONSEC</p>
          <p>Urgences: <a href={SITE_CONFIG.phones.urgent.href}>{SITE_CONFIG.phones.urgent.display}</a></p>
          <p>Tél: <a href={SITE_CONFIG.phones.standard.href}>{SITE_CONFIG.phones.standard.display}</a></p>
        </div>

        <div className={styles.footer__column}>
          <h3>À propos</h3>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/contact">Nous contacter</Link></li>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
