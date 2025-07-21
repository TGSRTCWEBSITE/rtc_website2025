import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface hireABusData {
  hireBusText: string;
  hireBusData: any;
  hireBusLinks: any
}
const HireBus: React.FC<hireABusData> = ({ hireBusText, hireBusData, hireBusLinks }) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{hireBusText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={hireBusData} Links={hireBusLinks} />
    </div>
  );
};
export default HireBus;
