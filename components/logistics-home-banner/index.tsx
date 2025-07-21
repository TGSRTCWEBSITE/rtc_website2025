import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type FrameComponent7Type = {
  heroTitle?:string;
  heroSubTitle?:string;
  heroSectionLogo?:any;
  heroImageMobile?:any;
  heroImageWeb?:any;
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ heroTitle,heroSubTitle,heroSectionLogo,heroImageMobile,heroImageWeb,className = "" }) => {
  return (
    <section className={[styles.logisticsHeroWrapper, className].join(" ")}>
          <img 
            className={styles.bgIcon} 
            loading="lazy"
            alt="logo" 
            src={`${UPLOADS_BASE_URL}${heroImageWeb?.data?.attributes.url}`} />
            <img 
            className={styles.bgIconMobile} 
            loading="lazy"
            alt="logo" 
            src={`${UPLOADS_BASE_URL}${heroImageMobile?.data?.attributes.url}`} />
        <div className={styles.heroSubtitleContainer}>
          <img
              className={styles.logoIcon}
              loading="lazy"
              alt="TGSRTC Logistics"
              src={`${UPLOADS_BASE_URL}${heroSectionLogo?.data?.attributes.url}`}
            />
          <h1 className={styles.tgsrtcLogistics}>{heroTitle}</h1>
          <h2 className={styles.deliversExcellenceEvery}>
            {heroSubTitle}
          </h2>
        </div>
    </section>
  );
};

export default FrameComponent7;
