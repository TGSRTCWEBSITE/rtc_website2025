import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import BulletPoints from "../bullet-points";

export type ContractRatesTable5Type = {
  cityServices3: any;
  annexureTitle:string;
  termsAndConditionsTitle:string;
  termsAndConditions:string[];
};

const ContractRatesTable5:NextPage<ContractRatesTable5Type> = ({cityServices3,annexureTitle,termsAndConditionsTitle,termsAndConditions}) => {
 return(
  <>
    <Tables rows={cityServices3} containerClassName={styles.ratesTable5} />
    <section className={styles.annexureContainer}>
      <h1 className={styles.annexureA}>{annexureTitle}</h1>
      <div className={styles.bulletPointContainer}>
        <div className={styles.title}>
          <h2 className={styles.guidingPrinciplesOf}>{termsAndConditionsTitle}</h2>
        </div>
        <BulletPoints items={termsAndConditions} containerClassName={styles.bulletPoints}/>
      </div>
    </section>
  </>
 )
};

export default ContractRatesTable5;