'use client';

import React from 'react';
import styles from './TestimonialsSection.module.scss';
import Script from 'next/script';
import { TestimonialCard } from '@/components/molecules/TestimonialCard/TestimonialCard';
import { GoogleMapsIcon } from '@/components/atoms/icons';
import { SITE_CONFIG } from '@/config/site';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'patus-sport',
    quote: 'Il est intervenu très rapidement, même à une heure tardive. Travail très bien effectué. Quand il est reparti, les lieux étaient propres. Vous pouvez l\'appeler les yeux fermés.',
    author: 'Patus Sport Auto',
  },
  {
    id: 'alexandra-pires',
    quote: 'Efficaces, sympathiques, très professionnels. Nous avons eu beaucoup de chance car l\'intervention sur notre fosse septique n\'était pas aisée ! Je recommande chaudement !',
    author: 'Alexandra Pires',
  },
  {
    id: 'arnal-stephanie',
    quote: 'Réactif et très efficace, un professionnel au service du client. Je recommande sans hésitation !',
    author: 'Arnal Stéphanie',
  },
  {
    id: 'martine-bentivegna',
    quote: 'J\'avais un très bon souvenir de la personne intervenue en 2010. 12 ans après, j\'ai retrouvé les mêmes qualités : rapidité, qualité, rapport qualité/prix correct et compétences.',
    author: 'Martine Bentivegna',
  },
  {
    id: 'nicolas-carrasco',
    quote: 'Je recommande cette entreprise pour son efficacité, sa rapidité et son savoir-faire. De plus une garantie de 3 mois vous est gentiment proposée.',
    author: 'Nicolas Carrasco',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles['testimonials-section']}>
      <div className={styles['testimonials-section__container']}>
        <header className={styles['testimonials-section__header']}>
          <span className={styles['testimonials-section__eyebrow']}>Avis clients</span>
          <h2>Satisfaction Garantie</h2>
          <p>Regardez ce qu&apos;en disent nos clients</p>
        </header>

        <motion.div
          className={styles['testimonials-section__grid']}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} quote={t.quote} author={t.author} />
          ))}
        </motion.div>

        <div className={styles['testimonials-section__cta']}>
          <a
            href={SITE_CONFIG.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['testimonials-section__google_btn']}
            title="Consulter nos avis sur Google Maps"
          >
            <GoogleMapsIcon size={22} />
            <span>Voir nos {SITE_CONFIG.rating.reviewsCount} avis sur Google ({SITE_CONFIG.rating.score} ★)</span>
            <span className={styles['testimonials-section__arrow']}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
