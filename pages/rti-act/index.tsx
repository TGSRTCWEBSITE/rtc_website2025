import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import { useState } from "react";
import AccordionItem from "../../components/accordians";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/rti-acts?populate=*");

  return {
    props: {
      data,
      title: data?.rtiActTitle ? `${data.rtiActTitle} ` : "RTI Act",
    },
  };
};

const RTIACT: NextPageRTIACTType = ({data}) => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.rtiAct}>
        <main className={styles.rtiActContainer}>
          <h1 className={styles.rightToInformation}>{data?.rtiActTitle}</h1>
          <div className={styles.rtiActContent}>
            <ol className={styles.rtiList}>
              {data?.rtiActData?.map((item: any, index: number) => (
                <AccordionItem
                  key={index}
                  name={item.name}
                  info={item.info}
                  headingStyles={styles.ritQuestion}
                  expanded={expandedIndex === index}
                  onChange={() => handleChange(index)}
                />
              ))}
            </ol>
          </div>
        </main>
      </div>
    </>
  );
};

export default RTIACT;
