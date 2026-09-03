'use client';

import React from 'react';
import styles from './AboutSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button/Button';

const advantages = [
  { label: 'Expertise', detail: 'Un diagnostic sur le terrain est effectué avant de démarrer les travaux.' },
  { label: 'Qualité', detail: 'Nous garantissons la fiabilité et la durabilité de nos installations.' },
  { label: 'Tarifs compétitifs', detail: 'Des prix attractifs pour les particuliers et les professionnels.' },
  { label: 'Urgences 7j/7', detail: 'Disponible 24h/24, 7j/7 pour toute situation d\'urgence.' },
];

export const AboutSection: React.FC = () => {
  return (
    <section className={styles['about-section']}>
      <div className={styles['about-section__container']}>
        <motion.div
          className={styles['about-section__text']}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className={styles['about-section__eyebrow']}>Artisan Local — Entreprise Familiale depuis 2009</span>
          <h2>Votre spécialiste de l&apos;assainissement dans l&apos;Hérault</h2>
          <p>
            En tant que <strong>spécialiste du débouchage de canalisation</strong> et de l&apos;assainissement,
            nous mettons à votre service plus de 15 ans d&apos;expertise technique. Avant de commencer
            les travaux, nous étudions minutieusement chaque situation afin de vous proposer la solution
            de débouchage et d&apos;assainissement la plus adaptée et durable.
          </p>
          <p>
            Basée à <strong>Cournonsec</strong>, notre équipe intervient en urgence dans tout le département
            de <strong>l&apos;Hérault</strong> (zone de 50 km autour de Montpellier, Sète, Frontignan,
            Palavas-les-Flots, Lattes, Mèze, Balaruc et ses environs).
          </p>

          <ul className={styles['about-section__advantages']}>
            {advantages.map((a) => (
              <li key={a.label} className={styles['about-section__advantage']}>
                <strong>{a.label}</strong>
                <span>{a.detail}</span>
              </li>
            ))}
          </ul>

          <div className={styles['about-section__cta']}>
            <Button href="/contact" variant="secondary">
              Demander un devis gratuit
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={styles['about-section__media']}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className={styles['about-section__image']}>
            <Image
              src="/images/about.webp"
              alt="Technicien Burnens Assainissement au travail"
              width={600}
              height={450}
              sizes="(max-width: 900px) 100vw, 600px"
              loading="lazy"
              quality={75}
              className={styles['about-section__img']}
            />
            <div className={styles['about-section__stats']}>
              <strong>15+</strong>
              <span>Ans d&apos;expérience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
