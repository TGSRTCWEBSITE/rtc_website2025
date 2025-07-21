import Tables from "../tables";
import TimingsTab from "../timings-tab";
import styles from "./index.module.css";
interface PuspakData {
  airportPushpakParagraph1: string;
  airportPushpakParagraph2: string;
  airportPushpakTableHeading: string;
  airportPushpakTableData: any;
  tgstrcMiyapurText: string;
  tgsrtcAirPortPushpakBusTimingsHeading: string;
  airPortPushpakBustimingsTowardsRGIAData:any;
  airPushpakBusPointControllersTableHeading:string;
  airPushpakBusPointControllers:any;
  pushpakBusTimingsFromRGIAHeading:string;
  pushpakBusTimingsFromRGIAData:any
}
const AirPortPushpak: React.FC<PuspakData> = ({
  airportPushpakParagraph1,
  airportPushpakParagraph2,
  airportPushpakTableHeading,
  airportPushpakTableData,
  tgstrcMiyapurText,
  tgsrtcAirPortPushpakBusTimingsHeading,
  airPortPushpakBustimingsTowardsRGIAData,
  airPushpakBusPointControllersTableHeading,
  airPushpakBusPointControllers,
  pushpakBusTimingsFromRGIAHeading,
  pushpakBusTimingsFromRGIAData
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{airportPushpakParagraph1}</p>
        <p className={styles.paragraph}>{airportPushpakParagraph2}</p>
      </div>
      <div className={styles.lowerInnerContainer}>
        <p className={styles.tableHeading}>{airportPushpakTableHeading}</p>
        <Tables
          rows={airportPushpakTableData}
          containerClassName={styles.table}
        />
      </div>
      <div>
        <p className={styles.table2Heading}>{airPushpakBusPointControllersTableHeading}</p>
        <Tables rows={airPushpakBusPointControllers} containerClassName={styles.table} />
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.TSRTCtext}>{tgstrcMiyapurText}</p>
        <p className={styles.pushpakTimings}>
          {tgsrtcAirPortPushpakBusTimingsHeading}
        </p>
        <TimingsTab timingsRGIAData={airPortPushpakBustimingsTowardsRGIAData} />
      </div>
      <div  className={styles.lowerContainer}>
        <p className={styles.pushpakTimings} >{pushpakBusTimingsFromRGIAHeading}</p>
        <TimingsTab timingsRGIAData={pushpakBusTimingsFromRGIAData} />
      </div>
    </div>
  );
};
export default AirPortPushpak;
