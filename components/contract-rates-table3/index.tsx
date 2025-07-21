import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";

export type ContractRatesTable3Type = {
  cityServicesTitle: string;
  cityServices1:any;
  className?: string;
};

const ContractRatesTable3: NextPage<ContractRatesTable3Type> = ({cityServicesTitle,cityServices1, className = "" }) => {
  return (
    <div className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>{cityServicesTitle}</h2>
      <Tables rows={cityServices1} containerClassName={styles.ratesTable3} />
    </div>
  );
};

export default ContractRatesTable3;
