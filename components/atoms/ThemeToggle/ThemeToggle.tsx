'use client';

import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

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
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
