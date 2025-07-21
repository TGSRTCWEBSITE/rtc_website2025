import ReservationBusesTabs from "../../components/reservation-spl-buses-tabs";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import styles from "./index.module.css";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/reservation-special-bus-timings?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Special Bus Timing",
    },
  };
};

const ReservationSpecialBusTiming = ({data}) => {

  return (
    <div className={styles.reservationSpecialBusTiming}>
      <section className={styles.reservationHeroTourism}>
        <img
          className={styles.bgIcon}
          loading="lazy"
          alt="contract-rates-banner"
          src={UPLOADS_BASE_URL + data?.heroSectionBanner[0].heroSectionWebImage}
        />
        <img
          className={styles.bgIconMobile}
          loading="lazy"
          alt="contract-rates-banner"
          src={UPLOADS_BASE_URL + data?.heroSectionBanner[0].heroSectionMobileImage}
        />
        <div className={styles.contentWrapper}>
          <h1 className={styles.tourism}>{data?.heroSectionBanner[0].heroSectionHeading}</h1>
          <p className={styles.tgsrtcIsHappy}>{data?.heroSectionBanner[0].heroSectionSubHeading}</p>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.container}>
        <div className={styles.timingsContainer}>
        <p className={styles.headingText}>{data?.tabsHeading}</p>
        <ReservationBusesTabs data={data} />
      </div>
      </div>
    </div>
  );
};

export default ReservationSpecialBusTiming;
