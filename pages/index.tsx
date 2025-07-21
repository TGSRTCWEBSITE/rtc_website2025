import type { NextPage } from "next";
import styles from "./index.module.css";
import BookYourTicket from "../components/BookYourTicket/BookYourTicket";
import About from "../components/About/About";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeBookYourServices from "../components/HomeBookYourServices/HomeBookYourServices";
import HomeNewsUpdates from "../components/HomeNewsUpdates/HomeNewsUpdates";
import HomeGamyamApp from "../components/HomeGamyamApp/HomeGamyamApp";
import { routes } from "../constants/book-your-tickets-routes";
import HomeBannerAnimation from "../components/home-banner-carousal";
import AnimationBus from "../components/animation-bus";
import AnimationBusMobile from "../components/animation-bus-mobile";
import { doFetch } from "../services/service";

export async function getStaticProps() {
  const data = await doFetch("/home-pages?populate=*");
  return {
    props: {
      data,
    },
  };
}

const Homepage: NextPage = ({ data }) => {
  const heroSection =
    data?.heroSection?.map((section: any, index: number) => (
      <HomeHero
        key={index}
        title={section.title}
        image={section.image}
        mobileImage={section.mobileImage}
      />
    )) || [];

  return (
    <div className={styles.homepage}>
      <HomeBannerAnimation
        title={data?.heroBannerTitle}
        children={heroSection}
        secondary={true}
        includeAnimation
        autoplay={true}
      />
      <BookYourTicket
        routes={routes}
        marginTop="-0.3%"
        bookYourTicketData={data?.bookYourTicket}
        bookYourTicketTitle={data?.bookYourTicketTitle}
        bookYourTicketText={data?.bookYourTicketText}
      />
      <AnimationBus />
      <AnimationBusMobile />
      <HomeBookYourServices
        data={{
          bookYourServiceTitle: data?.bookYourServiceTitle,
          bookYourServiceContent: data?.bookYourServiceContent,
          serviceCards: data?.bookYourServiceCardsData || [],
        }}
      />

      <HomeGamyamApp
        data={{
          gamayamTitle: data?.gamyamAppTitle,
          gamayamParagraph: data?.gamyamAppContent,
          gamayamLogoUrl: data?.gamyamAppLogo?.data?.attributes?.url,
          webIconUrl: data?.gamyamAppWebImage?.data?.attributes?.url,
          shadowImageUrl: data?.shadowImage?.data?.attributes?.url,
          mobileIconUrl: data?.gamyamAppLogoMobile?.data?.attributes?.url,
        }}
      />
      <About
        data={{
          title: data?.aboutTitle,
          paragraph: data?.aboutContent,
          logoUrl: data?.aboutLogo?.data?.attributes?.url,
          desktopImageUrl: data?.aboutBgImage?.data?.attributes?.url,
          mobileImageUrl: data?.aboutMobileBg?.data?.attributes?.url,
        }}
      />
      <HomeNewsUpdates
        data={data?.newsAndUpdatesCardsData}
        maintitle={data?.newsAndUpdateTitle}
      />
    </div>
  );
};

export default Homepage;
function useFetch(): { data: any; doFetch: any } {
  throw new Error("Function not implemented.");
}
