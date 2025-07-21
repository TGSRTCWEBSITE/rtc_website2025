import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface AuctionDisposalData {
  auctionsData: any;
  auctionsText: String;
  auctionsLinks: any
}
const AuctionDisposals: React.FC<AuctionDisposalData> = ({
  auctionsData,
  auctionsText,
  auctionsLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{auctionsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={auctionsData} Links={auctionsLinks} />
    </div>
  );
};
export default AuctionDisposals;
