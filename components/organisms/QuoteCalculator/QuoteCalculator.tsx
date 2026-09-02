'use client';

import React, { useState } from 'react';
import styles from './QuoteCalculator.module.scss';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button/Button';

import { CalendarIcon, AlertIcon, ShieldCheckIcon, ClockIcon, BadgeCheckIcon } from '@/components/atoms/icons';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
}

const serviceOptions: ServiceOption[] = [
  { id: 'debouchage', name: 'Débouchage canalisation / WC / Évier', basePrice: 90 },
  { id: 'vidange', name: 'Vidange fosse septique / toutes eaux', basePrice: 180 },
  { id: 'pompage', name: 'Pompage bac à graisses', basePrice: 150 },
  { id: 'camera', name: 'Inspection vidéo par caméra HD', basePrice: 120 },
  { id: 'fuite', name: 'Recherche de fuite non destructive', basePrice: 140 },
];

export const QuoteCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('debouchage');
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');

  const currentService = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];
  const estimatedPrice = urgency === 'urgent' ? Math.round(currentService.basePrice * 1.3) : currentService.basePrice;

  return (
    <section className={styles.calculator}>
      <div className={styles.calculator__container}>
        <motion.header 
          className={styles.calculator__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.calculator__badge}>Calculateur d&apos;estimation</span>
          <h2>Estimez le coût de votre intervention en 2 clics</h2>
          <p>Choisissez le service souhaité pour obtenir une estimation indicative immédiate sans engagement.</p>
        </motion.header>

        <motion.div 
          className={styles.calculator__card}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className={styles.calculator__step}>
            <label className={styles.calculator__label}>1. Sélectionnez votre besoin :</label>
            <div className={styles.calculator__options}>
              {serviceOptions.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className={`${styles.calculator__option} ${selectedService === service.id ? styles['calculator__option--active'] : ''}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.calculator__step}>
            <label className={styles.calculator__label}>2. Niveau d&apos;urgence :</label>
            <div className={styles.calculator__urgency}>
              <button
                type="button"
                className={`${styles.calculator__urgency_btn} ${urgency === 'normal' ? styles['calculator__urgency_btn--active'] : ''}`}
                onClick={() => setUrgency('normal')}
              >
                <CalendarIcon size={18} />
                <span>Rendez-vous standard (Intervention 24h)</span>
              </button>
              <button
                type="button"
                className={`${styles.calculator__urgency_btn} ${urgency === 'urgent' ? styles['calculator__urgency_btn--active'] : ''}`}
                onClick={() => setUrgency('urgent')}
              >
                <AlertIcon size={18} />
                <span>Urgence immédiate (Intervention 7j/7 - 24h/24)</span>
              </button>
            </div>
          </div>

          <div className={styles.calculator__result}>
            <div className={styles.calculator__result_text}>
              <div className={styles.calculator__price_row}>
                <span className={styles.calculator__price}>À partir de {estimatedPrice} € TTC</span>
                {urgency === 'urgent' && (
                  <span className={styles.calculator__urgency_tag}>
                    ⚡ Majoration urgence 24/7 incluse (+30%)
                  </span>
                )}
              </div>
              <span className={styles.calculator__note}>Devis final gratuit confirmé sur place par notre technicien</span>
            </div>
            <Button href="/contact" variant="primary">
              Valider mon devis gratuit →
            </Button>
          </div>

          <div className={styles.calculator__guarantees}>
            <div className={styles.calculator__guarantee_item}>
              <ShieldCheckIcon size={18} />
              <span>Prix 100% transparent & sans surprise</span>
            </div>
            <div className={styles.calculator__guarantee_item}>
              <ClockIcon size={18} />
              <span>Arrivée sur site en 30 à 45 min</span>
            </div>
            <div className={styles.calculator__guarantee_item}>
              <BadgeCheckIcon size={18} />
              <span>Agréé assurances & matériel haute pression</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
