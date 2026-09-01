'use client';

import React, { useState, useEffect } from 'react';
import styles from './FloatingUrgenceBar.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingUrgenceBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          className={styles.bar}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label="Appel rapide d'urgence"
        >
          <div className={styles.bar__content}>
            <div className={styles.bar__status}>
              <span className={styles.bar__dot} />
              <span className={styles.bar__status_text}>Urgences 7j/7 — 24h/24</span>
            </div>

            <a href="tel:+33665145576" className={styles.bar__call_btn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>06 65 14 55 76</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
