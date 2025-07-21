import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface StallsData {
  stallsAndShopsText: string;
  stallsAndShopsData: any;
  stallsAndShopsLinks: any;
}
const StallsAndShops: React.FC<StallsData> = ({
  stallsAndShopsText,
  stallsAndShopsData,
  stallsAndShopsLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{stallsAndShopsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={stallsAndShopsData} Links={stallsAndShopsLinks} />
    </div>
  );
};
export default StallsAndShops;
