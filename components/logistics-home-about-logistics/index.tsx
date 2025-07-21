import type { NextPage } from "next";
import Cards4 from "../about-logistics-card";
import styles from "./index.module.css";

export type ContentRightType = {
  className?: string;
  data?: {
    aboutLogisticsTitle?: string;
    aboutLogisticsPara1?: string;
    aboutLogisticsPara2Start?: string;
    aboutLogisticsPara2Link?: string;
    aboutLogisticsPara2End?: string;
    aboutLogisticsCards?: Array<{
      image?: string;
      busPasses?: string;
      content?:string;
    }>;
  };
};

const ContentRight: NextPage<ContentRightType> = ({ data, className = "" }) => {
  return (
    <section className={[styles.contentRight, className].join(" ")}>
      <div className={styles.logisticAboutSection}>
        <div className={styles.logisticAboutTexts}>
          <h1 className={styles.aboutLogistics}>{data?.aboutLogisticsTitle}</h1>
          <p className={styles.telanganaStateRoad}>
            {data?.aboutLogisticsPara1}
          </p>
          <p className={styles.theConsignorsCanContainer}>
            {data?.aboutLogisticsPara2Start} 
            <a
              className={styles.wwwtgsrtctelanganagovin}
              href={data?.aboutLogisticsPara2Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.wwwtgsrtctelanganagovin1}>
                {data?.aboutLogisticsPara2Link}
              </span>
            </a>
            {data?.aboutLogisticsPara2End}
          </p>
        </div>
        <div className={styles.logisticsInfographicCardCon}>
          {data?.aboutLogisticsCards?.map((card, index) => (
            <Cards4
              key={index}
              image={card.image}
              busPasses={card.busPasses}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRight;
