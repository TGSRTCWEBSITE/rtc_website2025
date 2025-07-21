import ReservationHeroTourism from "../../components/contract-rates-banner";
import styles from "./index.module.css";
import ContractRatesTable1 from "../../components/contract-rates-table1";
import ContractRatesTable3 from "../../components/contract-rates-table3";
import ContractRatesTable2 from "../../components/contract-rates-table2";
import ContractRatesTable5 from "../../components/contract-rates-table5";
import ContractRatesTable4 from "../../components/contract-rates-table4";
import { useEffect } from "react";
import { doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/reservation-bus-on-contract-rates?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Reservation Bus On Contract Rates",
    },
  };
};

const ReservationBusOnContractRa: NextPageReservationBusOnContractRaType =({data}) => {

  return (
    <div className={styles.reservationBusOnContractRa}>
      <ReservationHeroTourism 
        heroTitle={data?.heroTitle} 
        heroSubTitle={data?.heroSubTitle} 
        heroWebImage={data?.bannerWebImage} 
        heroMobileImage={data?.bannerMobileImage}
      />
       <AnimationBus />
       <AnimationBusMobile />
      <div className={styles.reservationContractRatesTab}>
        <ContractRatesTable1 
          oneWayServicesTitle={data?.oneWayServicesTitle}
          oneWayServices={data?.oneWayServices}
        />
        <ContractRatesTable2  
          districtServicesTitle={data?.districtServicesTitle}
          districtServices={data?.districtServices}
          districtServicesLabel={data?.districtServicesLabel}
        />
        <div className={styles.tableTitleParent}>
          <ContractRatesTable3 
            cityServicesTitle={data?.cityServicesTitle}
            cityServices1={data?.cityServices1}
          />
          <ContractRatesTable4 
            cityServicesLabel={data?.cityServicesLabel}
            cityServices2={data?.cityServices2}
            cityServicesInstructions={data?.cityServicesInstructions}
          />
          <ContractRatesTable5 
            cityServices3={data?.cityServices3}
            annexureTitle={data?.annexureTitle}
            termsAndConditionsTitle={data?.termsAndConditionsTitle}
            termsAndConditions={data?.termsAndConditions}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationBusOnContractRa;