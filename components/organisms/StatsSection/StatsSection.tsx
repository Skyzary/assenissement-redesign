'use client';

import React, { useEffect, useState } from 'react';
import styles from './StatsSection.module.scss';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

const StatCounter: React.FC<StatItemProps> = ({ value, suffix = '', label, sublabel }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = value / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <div className={styles.stat__number}>
        {count}{suffix}
      </div>
      <div className={styles.stat__label}>{label}</div>
      <div className={styles.stat__sublabel}>{sublabel}</div>
    </motion.div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__container}>
        <StatCounter value={15} suffix="+" label="Ans d'expérience" sublabel="Savoir-faire garanti depuis 2009" />
        <StatCounter value={24} suffix="/7" label="Disponibilité urgences" sublabel="Sur place en 30 à 45 minutes" />
        <StatCounter value={50} suffix=" km" label="Zone d'intervention" sublabel="Autour de Cournonsec & Montpellier" />
        <StatCounter value={100} suffix="%" label="Devis gratuit" sublabel="Transparence tarifaire garantie" />
      </div>
    </section>
  );
};
