"use client";
import { useEffect, useState } from "react";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";
import BusPassOptions from "../../components/bus-pass-options";
import BusPassOtherBusPasses from "../../components/bus-pass-other-bus-passes";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import styles from "./index.module.css";

export async function getStaticProps() {
  const data = await doFetch("/buss-pass-landing-pages?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Bus Pass Services",
    },
  };
}

const BusPassServices = ({ data }) => {
  const [width, setWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.busPassServices}>
      <section className={styles.busPassHeroBusPassService}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={`${UPLOADS_BASE_URL}${data?.heroSection[0]?.webImage}`}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src={`${UPLOADS_BASE_URL}${data?.heroSection[0]?.mobileImage}`}
            loading="lazy"
          />
        )}
        <div className={styles.busPassContent}>
          <h1 className={styles.busPassServices1}>
            {data?.heroSection[0]?.title}
          </h1>
          <h2 className={styles.applyRenew}>
            {data?.heroSection[0]?.subTitle}
          </h2>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      <BusPassOptions
        options={data?.bussPassOptions}
        title={data?.busPassOptionsTitle}
      />
      <BusPassOtherBusPasses
        options={data?.otherBusPasses}
        title={data?.otherBusPassOptionsTitle}
      />
    </div>
  );
};

export default BusPassServices;
