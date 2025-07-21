import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type MainHeaderType = {
  className?: string;
  data?: {
    heroImageWeb?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    heroImageMobile?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    heroTitle?: string;
    heroSubTitle?: string;
  };
};


const MainHeader: NextPage<MainHeaderType> = ({ data, className = "" }) => {
  return (   
    <div className={[styles.mainContainer, className].join(" ")}>
      <img
        className={styles.reservationBusDetailsHero}
        loading="lazy"
        alt="Bus Details"
        src={`${UPLOADS_BASE_URL}${data?.heroImageWeb?.data.attributes.url}`}
      />
       <img
        className={styles.reservationBusDetailsHeroMobile}
        loading="lazy"
        alt="Bus Details"
        src={`${UPLOADS_BASE_URL}${data?.heroImageMobile?.data.attributes.url}`}
      />
      <div className={styles.reservationBusDetailsHeroContent}>
        <h1 className={styles.reservationBusDetailsHeroHeading}>{data?.heroTitle}</h1>
        <p className={styles.reservationBusDetailsHeroPara}>{data?.heroSubTitle}</p>
      </div>
    </div>
  );
};

export default MainHeader;
