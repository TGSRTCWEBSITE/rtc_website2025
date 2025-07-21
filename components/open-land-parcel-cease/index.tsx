import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface OpenParcelData {
  openLandParcelOnLeaseText: string;
  openLandParcelOnLeaseData: any;
  openLandParcelOnLeaseLinks: any
}
const OpenLandParcelCease: React.FC<OpenParcelData> = ({
  openLandParcelOnLeaseData,
  openLandParcelOnLeaseText,
  openLandParcelOnLeaseLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{openLandParcelOnLeaseText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={openLandParcelOnLeaseData} Links={openLandParcelOnLeaseLinks}
      />
    </div>
  );
};
export default OpenLandParcelCease;
