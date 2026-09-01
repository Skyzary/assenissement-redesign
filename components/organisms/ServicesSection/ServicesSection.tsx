'use client';

import React from 'react';
import styles from './ServicesSection.module.scss';
import { ServiceCard } from '../../molecules/ServiceCard/ServiceCard';
import { motion } from 'framer-motion';

const Icons = {
  debouchage: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  vidange: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  ),
  pompage: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  camera: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  fuite: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  ),
  terrassement: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
    </svg>
  ),
};

const services = [
  {
    id: 'debouchage',
    icon: Icons.debouchage,
    title: 'Débouchage de canalisations',
    tagline: 'Intervention d\'urgence 24/7',
    description: 'Débouchage haute pression pour WC, éviers, baignoires et canalisations principales. Matériel professionnel spécialisé.',
    href: '/services/debouchage',
  },
  {
    id: 'vidange',
    icon: Icons.vidange,
    title: 'Vidange de fosse septique',
    tagline: 'Nettoyage & curage complet',
    description: 'Pompage et vidange réglementée de fosses septiques et toutes eaux. Remise de bordereau de suivi des déchets.',
    href: '/services/vidange',
  },
  {
    id: 'pompage',
    icon: Icons.pompage,
    title: 'Pompage bac à graisses',
    tagline: 'Particuliers & Restauration',
    description: 'Entretien et curage périodique des bacs à graisses pour préserver vos évacuations et respecter la réglementation.',
    href: '/services/pompage',
  },
  {
    id: 'camera',
    icon: Icons.camera,
    title: 'Caméra canalisation',
    tagline: 'Diagnostic vidéo HD',
    description: 'Inspection vidéo endoscopique de précision pour localiser casse, effondrement, bouchon ou infiltration.',
    href: '/services/camera',
  },
  {
    id: 'fuite',
    icon: Icons.fuite,
    title: 'Recherche de fuites',
    tagline: 'Sans destruction',
    description: 'Détection et géolocalisation des fuites enterrées ou encastrées grâce à l\'acoustique et l\'inspection vidéo.',
    href: '/services/fuite',
  },
  {
    id: 'terrassement',
    icon: Icons.terrassement,
    title: 'Terrassement & VRD',
    tagline: 'Raccordement & Drainage',
    description: 'Travaux de terrassement, création de tranchées, pose de drains et raccordement complet au tout-à-l\'égout.',
    href: '/services/terrassement',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className={styles['services-section']}>
      <div className={styles['services-section__container']}>
        <motion.header 
          className={styles['services-section__header']}
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className={styles['services-section__badge']}>Nos domaines d&apos;expertise</span>
          <h2>Prestations d&apos;assainissement sur-mesure</h2>
          <p>
            Solutions techniques de pointe pour particuliers, professionnels et collectivités dans tout l&apos;Hérault.
          </p>
        </motion.header>

        <div className={styles['services-section__grid']}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 0.85, 
                ease: [0.25, 0.1, 0.25, 1], 
                delay: index * 0.1 
              }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
