'use client';

import React from 'react';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';
import { Button } from '../../atoms/Button/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.hero__bg} 
        aria-hidden="true" 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className={styles.hero__container}>
        <motion.div
          className={styles.hero__content}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className={styles.hero__badge}>Urgences 7j/7 — 24h/24</div>
          <h1 className={styles.hero__title}>
            Le spécialiste du débouchage de canalisation dans&nbsp;
            <span className={styles['hero__title--accent']}>l&apos;Hérault</span>
          </h1>
          <p className={styles.hero__subtitle}>
            Assainissement, pompage fosse septique, bac à graisses, débouchage tout type de canalisation.
            Intervention rapide à Montpellier, Sète, Palavas, Lattes, Frontignan et toute la région.
          </p>
          <div className={styles.hero__actions}>
            <Button href="/contact" variant="primary">Devis gratuit</Button>
            <Button href="tel:+33665145576" variant="outline">
              Urgence : 06 65 14 55 76
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
