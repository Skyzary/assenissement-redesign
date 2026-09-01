'use client';

import { useEffect, useState } from 'react';
import styles from './BackToTop.module.scss';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.backToTop}
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      title="Retour en haut de page"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14M6 11l6-6 6 6" />
      </svg>
    </button>
  );
};
