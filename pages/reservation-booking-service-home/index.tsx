import BookYourTicket from "../../components/BookYourTicket/BookYourTicket";
import ReservationKPIs from "../../components/reservation-kpi";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import { useEffect } from "react";
import CustomerSupport from "../../components/customer-support";
import ReservationConnectivity from "../../components/reservation-connectivity";
import ReservationStandards from "../../components/reservation-standards";
import ReservationServices from "../../components/reservation-services";
import ReservationHero from "../../components/reservation-landing-hero";
import SpecialBuses from "../../components/special-buses";
import { routes } from "../../constants/book-your-tickets-routes";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/reservation-landing-pages?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Reservation Booking Service Home",
    },
  };
};

const ReservationBookingServiceHome: NextPageReservationBookingServiceHomeType = ({data}) => {

    return (
      <section className={styles.ReservationBookingServiceHome}>
        <ReservationHero 
          heroTitle={data?.heroTitle} 
          heroSubTitle={data?.heroSubTitle} 
          heroWebImage={data?.heroWebImage}
          heroMobileImage={data?.heroMobileImage} 
        />
        <BookYourTicket bookYourTicketData={data?.bookYourTicket} routes={routes} bookYourTicketTitle={data?.bookYourTicketTitle} bookYourTicketText={data?.bookYourTicketText}/>
        <AnimationBus />
        <AnimationBusMobile />
        <ReservationKPIs 
          kpiData={data?.kpi}
        />
        <SpecialBuses 
          specialBusOffersTitle={data?.specialBusOffersTitle}
          specialBusOffersData={data?.specialBusOffersData}
        />
        <CustomerSupport
          customerSupportWebImage={data?.customerSupportWebImage}
          customerSupportMobileImage={data?.customerSupportMobileImage}
          customerSupportTitle={data?.customerSupportTitle}
          customerSupportSubTitle={data?.customerSupportSubTitle} 
          customerSupportEmail={data?.customerSupportEmail}
          customerSupportContactNumber1={data?.customerSupportContactNumber1}
          customerSupportContactNumber2={data?.customerSupportContactNumber2}
        />
        <section className={styles.ReservationBookingServiceHomeInner}>
          <div className={styles.frameContainer}>
           <ReservationStandards 
            TGSRTCDeliveringExcellenceTitle={data?.TGSRTCDeliveringExcellenceTitle}
            TGSRTCDeliveringExcellenceSubtitle={data?.TGSRTCDeliveringExcellenceSubtitle}
            TGSRTCDeliveringExcellenceContent={data?.TGSRTCDeliveringExcellenceContent}
           />
           <ReservationServices 
            typesOfServiceTitle={data?.typesOfServiceTitle}
            typesOfServiceContent={data?.typesOfServiceContent}
            TGSRTCDeliveringExcellenceTableData={data?.TGSRTCDeliveringExcellenceTableData}
           />
           <ReservationConnectivity 
            connectivityTitle={data?.connectivityTitle}
            connectivityListData={data?.connectivityListData}
           />
          </div>
        </section>
      </section>
    );
  };

export default ReservationBookingServiceHome;
