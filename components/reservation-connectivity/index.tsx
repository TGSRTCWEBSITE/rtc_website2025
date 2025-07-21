import { NextPage } from "next";
import styles from "./index.module.css";
import BulletPoints from "../bullet-points";

export type ReservationConnectivityType = {
  connectivityTitle: string;
  connectivityListData: string[];
};
const ReservationConnectivity: NextPage<ReservationConnectivityType> = ({
  connectivityTitle,
  connectivityListData,
}) => {
  return (
    <div className={styles.bulletPointContainer}>
      <h2 className={styles.connectivityTitle}>{connectivityTitle}</h2>
      <BulletPoints
        items={connectivityListData}
        containerClassName={styles.bulletPoints}
      />
    </div>
  );
};
export default ReservationConnectivity;
