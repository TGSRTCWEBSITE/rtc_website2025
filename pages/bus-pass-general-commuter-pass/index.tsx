import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {

  const data = await doFetch("/bus-pass-general-commuter-passes?populate=*");

  console.log(data)

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : " Bus Pass General Commuter Pass",
    },
  };
}

const BusPassGeneralCommuterPass = ({data}) => {


  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
        <img
          className={styles.bgIcon}
          alt="hero-web-image"
          src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
          loading="lazy"
        />
        <img
          className={styles.bgIconMobile}
          alt="hero-mobile-image"
          src={UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url}
          loading="lazy"
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>{data?.heroTitle}</p>
          <p className={styles.applyRenew}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      <section className={styles.busPassGeneralCommuterPass2}>
        <div className={styles.tableContainer}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            {data?.knowMoreTitle}
          </h2>
        </div>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {data?.generalComputerPassAccordiansData?.map((e: any, index: number) => (
              <AccordionItem
                key={index}
                name={e.name}
                info={e.info}
                expanded={expandedIndex === index}
                onChange={() => handleChange(index)}
              />
            ))}
          </ol>
        </div>
        </div>
      </section>
    </div>
  );
};

export default BusPassGeneralCommuterPass;
