import { useState } from "react";
import AccordionItem from "../accordians";
import styles from "./index.module.css";

interface timingsData {
  timingsRGIAData: any;
}
const TimingsTab: React.FC<timingsData> = ({ timingsRGIAData }) => {
  const [expandedIndices, setExpandedIndices] = useState<(number | null)[]>(
    Array(timingsRGIAData.length).fill(null)
  );

  const handleChange = (cardIndex: number, timingIndex: number) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.map((expandedIndex, idx) =>{
        let newExpandedIndex;
        if (idx === cardIndex) {
          newExpandedIndex = expandedIndex === timingIndex ? null : timingIndex;
        } else {
          newExpandedIndex = expandedIndex;
        }
        return newExpandedIndex;
    })
    );
  };

  return (
    <div className={styles.container}>
      {timingsRGIAData.map((card: any, cardIndex: number) => (
        <div key={cardIndex} className={styles.card}>
          <div className={styles.routesContainer}>
            {card.routes.map((route: any, index: number) => (
              <div className={styles.valuesContainer} key={index}>
                {route.value && <p className={styles.name}>{route.name}</p>}
                {route.value && <p className={styles.value}>{route.value}</p>}
              </div>
            ))}
          </div>
          <div className={styles.eachAccordian}>
            <ol className={styles.studentConcessionalRoutePas}>
              {card.timings.map((timing: any, timingIndex: number) => (
                <AccordionItem
                  key={timingIndex}
                  name={timing.name}
                  info={timing.info}
                  containerClassName={styles.accordianTabStyles}
                  expanded={expandedIndices[cardIndex] === timingIndex}
                  onChange={() => handleChange(cardIndex, timingIndex)}
                />
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimingsTab;
