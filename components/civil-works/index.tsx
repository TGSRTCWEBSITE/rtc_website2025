import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface civilData {
  civilWorksData: any;
  civilWorksText: string;
  civilWorksLinks
  : any
}
const CivilWorks: React.FC<civilData> = ({
  civilWorksData,
  civilWorksText,
  civilWorksLinks

}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{civilWorksText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={civilWorksData} Links={civilWorksLinks
        } />
    </div>
  );
};
export default CivilWorks;
