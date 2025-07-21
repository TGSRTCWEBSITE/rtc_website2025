import Tables from "../tables";
import styles from "./index.module.css";
interface yadagiriguttaData {
  yadagiriguttaFirstParagraph: string;
  yadagiriguttaSecondParagraph: string;
  yadagiriguttaThirdParagraph: string;
  yadagiriguttaTableHeading: string;
  yadagiriguttaData: any;
  jbsToYadagiriguttaTableHeading: string;
  jbsToYadadriTableData: any;
}
const HyderabadTab: React.FC<yadagiriguttaData> = ({
  yadagiriguttaFirstParagraph,
  yadagiriguttaSecondParagraph,
  yadagiriguttaThirdParagraph,
  yadagiriguttaTableHeading,
  yadagiriguttaData,
  jbsToYadagiriguttaTableHeading,
  jbsToYadadriTableData,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{yadagiriguttaFirstParagraph}</p>
        <p className={styles.paragraph}>{yadagiriguttaSecondParagraph}</p>
        <p className={styles.paragraph}>{yadagiriguttaThirdParagraph}</p>
      </div>
      <div>
        <p className={styles.tableHeading}>{yadagiriguttaTableHeading}</p>
        <Tables rows={yadagiriguttaData} containerClassName={styles.table} />
      </div>
      <div>
        <p className={styles.tableHeading}>{jbsToYadagiriguttaTableHeading}</p>
        <Tables
          rows={jbsToYadadriTableData}
          containerClassName={styles.table}
        />
      </div>
    </div>
  );
};
export default HyderabadTab;
