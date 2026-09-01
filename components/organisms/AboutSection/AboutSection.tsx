'use client';

import React from 'react';
import styles from './AboutSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <span className={styles['about-section__eyebrow']}>Depuis 2009</span>
          <h2>Dans le métier depuis 2009</h2>
          <p>
            Confiez-nous la réalisation de vos travaux d&apos;assainissement et de terrassement.
            Nous œuvrons dans le domaine depuis plus de 15 ans. Avant de commencer les travaux,
            nous étudions minutieusement l&apos;aspect technique de votre projet afin de vous proposer
            le dispositif d&apos;assainissement adapté.
          </p>
          <p>
            Nous sommes basés à <strong>Cournonsec</strong> et intervenons dans une{' '}
            <strong>zone de 50 km dans l&apos;Hérault</strong>, incluant Montpellier, Sète,
            Frontignan, Palavas, Lattes, Mèze, Balaruc, etc.
          </p>

          <ul className={styles['about-section__advantages']}>
            {advantages.map((a) => (
              <li key={a.label} className={styles['about-section__advantage']}>
                <strong>{a.label}</strong>
                <span>{a.detail}</span>
              </li>
            ))}
          </ul>
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
              src="/images/about.jpg"
              alt="Technicien Burnens Assainissement au travail"
              width={600}
              height={450}
              className={styles['about-section__img']}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
