import styles from "./index.module.css";
import Tables from "../tables";

interface ReservationPointsTableRow {
  slNum: string;
  busStation: string;
  name: string;
  place: string;
  cellNum: string;
}

interface ReservationDetailsOfReservaData {
  reservationPointsTitle?: string;
  reservationPointsTableData?: ReservationPointsTableRow[];
}

interface ReservationDetailsOfReservaProps {
  data: ReservationDetailsOfReservaData | null;
}
const ReservationDetailsOfReserva = ({ data }:ReservationDetailsOfReservaProps) => {
  return (
    <div className={styles.reservationDetailsOfReserva}>
      <div className={styles.tableTitle}>
        <h2 className={styles.title}>{data?.reservationPointsTitle}</h2>
        {data?.reservationPointsTableData != null && data?.reservationPointsTableData != undefined ? <Tables rows={data?.reservationPointsTableData} tableHeadCellStyles={styles.tablehead} containerClassName={styles.tableRow}/>:<></>}
      </div>
    </div>
  );
};

export default ReservationDetailsOfReserva;
