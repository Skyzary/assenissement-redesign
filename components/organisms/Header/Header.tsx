'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.scss';
import { Button } from '@/components/atoms/Button/Button';
import { ThemeToggle } from '@/components/atoms/ThemeToggle/ThemeToggle';
import { 
  PhoneIcon, 
  FacebookIcon, 
  HomeIcon, 
  WrenchIcon, 
  DropletIcon, 
  FilterIcon, 
  CameraVideoIcon, 
  MailIcon, 
  ChevronRightIcon, 
  CloseIcon 
} from '@/components/atoms/icons';
import { SITE_CONFIG } from '@/config/site';

const navIcons: Record<string, React.ReactNode> = {
  '/': <HomeIcon size={20} />,
  '/services/debouchage': <WrenchIcon size={20} />,
  '/services/vidange': <DropletIcon size={20} />,
  '/services/pompage': <FilterIcon size={20} />,
  '/services/camera': <CameraVideoIcon size={20} />,
  '/contact': <MailIcon size={20} />,
};

import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
          <Link href="/" onClick={closeMobileMenu}>
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

        {/* Desktop Navigation */}
        <nav className={styles.header__nav}>
          <ul className={styles['header__nav-list']}>
            {SITE_CONFIG.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.header__cta}>
          <div className={styles['header__theme-toggle']}>
            <ThemeToggle />
          </div>

          <Button 
            className={styles['header__cta-btn']}
            href={SITE_CONFIG.phones.urgent.href}
            variant="secondary"
          >
            <PhoneIcon size={18} />
            <span className={styles['header__cta-text']}>Appeler</span>
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className={styles.header__hamburger}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <CloseIcon size={22} className={styles['header__close-svg']} />
            ) : (
              <div className={styles['header__hamburger-icon']}>
                <span className={styles.header__bar} />
                <span className={styles.header__bar} />
                <span className={styles.header__bar} />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles['header__apple-overlay']}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Menu principal"
          >
            <div className={styles['header__apple-container']}>
              {/* Header inside overlay with brand and close button */}
              <div className={styles['header__apple-topbar']}>
                <div className={styles['header__apple-brand']}>
                  <Image 
                    src="/images/logo.webp" 
                    alt={SITE_CONFIG.name}
                    width={36} 
                    height={36} 
                  />
                  <div className={styles['header__apple-brand-text']}>
                    <strong>{SITE_CONFIG.name}</strong>
                    <span>{SITE_CONFIG.tagline}</span>
                  </div>
                </div>
                <button 
                  className={styles['header__apple-close-btn']}
                  onClick={closeMobileMenu}
                  aria-label="Fermer le menu"
                >
                  <CloseIcon size={20} />
                </button>
              </div>

              {/* Navigation Links with Icons & Chevrons */}
              <motion.nav 
                className={styles['header__apple-nav']}
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.04, delayChildren: 0.05 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.02, staggerDirection: -1 }
                  }
                }}
              >
                <ul className={styles['header__apple-list']}>
                  {SITE_CONFIG.nav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                    <motion.li 
                      key={item.href}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 12 }
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link 
                        href={item.href} 
                        onClick={closeMobileMenu}
                        className={styles['header__apple-link']}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <div className={styles['header__apple-link-left']}>
                          <span className={styles['header__apple-icon']}>
                            {navIcons[item.href] || <WrenchIcon size={20} />}
                          </span>
                          <span className={styles['header__apple-label']}>{item.label}</span>
                        </div>
                        <span className={styles['header__apple-chevron']}>
                          <ChevronRightIcon size={18} />
                        </span>
                      </Link>
                    </motion.li>
                    );
                  })}
                </ul>
              </motion.nav>

              {/* Bottom Actions & Trust */}
              <motion.div 
                className={styles['header__apple-actions']}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <a 
                  href={SITE_CONFIG.phones.urgent.href} 
                  className={styles['header__apple-call-btn']}
                >
                  <PhoneIcon size={18} />
                  <span>Urgence 24/7 : {SITE_CONFIG.phones.urgent.display}</span>
                </a>

                {pathname === '/' ? (
                  <button 
                    onClick={() => {
                      closeMobileMenu();
                      document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={styles['header__apple-quote-btn']}
                  >
                    Demander un devis gratuit
                  </button>
                ) : (
                  <Link 
                    href="/contact" 
                    onClick={closeMobileMenu}
                    className={styles['header__apple-quote-btn']}
                  >
                    Demander un devis gratuit
                  </Link>
                )}

                <div className={styles['header__apple-footer']}>
                  <a
                    href={SITE_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['header__apple-social']}
                    title="Facebook"
                  >
                    <FacebookIcon size={16} />
                    <span>Facebook</span>
                  </a>
                  <span className={styles['header__apple-location']}>
                    📍 Hérault (34)
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
