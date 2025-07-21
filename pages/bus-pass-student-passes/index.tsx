import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {

  const data = await doFetch("/bus-pass-student-passess?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Bus Pass Student Passes",
    },
  };
}

const BusPassStudentPasses = ({data}) => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassStudentPasses}>
      <section className={styles.busPassesHeroStudentPasses}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src={UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url}
            loading="lazy"
          />
        )}
        <div className={styles.contentWrapper}>
          <h1 className={styles.studentPasses}>{data?.heroTitle}</h1>
          <h2 className={styles.applyRenew}>{data?.heroSubTitle}</h2>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      <section className={styles.busPassStudentPasses1}>
        <div className={styles.tableContainer}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            {data?.knowMoreTitle}
          </h2>
        </div>
        <div className={styles.eachAccordian}>
          <ol className={styles.studentConcessionalRoutePas}>
            {data?.studentFreeBusPasses?.map((e:any, index:number) => (
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

export default BusPassStudentPasses;
