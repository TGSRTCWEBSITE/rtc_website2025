import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type AboutLandingHeroType = {
  heroTitle?:string;
  heroSubTitle?:string;
  heroWebImage?:any;
  heroMobileImage?:any;
  className?: string;
};

const AboutLandingHero: NextPage<AboutLandingHeroType> = ({ heroTitle,heroSubTitle,heroWebImage,heroMobileImage, className = "" }) => {
  return (
    <section className={[styles.AboutLandingHero,className].join(" ")}>
      <img 
        className={styles.AboutLandingHeroWebImage} 
        loading="lazy"
        alt="contract-rates-banner" 
        src={UPLOADS_BASE_URL + heroWebImage?.data?.attributes?.url} />
      <img 
        className={styles.AboutLandingHeroMobileImage} 
        loading="lazy"
        alt="contract-rates-banner" 
        src={UPLOADS_BASE_URL + heroMobileImage?.data?.attributes?.url}  />
      <div className={styles.contentWrapper}>
        <h1 className={styles.AboutLandingHeroTitle}>{heroTitle}</h1>
        <p className={styles.AboutLandingHeroSubTitle}>{heroSubTitle}</p>
      </div>
    </section>
  );
};

export default AboutLandingHero;