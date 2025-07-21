import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import BulletPoints from "../bullet-points";
import CommonLabel from "../label";

export type ContractRatesTable4Type = {
  cityServicesLabel :string;
  cityServices2:any;
  cityServicesInstructions:string[];
  className?: string;
};

const ContractRatesTable4: NextPage<ContractRatesTable4Type> = ({ cityServicesLabel,cityServices2,cityServicesInstructions, className = "" }) => {
  return (
    <div className={[styles.itemCellParent, className].join(" ")}>
      <CommonLabel text={cityServicesLabel} />
      <div className={styles.tableTitle}>
        <Tables rows={cityServices2} containerClassName={styles.ratesTable4}/>
      </div>
      <div className={styles.bulletPointContainer}>
        <BulletPoints items={cityServicesInstructions} containerClassName={styles.bulletPoints}/>
      </div>
    </div>
  );
};

export default ContractRatesTable4;