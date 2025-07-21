import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface otherContracts {
  otherContractsText: string;
  otherContractsData: any;
  otherContractsLinks: any
}
const OtherContracts: React.FC<otherContracts> = ({
  otherContractsText,
  otherContractsData,
  otherContractsLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{otherContractsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={otherContractsData} Links={otherContractsLinks} />
    </div>
  );
};
export default OtherContracts;
