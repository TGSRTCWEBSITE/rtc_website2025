import ReservationHeroConcessionSc from "../../components/reservation-points-banner";
import ReservationDetailsOfReserva from "../../components/reservation-points-table";
import styles from "./index.module.css";
import { doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/reservation-points?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "ticket booking agents",
    },
  };
};

const Ticketbookingagents = ({data}) => {

  return (
    <div className={styles.reservationPoints}>
      <ReservationHeroConcessionSc data={data}/>
      <AnimationBus/>
      <AnimationBusMobile/>
      <section className={styles.reservationDetailsOfReservaParent}>
        <ReservationDetailsOfReserva data={data}/>
      </section>
    </div>
  );
};

export default Ticketbookingagents;
