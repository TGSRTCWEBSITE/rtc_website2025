import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {

  const data = await doFetch("/bus-passes-faqs?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Bus Passes FAQ's",
    },
  };
}

const BusPassesFaq = ({ data }) => {
  const [expandedIndex1, setExpandedIndex1] = useState<number | null>(null);
  const [expandedIndex2, setExpandedIndex2] = useState<number | null>(null);

  const handleChange1 = (index: number) => {
    setExpandedIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleChange2 = (index: number) => {
    setExpandedIndex2((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
        <img
          className={styles.bgIcon}
          alt="banner-web-image"
          loading="lazy"
          src={UPLOADS_BASE_URL + data?.heroSection[0].heroSectionWebImage}
        />
        <img
          className={styles.bgIconMobile}
          alt="banner-mobile-image"
          loading="lazy"
          src={UPLOADS_BASE_URL + data?.heroSection[0].heroSectionMobileImage}
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>
            {data?.heroSection[0].heroSectionHeading}
          </p>
          <p className={styles.applyRenew}>
            {data?.heroSection[0].heroSectionSubHeading}
          </p>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      <section className={styles.busPassGeneralCommuterPass2}>
        <div className={styles.tableContainer}>
          <h2 className={styles.knowMoreAboutContainer}>{data?.faqsHeading}</h2>
          <div className={styles.eachAccordian}>
            <p className={styles.typesOfPassesText} id="types-of-passes">{data?.typesOfPasses}</p>
            <ol className={styles.orderedList}>
              {data?.busPassesFaqData.map((e: any, index: number) => (
                <AccordionItem
                  key={index}
                  name={e.name}
                  info={e.info}
                  expanded={expandedIndex1 === index}
                  onChange={() => handleChange1(index)}
                />
              ))}
            </ol>
          </div>
          <div className={styles.eachAccordian}>
            <p className={styles.typesOfPassesText} id="concessional-passes">
              {data?.onConsessionalPassesHeading}
            </p>
            <ol className={styles.orderedList}>
              {data?.onConcessionalPasses.map((e: any, index: number) => (
                <AccordionItem
                  key={index}
                  name={e.name}
                  info={e.info}
                  expanded={expandedIndex2 === index}
                  onChange={() => handleChange2(index)}
                />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusPassesFaq;