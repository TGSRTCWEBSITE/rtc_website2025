import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";

export type ContractRatesTable1Type = {
  oneWayServicesTitle :string;
  oneWayServices:any;
  className?: string;
};

const ContractRatesTable1: NextPage<ContractRatesTable1Type> = ({ oneWayServicesTitle,oneWayServices,className = "" }) => {
  return (
    <section className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>{oneWayServicesTitle}</h2>
      <Tables rows={oneWayServices} containerClassName={styles.ratesTable1}/>
    </section>
  );
};

export default ContractRatesTable1;
