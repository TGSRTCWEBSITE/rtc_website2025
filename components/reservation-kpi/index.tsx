import type { NextPage } from "next";
import styles from "./index.module.css";
import KpiCounter from "../kpi-counter";

export type ReservationKPIsType = {
  kpiData?: Array<{
    number: number;
    metrics: string;
    label: string;
  }>;
  className?: string;
};

const ReservationKPIs: NextPage<ReservationKPIsType> = ({ kpiData, className = "" }) => {
  return (
    <section className={[styles.reservationKpis, className].join(" ")}>
      <div className={styles.container}>
        {kpiData?.map((kpi, index) => (
          <div key={index} className={styles.kpiIndex}>
            <div className={styles.kParent} >
              <div className={styles.kpiHeading}>
                <KpiCounter target={kpi.number} decimals={1} />
                <span className={styles.kpiMetric}>{kpi.metrics}</span>
              </div>
              <div className={styles.kpiLabel}>{kpi.label}</div>
            </div>
            <div className={styles.lineSeparator}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReservationKPIs;
