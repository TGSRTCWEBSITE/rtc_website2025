import type { NextPage } from "next";
import ImageCards from "../logistics-business-image-card";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type FrameComponent6Type = {
  className?: string;
  data?: {
    logisticsBusiness?: string;
    logisticsBusinesspara1?: string;
    logisticsBusinessImage?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
    logisticsBusinessImageMobile?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
    logisticsBusinesspara2?: string;
    LogisticsSalientFeatures: string;
    SalientFeaturesData?: {
      type: string;
      data: string[];
    };
  };
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ data, className = "" }) => {
  return (
    <section className={[styles.businessContentWrapper, className].join(" ")}>
      <div className={styles.businessContent}>
        <div className={styles.businessDescription}>
          <div className={styles.businessTitleContainer}>
            <h1 className={styles.tgsrtcLogisticsBusiness}>
              {data?.logisticsBusiness}
            </h1>
          </div>
          <p className={styles.tgsrtcAsTransportation}>
            {data?.logisticsBusinesspara1}
          </p>
        </div>
        <div className={styles.businessImage}>
          <ImageCards
            pictures={`${UPLOADS_BASE_URL}${data?.logisticsBusinessImage?.data?.attributes?.url}`}
          />
        </div>
        <div className={styles.businessImageMobile}>
          <ImageCards
            pictures={`${UPLOADS_BASE_URL}${data?.logisticsBusinessImageMobile?.data?.attributes?.url}`}
          />
        </div>
        <div className={styles.imageCaptionContainer}>
          <p className={styles.cargoTransportvehicleTgsrtc}>
            {data?.logisticsBusinesspara2}
          </p>
        </div>
        <div className={styles.businessTitleContainer}>
          <h1 className={styles.tgsrtcLogisticsBusiness}>
            {data?.LogisticsSalientFeatures}
          </h1>
        </div>
        {data?.SalientFeaturesData?.type === "bullet points" && (
          <div>
            {data?.SalientFeaturesData?.data.map((point, index) => (
              <p className={styles.tgsrtcAsTransportationdata} key={index}>{point}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FrameComponent6;