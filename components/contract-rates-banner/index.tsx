import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type ReservationHeroTourismType = {
  heroTitle?:string;
  heroSubTitle?:string;
  heroWebImage?:any;
  heroMobileImage?:any;
  className?: string;
};

const ReservationHeroTourism: NextPage<ReservationHeroTourismType> = ({ heroTitle,heroSubTitle,heroWebImage,heroMobileImage, className = "" }) => {
  return (
    <section className={[styles.reservationHeroTourism,className].join(" ")}>
      <img 
        className={styles.bgIcon} 
        loading="lazy"
        alt="contract-rates-banner" 
        src={UPLOADS_BASE_URL + heroWebImage?.data?.attributes?.url} />
      <img 
        className={styles.bgIconMobile} 
        loading="lazy"
        alt="contract-rates-banner" 
        src={UPLOADS_BASE_URL + heroMobileImage?.data?.attributes?.url}  />
      <div className={styles.contentWrapper}>
        <h1 className={styles.tourism}>{heroTitle}</h1>
        <p className={styles.tgsrtcIsHappy}>{heroSubTitle}</p>
      </div>
    </section>
  );
};

export default ReservationHeroTourism;