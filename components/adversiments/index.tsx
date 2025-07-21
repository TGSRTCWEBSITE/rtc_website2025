import CustomTable from "../table-view-details";
import styles from "./index.module.css";
interface AdvertisementsData {
  advertisementsAndFuelsText: string;
  advertisementsAndFuelsData: any;
  advertisementsAndFuelsLinks: any
}
const Adversiments: React.FC<AdvertisementsData> = ({
  advertisementsAndFuelsData,
  advertisementsAndFuelsText,
  advertisementsAndFuelsLinks
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{advertisementsAndFuelsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={advertisementsAndFuelsData} Links={advertisementsAndFuelsLinks} />
    </div>
  );
};
export default Adversiments;
