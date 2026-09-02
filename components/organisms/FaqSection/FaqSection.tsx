'use client';

import React, { useState } from 'react';
import styles from './FaqSection.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Combien coûte une intervention de débouchage de canalisation ?',
    answer: 'Nos tarifs débutent à partir de 90 € TTC et dépendent de la nature du bouchon et du matériel nécessaire (pompe haute pression, camion hydrocureur, inspection vidéo). Le devis est 100% gratuit et validé avec vous avant le début des travaux.',
  },
  {
    question: 'En combien de temps pouvez-vous intervenir en cas d\'urgence ?',
    answer: 'Pour toute urgence (débordement, WC inutilisable, inondation), nous intervenons en 30 à 45 minutes, 7j/7 et 24h/24 dans tout le département de l\'Hérault (Montpellier, Sète, Frontignan, Cournonsec et leurs environs).',
  },
  {
    question: 'Quelle est la fréquence conseillée pour vidanger sa fosse septique ?',
    answer: 'Il est recommandé de vidanger une fosse septique tous les 3 à 4 ans selon le volume et le nombre d\'occupants. Nous délivrons un bordereau officiel de suivi des déchets (BSD) indispensable pour les contrôles du SPANC.',
  },
  {
    question: 'Proposez-vous une garantie sur vos interventions ?',
    answer: 'Oui, nous appliquons une garantie de 3 mois sur nos prestations de débouchage et de curage d\'assainissement pour vous assurer une tranquillité d\'esprit totale.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__container}>
        <motion.header 
          className={styles.faq__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.faq__badge}>Questions fréquentes</span>
          <h2>Tout savoir sur nos interventions</h2>
          <p>Retrouvez les réponses aux questions les plus posées par nos clients.</p>
        </motion.header>

        <div className={styles.faq__list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`${styles.faq__item} ${isOpen ? styles['faq__item--open'] : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <button
                  className={styles.faq__question}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`${styles.faq__icon} ${isOpen ? styles['faq__icon--open'] : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className={styles.faq__answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
