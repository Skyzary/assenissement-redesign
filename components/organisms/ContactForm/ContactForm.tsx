'use client';

import React, { useActionState } from 'react';
import styles from './ContactForm.module.scss';
import { submitContactForm, ContactFormState } from '@/actions/contactAction';

const initialState: ContactFormState = { status: 'idle', message: '' };

export const ContactForm: React.FC = () => {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <section className={styles['contact-form']}>
      <div className={styles['contact-form__container']}>
        <header className={styles['contact-form__header']}>
          <h2>Demandez un devis gratuit</h2>
          <p>Vous pouvez compter sur le professionnalisme de notre équipe pour prendre en main votre projet d&apos;assainissement.</p>
        </header>

        {state.status === 'success' ? (
          <div className={styles['contact-form__success']}>
            <p>{state.message}</p>
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
              <select name="subject" id="subject">
                <option value="devis">Demande de devis / tarifs</option>
                <option value="questions">Questions sur les produits et services</option>
                <option value="autre">Autre</option>
              </select>
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
