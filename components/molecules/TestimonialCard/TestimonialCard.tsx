import React from 'react';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <article className={styles['testimonial-card']}>
      <div className={styles['testimonial-card__stars']}>★★★★★</div>
      <blockquote className={styles['testimonial-card__quote']}>
        <p>{quote}</p>
      </blockquote>
      <footer className={styles['testimonial-card__author']}>
        <span>{author}</span>
      </footer>
    </article>
  );
};
