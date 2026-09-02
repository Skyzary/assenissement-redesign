import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button/Button';
import { PhoneIcon } from '@/components/atoms/icons';
import { SITE_CONFIG } from '@/config/site';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__bg} aria-hidden="true">
        <Image
          src="/images/hero-bg.webp"
          alt="Intervention débouchage et assainissement par Burnens dans l'Hérault"
          fill
          priority
          sizes="100vw"
          quality={75}
          className={styles.hero__bg_img}
        />
      </div>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>{SITE_CONFIG.guarantees.available}</div>
          <h1 className={styles.hero__title}>
            Débouchage de canalisation & Urgence Assainissement dans&nbsp;
            <span className={styles['hero__title--accent']}>l&apos;Hérault (34)</span>
          </h1>
          <p className={styles.hero__subtitle}>
            WC bouché, refoulement ou fosse pleine ? Intervention d&apos;urgence en 30 à 45 minutes pour pompage, 
            curage haute pression et débouchage de tous types de canalisations à Montpellier, Sète, Palavas, Lattes, 
            Frontignan et tout le département.
          </p>
          <div className={styles.hero__actions}>
            <Button href="/contact" variant="primary">Demander un devis</Button>
            <Button href={SITE_CONFIG.phones.urgent.href} variant="outline">
              <PhoneIcon size={18} />
              <span>Urgence : {SITE_CONFIG.phones.urgent.display}</span>
            </Button>
          </div>

          <div className={styles.hero__trust}>
            <div className={styles.hero__rating}>
              <span className={styles.hero__stars}>{SITE_CONFIG.rating.stars}</span>
              <strong>{SITE_CONFIG.rating.score}</strong>
              <span>{SITE_CONFIG.rating.source}</span>
            </div>
            <span className={styles.hero__divider}>•</span>
            <span className={styles.hero__trust_item}>{SITE_CONFIG.guarantees.responseTime}</span>
            <span className={styles.hero__divider}>•</span>
            <span className={styles.hero__trust_item}>{SITE_CONFIG.guarantees.freeQuote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

