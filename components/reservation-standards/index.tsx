import { NextPage } from "next";
import styles from "./index.module.css";

export type ReservationStandardsType = {
  TGSRTCDeliveringExcellenceTitle: string;
  TGSRTCDeliveringExcellenceSubtitle: string;
  TGSRTCDeliveringExcellenceContent: string;
};

const ReservationStandards: NextPage<ReservationStandardsType> = ({
  TGSRTCDeliveringExcellenceTitle,
  TGSRTCDeliveringExcellenceSubtitle,
  TGSRTCDeliveringExcellenceContent,
}) => {
return (
  <section className={styles.frameWrapper}>
    <div className={styles.contentWrapper}>
      <h1 className={styles.tgsrtc}>{TGSRTCDeliveringExcellenceTitle}</h1>
      <div className={styles.frameParent}>
        <h1 className={styles.standards}>{TGSRTCDeliveringExcellenceSubtitle}</h1>
        <p className={styles.commitment}>{TGSRTCDeliveringExcellenceContent}</p>
      </div>
    </div>
  </section>
);
};
export default ReservationStandards;
