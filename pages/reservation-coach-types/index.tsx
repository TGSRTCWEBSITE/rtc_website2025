import MainHeader from "../../components/reservation-details-banner";
import SeatLayoutOfTGSRTCContaine from "../../components/reservation-details-seat-layout";
import TypesOfCoaches from "../../components/reservation-details-types-of-coaches";
import FrameComponent4 from "../../components/reservation-details-city-services";
import OtherCityServicesSection from "../../components/reservation-details-other-bus-pass";
import styles from "./index.module.css";
import { TYPES_OF_COACHES } from "../../constants";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/reservation-bus-details?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Reservation coach types",
    },
  };
};

const ReservationBusDetails: NextPage = ({data}) => {

  return (
    <>
      <MainHeader 
        data={{
          heroImageWeb: data?.heroImageWeb,
          heroImageMobile: data?.heroImageMobile,
          heroTitle: data?.heroTitle,
          heroSubTitle: data?.heroSubTitle,
        }} 
      />
      <AnimationBus/>
      <AnimationBusMobile/>
      <div className={styles.reservationBusDetails}>
        <main className={styles.contentContainer}>
          <section className={styles.seatLayoutOfTgsrtcContaineParent}>
            <SeatLayoutOfTGSRTCContaine 
              data={{
                seatLayout: data?.seatLayout,
                seatLayoutContent: data?.seatLayoutContent,
                seatLayoutData: data?.seatLayoutData || [],
              }} 
            />
            <div className={styles.coachTypesHeading}>
              <h1 className={styles.typesOfCoaches}>{TYPES_OF_COACHES}</h1>
            </div>
            
            {data?.typesOfCoachesData?.map((coach: any, index: number) => (
              <TypesOfCoaches
                key={index}
                subheading={coach.subheading}
                para={coach.para}
                bulletPoints={coach.bulletPoints}
                imageSrc={`${UPLOADS_BASE_URL}${coach.imageSrc}`}
              />
            ))}
    
            <FrameComponent4 
              data={{
                cityServicesTitle: data?.cityServicesTitle,
                electricBusData: data?.electricBusData,
                metroDeluxData: data?.metroDeluxData,
                metroLuxuryTitle: data?.metroLuxuryTitle,
                metroLuxuryImage: data?.metroLuxuryImage,
                metroDeluxTitle: data?.metroDeluxTitle,
                metroDeluxImage: data?.metroDeluxImage,
                metroExpressTitle: data?.metroExpressTitle,
                metroExpressImage: data?.metroExpressImage,
              }} 
            />
            <OtherCityServicesSection 
              data={{
                otherBusPassesTitle: data?.otherBusPassesTitle,
                otherBusPassesContent: data?.otherBusPassesContent,
                otherBusPassesData: data?.otherBusPassesData || [],
              }} 
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default ReservationBusDetails;
