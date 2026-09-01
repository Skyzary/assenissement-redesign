'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Button } from '@/components/atoms/Button/Button';
import { ThemeToggle } from '@/components/atoms/ThemeToggle/ThemeToggle';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {/* Top emergency bar */}
      <div className={styles['header__top-bar']}>
        <div className={styles['header__top-container']}>
          <span className={styles['header__urgency-badge']}>🚨 Urgences 7j/7 - 24h/24</span>
          <div className={styles['header__top-phones']}>
            <span>Tél: <a href="tel:+33467859780">04 67 85 97 80</a></span>
            <span className={styles['header__phone-divider']}>|</span>
            <span>Urgence 24h: <a href="tel:+33665145576" className={styles['header__urgency-link']}>06 65 14 55 76</a></span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/">
            <Image 
              src="/images/logo.webp" 
              alt="Burnens Assainissement Logo" 
              width={46} 
              height={46} 
              priority 
            />
            <div className={styles['header__brand-info']}>
              <span className={styles['header__logo-text']}>Burnens Assainissement</span>
              <span className={styles['header__logo-subtext']}>Assainissement & Débouchage dans l&apos;Hérault</span>
            </div>
          </Link>
        </div>

        <nav className={`${styles.header__nav} ${isMobileMenuOpen ? styles['header__nav--open'] : ''}`}>
          <ul className={styles['header__nav-list']}>
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link></li>
            <li><Link href="/services/debouchage" onClick={() => setIsMobileMenuOpen(false)}>Débouchage</Link></li>
            <li><Link href="/services/vidange" onClick={() => setIsMobileMenuOpen(false)}>Vidange Fosse</Link></li>
            <li><Link href="/services/pompage" onClick={() => setIsMobileMenuOpen(false)}>Pompage Bac</Link></li>
            <li><Link href="/services/camera" onClick={() => setIsMobileMenuOpen(false)}>Inspection Caméra</Link></li>
            <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.header__cta}>
          <ThemeToggle />

          <Button href="/contact" variant="secondary">
            Devis Gratuit
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className={styles.header__hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.header__bar} ${isMobileMenuOpen ? styles['header__bar--open'] : ''}`} />
            <span className={`${styles.header__bar} ${isMobileMenuOpen ? styles['header__bar--open'] : ''}`} />
            <span className={`${styles.header__bar} ${isMobileMenuOpen ? styles['header__bar--open'] : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
};
