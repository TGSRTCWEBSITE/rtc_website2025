import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface electricData {
  electricBusesData: any;
  electricBusesText: string;
  electricBusesLinks: any
}
const ElectricBuses: React.FC<electricData> = ({
  electricBusesData,
  electricBusesText,
  electricBusesLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{electricBusesText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={electricBusesData} Links={electricBusesLinks} />
    </div>
  );
};
export default ElectricBuses;
