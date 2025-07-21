import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface chassisData {
  chassisBodiesText: string;
  chassisBodiesData: any;
  chassisBodiesLinks: any
}
const ChassisAndBodies: React.FC<chassisData> = ({
  chassisBodiesData,
  chassisBodiesText,
  chassisBodiesLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{chassisBodiesText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={chassisBodiesData} Links={chassisBodiesLinks} />
    </div>
  );
};
export default ChassisAndBodies;
