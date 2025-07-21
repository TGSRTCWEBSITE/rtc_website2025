import React from 'react'
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from '../../services/service';
interface HeroData {
    heroBackgroundImageWeb: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
    heroBackgroundImageMobile: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
    heroTitle: string;
    heroSubtitle: string;
}

interface AboutInitiativeHeroProps {
    data: HeroData;
}

const AboutInitiativeHero: React.FC<AboutInitiativeHeroProps> = ({ data }) => {
  return (
    <section className={styles.heroSection}>
    <img className={styles.heroBackgroundImageWeb} alt="hero background image website" src={UPLOADS_BASE_URL + data?.heroBackgroundImageWeb?.data?.attributes?.url} loading='lazy' />
    <img className={styles.heroBackgroundImageMobile} alt="hero background image mobile" src={UPLOADS_BASE_URL + data?.heroBackgroundImageMobile?.data?.attributes?.url} loading='lazy' />
    <div className={styles.heroSectionContent}>
      <div className={styles.heroTitle}>{data?.heroTitle}</div>
      <div className={styles.heroSubtitle}>{data?.heroSubtitle}</div>
    </div>
  </section>
  )
}
export default AboutInitiativeHero
