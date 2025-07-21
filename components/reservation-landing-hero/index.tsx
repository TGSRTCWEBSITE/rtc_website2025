import { NextPage } from "next";
import { UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";

export type ReservationHeroType = {
    heroTitle?:string;
    heroSubTitle?:string;
    heroWebImage?:any;
    heroMobileImage?:any;
  };

const ReservationHero:NextPage<ReservationHeroType> = ({heroTitle,heroSubTitle,heroMobileImage,heroWebImage}) => {
  return (
    <section className={styles.reservationHeroLanding}>
      <img
        className={styles.maskGroupIcon}
        alt="bus mobile reservations image"
        src={UPLOADS_BASE_URL + heroWebImage?.data?.attributes?.url}
        loading="lazy"
      />
      <img
        className={styles.maskGroupIconMobile}
        alt="bus mobile image"
        src={UPLOADS_BASE_URL + heroMobileImage?.data?.attributes?.url}
        loading="lazy"
      />
      <div className={styles.tgsrtcOnlineBusContainer}>
        <h1 className={styles.tgsrtcOnlineBus}>{heroTitle}</h1>
        <p className={styles.bookYourTickets}>{heroSubTitle}</p>
      </div>
    </section>
  );
};

export default ReservationHero;