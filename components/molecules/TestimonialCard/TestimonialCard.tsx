import React from 'react';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const StarIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="#f59e0b" 
    stroke="#f59e0b" 
    strokeWidth="1"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <article className={styles['testimonial-card']}>
      <div className={styles['testimonial-card__stars']}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <blockquote className={styles['testimonial-card__quote']}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <footer className={styles['testimonial-card__author']}>
        <cite>{author}</cite>
      </footer>
    </article>
  );
};
