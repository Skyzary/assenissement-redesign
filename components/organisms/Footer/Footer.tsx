import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3>Burnens Assainissement</h3>
          <p>Zi Creysses Saint Martin</p>
          <p>34660 COURNONSEC</p>
          <p>Urgences: 06 65 14 55 76</p>
          <p>Tél: 04 67 85 97 80</p>
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
        <p>&copy; {new Date().getFullYear()} Burnens Assainissement. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
