import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type OtherCityServicesSectionType = {
  data?: {
    otherBusPassesTitle: string;
    otherBusPassesContent: string;
    otherBusPassesData: { title: string; imageSrc: string }[];
  };
  className?: string;
};


const OtherCityServicesSection: NextPage<OtherCityServicesSectionType> = ({ data, className = "" }) => {
  return (
    <div className={[styles.otherCityServicesSection, className].join(" ")}>
      <div className={styles.otherCityBusesParent}>
        <h3 className={styles.otherCityBuses}>{data?.otherBusPassesTitle}</h3>
        <p className={styles.theFollowingFacilities}>{data?.otherBusPassesContent}</p>
      </div>
     
      <div className={styles.otherBusesImages}>
        {data?.otherBusPassesData?.map((bus: any) => (
          <div key={bus.title} className={styles.deluxe}>
            <b className={styles.deluxe1}>{bus.title}</b>
            <div className={styles.imageCards}>
              <div className={styles.imageText}>
                <div className={styles.imagePlaceholder}>
                  <img
                    className={styles.picturesIcon}
                    alt={bus.title}
                    src={`${UPLOADS_BASE_URL}${bus.imageSrc}`}
                    loading="lazy"
                  />
                  <div className={styles.imagePlaceholderChild} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCityServicesSection;
