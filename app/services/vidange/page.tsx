import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/organisms/Header/Header';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Button } from '@/components/atoms/Button/Button';
import type { Metadata } from 'next';
import styles from '@/app/services/debouchage/service.module.scss';

export const metadata: Metadata = {
  title: 'Vidange Fosse Septique Hérault (34) — Agréé SPANC | Burnens',
  description: 'Vidange, pompage et curage de fosse septique et fosse toutes eaux dans l\'Hérault. Agrément préfectoral, bordereau BSD fourni. Devis 100% gratuit.',
  keywords: 'vidange fosse septique Montpellier, pompage fosse toutes eaux Hérault, curage fosse Cournonsec, vidange agréée SPANC 34',
};

export default function VidangePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles['service-hero']}>
          <div className={styles['service-hero__container']}>
            <div className={styles['service-hero__text']}>
              <h1>Vidange de fosse septique dans l&apos;Hérault (34)</h1>
              <p>
                Entretien, curage et vidange réglementaire de fosses septiques, fosses toutes eaux 
                et micro-stations d&apos;épuration. Intervention rapide dans tout le département 
                avec camion hydrocureur et délivrance du bordereau de suivi des déchets (BSD).
              </p>
              <div className={styles['service-hero__actions']}>
                <Button href="/contact" variant="primary">Demander un devis gratuit</Button>
                <Button href="tel:+33665145576" variant="outline">Urgence : 06 65 14 55 76</Button>
              </div>
            </div>
            <div className={styles['service-hero__image']}>
              <Image 
                src="/images/fosse.webp" 
                alt="Camion de pompage et vidange de fosse septique Burnens Assainissement dans l'Hérault" 
                width={560} 
                height={380} 
                sizes="(max-width: 900px) 100vw, 560px"
                quality={75}
                priority 
              />
            </div>
          </div>
        </section>

        <section className={styles['service-content']}>
          <div className={styles['service-content__container']}>
            <article>
              <h2>Nos prestations pour votre assainissement non collectif</h2>
              <ul>
                <li><strong>Vidange complète & curage :</strong> pompage des boues, nettoyage haute pression des parois et des canalisations attenantes.</li>
                <li><strong>Remise en eau immédiate :</strong> réensemencement bactériologique pour préserver la structure de la cuve et relancer l&apos;activité biologique.</li>
                <li><strong>Nettoyage du préfiltre :</strong> décolmatage des pouzzolanes ou filtres intégrés pour éviter les engorgements futurs.</li>
                <li><strong>Bordereau officiel BSD :</strong> attestation de vidange délivrée pour attester de la conformité auprès du SPANC.</li>
                <li><strong>Diagnostic & rénovation :</strong> raccordement tout-à-l&apos;égout, remplacement de bac ou pose de drainages.</li>
              </ul>

              <h2>Quelle est la réglementation pour la vidange de fosse ?</h2>
              <p>
                Selon la législation en vigueur et les préconisations du SPANC (Service Public d&apos;Assainissement Non Collectif), 
                une fosse septique doit être vidangée dès que les boues atteignent <strong>50% du volume utile</strong> (généralement tous les 3 à 4 ans). 
                La vidange doit impérativement être réalisée par une entreprise agréée assurant le traitement des boues en station d&apos;épuration homologuée.
              </p>

              <h2>Pourquoi faire appel à Burnens Assainissement ?</h2>
              <ul>
                <li><strong>Agrément et conformité :</strong> transport et traitement des matières de vidange certifiés.</li>
                <li><strong>Matériel performant :</strong> pompage grande capacité et hydrocurage combiné.</li>
                <li><strong>Tarifs transparents et compétitifs :</strong> devis clair sans mauvaise surprise.</li>
                <li><strong>Intervention rapide sur l&apos;Hérault :</strong> Cournonsec, Montpellier, Sète, Frontignan, Mèze, Pignan, Fabrègues...</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
