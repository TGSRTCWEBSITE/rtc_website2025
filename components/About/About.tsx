import React from "react";
import styles from "./About.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type AboutProps = {
  data?: {
    title?: string;
    paragraph?: string;
    logoUrl?: string;
    desktopImageUrl?: string;
    mobileImageUrl?: string;
  };
};

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className={styles.homeAboutTsrtc}>
      <div className={styles.contentSection}>
        <div className={styles.logo}>
          <img
            className={styles.tsrtcLogoIcon1}
            alt="TSRCT Logo"
            src={`${UPLOADS_BASE_URL}${data?.logoUrl}` }
            loading="lazy"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.aboutTgsrtc}>{data?.title }</div>
          <div className={styles.sinceItsInception}>
            {data?.paragraph }
          </div>
        </div>
      </div>
      <div className={styles.wrapperAboutTsrtcImage}>
          <img
            className={styles.aboutTsrtcImage}
            alt="about tgsrtc"
            src={`${UPLOADS_BASE_URL}${data?.desktopImageUrl}`}
            loading="lazy"
          />
          <img
            className={styles.aboutTsrtcImageMobile}
            alt="about tgsrtc"
            src={`${UPLOADS_BASE_URL}${data?.mobileImageUrl}`}
            loading="lazy"
          />
      </div>
    </section>
  );
};

export default About;