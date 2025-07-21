import Tables from "../tables";
import styles from "./index.module.css";

interface HyderabadData {
  hyderabadTableHeading: string;
  hyderabadData: any;
  yadagiriguttaToJBSTableHeading: string;
  yadagiriguttaToJBSdata: any;
}
const YadagiriguttaTab: React.FC<HyderabadData> = ({
  hyderabadTableHeading,
  hyderabadData,
  yadagiriguttaToJBSTableHeading,
  yadagiriguttaToJBSdata,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.tableHeading}>{hyderabadTableHeading}</p>
      <div style={{ width: "100%" }}>
        <Tables rows={hyderabadData} containerClassName={styles.table} />
      </div>
      <div className={styles.lowerContaiuner}>
        <p className={styles.tableHeading}>{yadagiriguttaToJBSTableHeading}</p>
        <div style={{ width: "100%" }}>
          <Tables
            rows={yadagiriguttaToJBSdata}
            containerClassName={styles.table}
          />
        </div>
      </div>
    </div>
  );
};
export default YadagiriguttaTab;
