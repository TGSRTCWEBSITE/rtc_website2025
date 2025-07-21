import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface data {
  outSourcingContractText: string;
  outSourcingData: any;
  outSourcingLinks: any
}
const OutSoursingControls: React.FC<data> = ({
  outSourcingContractText,
  outSourcingData,
  outSourcingLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{outSourcingContractText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={outSourcingData}
        Links={outSourcingLinks}
      />
    </div>
  );
};
export default OutSoursingControls;
