import { NextPage } from "next";
import Tables from "../tables";
import styles from "./index.module.css";

export type ReservationServicesType={
  typesOfServiceTitle:string;
  typesOfServiceContent:string;
  TGSRTCDeliveringExcellenceTableData:any;
}

const ReservationServices:NextPage<ReservationServicesType> = ({typesOfServiceTitle,typesOfServiceContent,TGSRTCDeliveringExcellenceTableData}) => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.typesOfServicesParent}>
        <h3 className={styles.title}>{typesOfServiceTitle}</h3>
        <p className={styles.content}>{typesOfServiceContent}</p>
        <Tables
          rows={TGSRTCDeliveringExcellenceTableData}
          containerClassName={styles.table}
        />
      </div>
    </section>
  );
};

export default ReservationServices;
