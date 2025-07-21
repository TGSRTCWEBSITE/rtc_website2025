
import FrameComponent7 from "../../components/logistics-home-banner";
import MainContent from "../../components/logistics-home-book-your-cargo";
import ContentRight from "../../components/logistics-home-about-logistics";
import FrameComponent6 from "../../components/logistics-home-business";
import styles from "./index.module.css";
import { doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/logistics-landings?populate=*");

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "Book Your Cargo",
    },
  };
};

const LogisticsTSRTCHome: NextPage = ({data}) => {

  return (
    <div className={styles.logisticsTsrtcHome}>
      <FrameComponent7 
        heroTitle={data?.heroTitle} 
        heroSubTitle={data?.heroSubTitle} 
        heroSectionLogo={data?.heroSectionLogo} 
        heroImageMobile={data?.heroImageMobile} 
        heroImageWeb={data?.heroImageWeb}
      />
      <AnimationBus/>
      <AnimationBusMobile/>
      <MainContent  
        bookYourCargoTitle={data?.bookYourCargoTitle} 
        bookYourCargoImage={data?.bookYourCargoImage} 
        bookYourCargoSubtitle={data?.bookYourCargoSubtitle} 
        bookYourCargoContent={data?.bookYourCargoContent} 
        bookYourCargoButtonText={data?.bookYourCargoButtonText}
        logisticsLink={data?.logisticsLink}
      />
      <ContentRight 
        data={{
          aboutLogisticsTitle: data?.aboutLogisticsTitle,
          aboutLogisticsPara1: data?.aboutLogisticsPara1,
          aboutLogisticsPara2Start: data?.aboutLogisticsPara2Start,
          aboutLogisticsPara2Link: data?.aboutLogisticsPara2Link,
          aboutLogisticsPara2End: data?.aboutLogisticsPara2End,
          aboutLogisticsCards: data?.aboutLogisticsCards || [],
        }} 
      />
      <FrameComponent6 
        data={{
          logisticsBusiness: data?.logisticsBusiness,
          logisticsBusinesspara1: data?.logisticsBusinesspara1,
          logisticsBusinessImage: data?.logisticsBusinessImage,
          logisticsBusinessImageMobile: data?.logisticsBusinessImageMobile,
          logisticsBusinesspara2: data?.logisticsBusinesspara2,
          LogisticsSalientFeatures: data?.LogisticsSalientFeatures,
          SalientFeaturesData: data?.SalientFeaturesData
        }} 
      />
    </div>
  );
};

export default LogisticsTSRTCHome;
