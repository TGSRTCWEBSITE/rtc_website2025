import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import CommonLabel from "../label";

export type ContractRatesTable2Type = {
  districtServicesTitle :string;
  districtServices:any;
  districtServicesLabel:string;
  className?: string;
};

const ContractRatesTable2: NextPage<ContractRatesTable2Type> = ({districtServicesTitle,districtServices,districtServicesLabel, className = "" }) => {
  return (
    <section className={[styles.tableTitleParent, className].join(" ")}>
      <div className={styles.tableTitle}>
        <h2 className={styles.title}>{districtServicesTitle}</h2>
        <Tables rows={districtServices} containerClassName={styles.ratesTable2}/>
      </div>
      <CommonLabel text={districtServicesLabel} />
    </section>
  );
};

export default ContractRatesTable2;
