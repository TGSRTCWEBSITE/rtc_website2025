import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/other-passess?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Other Passes",
    },
  };
}

const OtherPasses = ({ data }) => {
  const router = useRouter();
  let { index } = router.query as any;
  index = parseInt(index as string, 10);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isImageLoaded, setImageLoad] = useState(false);
  const divRefs = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    if (index !== null && divRefs.current[index]) {
      divRefs.current[index].scrollIntoView({
        behavior: "smooth",
      });
      setExpandedIndex(index);
    }
  }, [index, isImageLoaded]);

  const handleChange = (idx: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  const handleImageLoad = () => {
    setImageLoad(true);
  };

  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
        <img
          className={styles.bgIcon}
          alt="hero-web-image"
          src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <img
          className={styles.bgIconMobile}
          alt="hero-web-image"
          src={UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url}
          loading="lazy"
          onLoad={handleImageLoad}
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
            <h2 className={styles.knowMoreAboutContainer}>
              {data?.knowMoreTitle}
            </h2>
          </div>
          <div className={styles.eachAccordian}>
            <ol className={styles.orderedList}>
              {data?.otherBussPassAccordiansData?.map((e: any, idx: number) => (
                <div
                  key={idx}
                  ref={(element) => (divRefs.current[idx] = element as any)}
                >
                  <AccordionItem
                    name={e.name}
                    info={e.info}
                    expanded={expandedIndex === idx}
                    onChange={() => handleChange(idx)}
                  />
                </div>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherPasses;