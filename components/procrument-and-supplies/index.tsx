import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface ProcrumentAndSuppliesData {
  procruementAndSuppliesData: any;
  procruementAndSuppliesText: string;
  procruementAndSuppliesLinks: any
}
const ProcrumentAndSupplies: React.FC<ProcrumentAndSuppliesData> = ({
  procruementAndSuppliesData,
  procruementAndSuppliesText,
  procruementAndSuppliesLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{procruementAndSuppliesText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={procruementAndSuppliesData} Links={procruementAndSuppliesLinks} />
    </div>
  );
};
export default ProcrumentAndSupplies;
