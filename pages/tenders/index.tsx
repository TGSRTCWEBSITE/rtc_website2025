import styles from "./index.module.css";
import TendersComponent from "../../components/tenders-component";
import { useEffect } from "react";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/tenders?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Tenders",
    },
  };
};

const Tenders = ({data}) => {
  
  const heroSection = data?.heroSection[0];
  return (
    <section className={styles.reservationHeroTourism}>
      <img
        className={styles.bgIcon}
        loading="lazy"
        alt="contract-rates-banner"
        src={UPLOADS_BASE_URL + heroSection?.heroSectionWebImage}
      />
      <img
        className={styles.bgIconMobile}
        loading="lazy"
        alt="contract-rates-banner"
        src={UPLOADS_BASE_URL + heroSection?.heroSectionMobileImage}
      />
      <div className={styles.contentWrapper}>
        <h1 className={styles.tourism}>{heroSection?.heroSectionHeading}</h1>
        <p className={styles.tgsrtcIsHappy}>
          {heroSection?.heroSectionSubHeading}
        </p>
      </div>
      <AnimationBus/>
      <AnimationBusMobile/>
      <TendersComponent TotalData={data} />
    </section>
  );
};

export default Tenders;
