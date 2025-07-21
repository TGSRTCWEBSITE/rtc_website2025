import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type RoadSafetyCardType = {
  webImage?: string;
  mobileImage?: string;
};

const RoadSafetyCard: NextPage<RoadSafetyCardType> = ({
  webImage,
  mobileImage,
}) => {
  return (
    <section className={styles.roadSafetyCard}>
      <img
        className={styles.roadSafetyCardWebImage}
        loading="lazy"
        alt="background image"
        src={`${UPLOADS_BASE_URL}${webImage}`}
      />
      <img
        className={styles.roadSafetyCardMobileImage}
        loading="lazy"
        alt="background image"
        src={`${UPLOADS_BASE_URL}${mobileImage}`}
      />
    </section>
  );
};

export default RoadSafetyCard;
