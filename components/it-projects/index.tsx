import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface ITProductsData {
  ITProductsData: any;
  ITProductsText: string;
  itProductsLinks:any
}
const ITPrjects: React.FC<ITProductsData> = ({
  ITProductsText,
  ITProductsData,
  itProductsLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{ITProductsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={ITProductsData}
        Links={itProductsLinks}
      />
    </div>
  );
};
export default ITPrjects;
