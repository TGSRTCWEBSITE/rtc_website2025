import Tables from "../tables";
import styles from "./index.module.css";
interface MunchintalaData{
  munchintalaParagraph1:string;
  munchintalaParagraph2:string;
  munchintalaTableHeading:string;
  munchintalaTablData:any;
}
const MunchintalaTab: React.FC<MunchintalaData> = ({
  munchintalaParagraph1,
  munchintalaParagraph2,
  munchintalaTableHeading,
  munchintalaTablData,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{munchintalaParagraph1}</p>
        <p className={styles.paragraph}>{munchintalaParagraph2}</p>
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.tableHeading}>{munchintalaTableHeading}</p>
        <Tables rows={munchintalaTablData} containerClassName={styles.table} />
      </div>
    </div>
  );
};
export default MunchintalaTab;
