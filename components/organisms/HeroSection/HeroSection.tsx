import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button/Button';

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
        <div className={styles.hero__content}>
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
        </div>
      </div>
    </section>
  );
};

