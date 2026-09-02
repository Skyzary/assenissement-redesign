'use client';

import React, { useState, useEffect } from 'react';
import styles from './FloatingUrgenceBar.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

import { PhoneIcon } from '@/components/atoms/icons';
import { SITE_CONFIG } from '@/config/site';

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
              <span className={styles.bar__status_text}>{SITE_CONFIG.guarantees.available}</span>
            </div>

            <a href={SITE_CONFIG.phones.urgent.href} className={styles.bar__call_btn}>
              <PhoneIcon size={16} />
              <span>{SITE_CONFIG.phones.urgent.display}</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
