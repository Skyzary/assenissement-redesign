'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Button } from '@/components/atoms/Button/Button';
import { ThemeToggle } from '@/components/atoms/ThemeToggle/ThemeToggle';

import { SITE_CONFIG } from '@/config/site';

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
          <span className={styles['header__urgency-badge']}>🚨 {SITE_CONFIG.guarantees.available}</span>
          <div className={styles['header__top-phones']}>
            <span>Tél: <a href={SITE_CONFIG.phones.standard.href}>{SITE_CONFIG.phones.standard.display}</a></span>
            <span className={styles['header__phone-divider']}>|</span>
            <span>Urgence 24h: <a href={SITE_CONFIG.phones.urgent.href} className={styles['header__urgency-link']}>{SITE_CONFIG.phones.urgent.display}</a></span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/">
            <Image 
              src="/images/logo.webp" 
              alt={`${SITE_CONFIG.name} Logo`}
              width={46} 
              height={46} 
              priority 
            />
            <div className={styles['header__brand-info']}>
              <span className={styles['header__logo-text']}>{SITE_CONFIG.name}</span>
              <span className={styles['header__logo-subtext']}>{SITE_CONFIG.tagline}</span>
            </div>
          </Link>
        </div>

        <nav className={`${styles.header__nav} ${isMobileMenuOpen ? styles['header__nav--open'] : ''}`}>
          <ul className={styles['header__nav-list']}>
            {SITE_CONFIG.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
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
