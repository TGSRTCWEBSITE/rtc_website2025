import type { NextPage } from "next";
import styles from "./HomeHero.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type HomeHeroType = {
  className?: string;
title?:string;
image?:string;
mobileImage?:string;
};

const HomeHero: NextPage<HomeHeroType> = ({ className = "",title,image,mobileImage}) => {
  return (
    <section className={[styles.homeHero, className].join(" ")}>
      {/* condition to get background image if there is title */}
      {title && (
        <div className={styles.titleSection}>
          <h1 className={styles.tgsrtcServing}>{title}</h1>
        </div>
      )}
      <div className={styles.bgImageSection}>
      <img
          className={styles.bgImage}
          loading="lazy"
          alt="background image"
          src={`${UPLOADS_BASE_URL}${image}`}
        /></div>
        <div className={styles.bgImageSectionMobile}>
      <img
          className={styles.bgImageMobile}
          loading="lazy"
          alt="background image"
          src={`${UPLOADS_BASE_URL}${mobileImage}`}
        /></div>
    </section>
  );
};

export default HomeHero;
