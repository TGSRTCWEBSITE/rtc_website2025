import styles from "./index.module.css";
import Tables from "../../components/tables/index";
import { columnWidths } from "../../constants/reservation-concession-schemes";
import MonthlySeasonTicketsTexts from "../../components/monthlySeasonTicketsTexts";
import { doFetch } from "../../services/service";
import { UPLOADS_BASE_URL } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/reservation-concession-schemes/?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Reservation Marketing Schemes",
    },
  };
};

const ReservationConcessionSchemes: any =
  ({data}) => {
    return (
      <div className={styles.reservationConcessionSchemes}>
        <section className={styles.reservationConcessionSchemesHeroContainer}>
          <img className={styles.reservationConcessionHeroImage} alt="reservation concession schemes hero image" src={UPLOADS_BASE_URL + data?.heroBackgroundImageWeb?.data?.attributes?.url} loading="lazy" />
          <img className={styles.reservationConcessionHeroImageMobile} alt="reservation concession schemes hero image" src={UPLOADS_BASE_URL + data?.heroBackgroundImageMobile?.data?.attributes?.url} loading="lazy" />
          <div className={styles.concessionSchemesTitle}>
            <div className={styles.title}>{data?.heroTitle}</div>
            <div className={styles.applyRenew}>{data?.heroSubTitle}</div>
          </div>
        </section>
        <AnimationBus />
        <AnimationBusMobile />
        <section className={styles.reservationConcessionSchemes1}>
          <div className={styles.container}>
          <MonthlySeasonTicketsTexts monthlySeasonTicketsTitle={data?.monthlySeasonTicketTitle} monthlySeasonTicketsList={data?.monthlySeasonTicketList} valueAdditionTitle={data?.valueAdditionTitle} valueAdditionList={data?.valueAdditionList} />
          <div className={styles.teriffsOfMonthlySeasonTickets}>
            <div className={styles.monthlySeasonTicketstableTitle}>{data?.tariffsMonthlySeasonTitle}</div>
            {data?.tariffsMonthlySeasonTicketTableData != null && data?.tariffsMonthlySeasonTicketTableData != undefined ? <Tables rows={data?.tariffsMonthlySeasonTicketTableData} containerClassName={styles.tableContainer} columnWidths={columnWidths} tableHeadCellStyles={styles.tableHeadCell} tableCellStyles={styles.tableCell} /> : <></>}
          </div>
          <div className={styles.frameParent}>
            <div className={styles.travel24t24TicketsParent}>
              <b className={styles.travel24t24Tickets}>
                {data?.t24Title}
              </b>
              <p className={styles.travel24t24TicketsWereContainer}>
                <span className={styles.travel24t24TicketsWere}>
                  {data?.t24TicketContent[0]}
                </span>
                <span className={styles.blankLine}>&nbsp;</span>
                <span className={styles.t24TicketCan}>
                  {data?.t24TicketContent[1]}
                </span>
              </p>
            </div>
            <div className={styles.facilityForLongDistancePasParent}>
              <h2 className={styles.facilityForLong}>
                {data?.facilityTitle}
              </h2>
              <p className={styles.toAttractMore}>
                {data?.facilityContent}
              </p>
            </div>
          </div>
          </div>
        </section>
      </div>
    );
  };

export default ReservationConcessionSchemes;
