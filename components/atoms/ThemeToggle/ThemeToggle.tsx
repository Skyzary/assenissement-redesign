'use client';

import React, { useState } from 'react';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        return savedTheme;
      }
    }
    return 'light';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle Dark/Light Mode"
      title={`Passer au mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12.8A9 9 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
};
