import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";
import AccordionItem from "../../components/accordians";

export async function getStaticProps() {
  const data = await doFetch("/logistic-contacts?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Logistic Contacts",
    },
  };
};

type LogisticContactsType = {
  className?: string;
};

const LogisticContacts: NextPage<LogisticContactsType> = ({
  className = "",
  data
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
    <div className={styles.contactUs}>
      <section className={styles.logisticContactsHero}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconMobile}
            alt="mobile-image"
            src={
              UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url
            }
            loading="lazy"
          />
        )}
        <div className={styles.logisticsContentWrapper}>
          <h1 className={styles.heroTitleStyles}>{data?.heroTitle}</h1>
          <p className={styles.heroSubTitleStyles}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      {/* Removed CoustomTable and Implemented Accordion item  */}
      <section className={styles.otherServices}>
        <div className={styles.otherServiceTitle}>
          {data?.logisticsContactsTitle}
        </div>
        <ol className={styles.accordion}>
          {data?.logisticsContactsTableData.map((e: any, index: any) => (
            // Implemnation of AccordionItem component
            <AccordionItem
              key={index}
              extraDropdownClassName={styles.extraDropdown}
              name={e.name}
              info={e.info}
              expanded={expandedIndex === index}
              onChange={() => handleChange(index)}
              containerClassName={styles.containerClassName}
            />
          ))}
        </ol>
      </section>
    </div>
  );
};

export default LogisticContacts;
