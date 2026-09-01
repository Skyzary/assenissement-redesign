'use client';

import React from 'react';
import styles from './TestimonialsSection.module.scss';
import { TestimonialCard } from '@/components/molecules/TestimonialCard/TestimonialCard';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Il est intervenu très rapidement. Même qu\'il soit tard. Travail très bien effectué. Quand il est reparti, les lieux étaient propres. Vous pouvez l\'appeler les yeux fermés.',
    author: 'Patus Sport Auto',
  },
  {
    quote: 'Efficaces, sympathiques, très professionnels. Nous avons eu beaucoup de chance car l\'intervention sur notre fosse septique n\'était pas aisée ! Je recommande chaudement !',
    author: 'Alexandra Pires',
  },
  {
    quote: 'Réactif et très efficace, un professionnel au service du client. Je recommande sans hésitation !',
    author: 'Arnal Stéphanie',
  },
  {
    quote: 'J\'avais un très bon souvenir de la personne intervenue en 2010. 12 ans après, j\'ai retrouvé les mêmes qualités : rapidité, qualité, rapport qualité/prix correct et compétences.',
    author: 'Martine Bentivegna',
  },
  {
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
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} author={t.author} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
