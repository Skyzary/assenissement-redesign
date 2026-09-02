'use client';

import React, { useActionState, useEffect, useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import { submitContactForm, ContactFormState } from '@/actions/contactAction';

const initialState: ContactFormState = { status: 'idle', message: '' };

const subjectOptions = [
  { value: 'devis', label: 'Demande de devis / tarifs' },
  { value: 'questions', label: 'Questions sur les produits et services' },
  { value: 'autre', label: 'Autre' },
];

export const ContactForm: React.FC = () => {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [selectedSubject, setSelectedSubject] = useState(subjectOptions[0].value);
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = subjectOptions.find((option) => option.value === selectedSubject)?.label ?? subjectOptions[0].label;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleResetModal = () => {
    setIsDismissed(true);
  };

  return (
    <section className={styles['contact-form']}>
      <div className={styles['contact-form__container']}>
        <header className={styles['contact-form__header']}>
          <h2>Demandez un devis gratuit</h2>
          <p>Vous pouvez compter sur le professionnalisme de notre équipe pour prendre en main votre projet d&apos;assainissement.</p>
        </header>

        {state.status === 'success' && !isDismissed ? (
          <div className={styles['contact-form__modal_overlay']} role="dialog" aria-modal="true" aria-labelledby="contact-success-title">
            <div className={styles['contact-form__modal']}>
              <div className={styles['contact-form__modal_icon']}>✓</div>
              <h3 id="contact-success-title">Merci !</h3>
              <p>{state.message}</p>
              <button
                type="button"
                className={styles['contact-form__modal_button']}
                onClick={handleResetModal}
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <form action={formAction} className={styles['contact-form__form']}>
            {state.status === 'error' && (
              <div className={styles['contact-form__error']}>
                <p>{state.message}</p>
              </div>
            )}

            <div className={styles['contact-form__group']}>
              <label htmlFor="subject">Type de demande</label>
              <div className={styles['contact-form__select']} ref={containerRef}>
                <input type="hidden" name="subject" value={selectedSubject} />
                <button
                  type="button"
                  id="subject"
                  className={styles['contact-form__select_trigger']}
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <span>{selectedLabel}</span>
                  <span className={styles['contact-form__select_arrow']} aria-hidden="true" />
                </button>

                {isOpen && (
                  <ul className={styles['contact-form__select_menu']} role="listbox" aria-label="Type de demande">
                    {subjectOptions.map((option) => (
                      <li key={option.value} className={styles['contact-form__select_item']}>
                        <button
                          type="button"
                          className={`${styles['contact-form__select_option']} ${selectedSubject === option.value ? styles['contact-form__select_option--selected'] : ''}`}
                          role="option"
                          aria-selected={selectedSubject === option.value}
                          onClick={() => {
                            setSelectedSubject(option.value);
                            setIsOpen(false);
                          }}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={styles['contact-form__group']}>
              <label htmlFor="message">Précisions</label>
              <textarea name="message" id="message" placeholder="Précisez votre demande..." rows={4} />
            </div>

            <div className={styles['contact-form__row']}>
              <div className={styles['contact-form__group']}>
                <label htmlFor="name">Nom complet *</label>
                <input type="text" name="name" id="name" placeholder="Votre nom complet" required />
              </div>

              <div className={styles['contact-form__group']}>
                <label htmlFor="phone">Téléphone *</label>
                <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone" required />
              </div>
            </div>

            <div className={styles['contact-form__group']}>
              <label htmlFor="email">E-mail *</label>
              <input type="email" name="email" id="email" placeholder="Votre adresse e-mail" required />
            </div>

            <div className={styles['contact-form__checkbox']}>
              <input type="checkbox" name="rgpd" id="rgpd" required />
              <label htmlFor="rgpd">
                En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées dans le cadre strict de ma demande.
              </label>
            </div>

            <div className={styles['contact-form__actions']}>
              <button
                type="submit"
                className={`${styles['contact-form__submit_btn']} ${isPending ? styles['contact-form__submit_btn--pending'] : ''}`}
                disabled={isPending}
              >
                <span>{isPending ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
