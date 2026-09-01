import React from 'react';
import styles from './ServiceCard.module.scss';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  tagline?: string;
  description: string;
  href: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, tagline, description, href }) => {
  return (
    <article className={styles['service-card']}>
      <div className={styles['service-card__top']}>
        <div className={styles['service-card__icon']}>{icon}</div>
        {tagline && <span className={styles['service-card__tagline']}>{tagline}</span>}
      </div>
      
      <h3 className={styles['service-card__title']}>{title}</h3>
      <p className={styles['service-card__desc']}>{description}</p>
      
      <div className={styles['service-card__footer']}>
        <Link 
          href={href} 
          className={styles['service-card__link']}
          aria-label={`En savoir plus sur le service : ${title}`}
        >
          <span>En savoir plus sur {title.toLowerCase()}</span>
          <svg className={styles['service-card__arrow']} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
};
