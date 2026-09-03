'use client';

import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button/Button';
import { PhoneIcon } from '@/components/atoms/icons';
import { SITE_CONFIG } from '@/config/site';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  },
};

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__bg} aria-hidden="true">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className={styles.hero__bg_img}
        />
      </div>
      <div className={styles.hero__container}>
        <motion.div 
          className={styles.hero__content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.hero__badge}>
            {SITE_CONFIG.guarantees.available}
          </motion.div>
          <motion.h1 variants={itemVariants} className={styles.hero__title}>
            Débouchage de canalisation & Urgence Assainissement dans&nbsp;
            <span className={styles['hero__title--accent']}>l&apos;Hérault (34)</span>
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.hero__subtitle}>
            WC bouché, refoulement ou fosse pleine ? Intervention d&apos;urgence en 30 à 45 minutes pour pompage, 
            curage haute pression et débouchage de tous types de canalisations à Montpellier, Sète, Palavas, Lattes, 
            Frontignan et tout le département.
          </motion.p>
          <motion.div variants={itemVariants} className={styles.hero__actions}>
            <Button 
              onClick={() => {
                document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              variant="primary" 
              className={styles.hero__btn_primary}
            >
              Demander un devis
            </Button>
            <Button href={SITE_CONFIG.phones.urgent.href} variant="outline" className={styles.hero__btn_outline}>
              <PhoneIcon size={18} />
              <span>Urgence : {SITE_CONFIG.phones.urgent.display}</span>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.hero__trust}>
            <a 
              href={SITE_CONFIG.googleMaps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.hero__rating}
              title="Consulter nos avis 5 étoiles sur Google Maps"
            >
              <span className={styles.hero__stars}>{SITE_CONFIG.rating.stars}</span>
              <strong>{SITE_CONFIG.rating.score}</strong>
              <span className={styles.hero__rating_source}>{SITE_CONFIG.rating.source}</span>
              <span className={styles.hero__rating_arrow}>↗</span>
            </a>
            <span className={styles.hero__divider}>•</span>
            <span className={styles.hero__trust_item}>{SITE_CONFIG.guarantees.responseTime}</span>
            <span className={styles.hero__divider}>•</span>
            <span className={styles.hero__trust_item}>{SITE_CONFIG.guarantees.freeQuote}</span>
            <span className={styles.hero__divider}>•</span>
            <span className={styles.hero__trust_item}>+15 ans de savoir-faire</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

