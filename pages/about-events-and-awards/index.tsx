import styles from "./index.module.css";
import { useEffect } from "react";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AboutEventsContent from "../../components/awards-events-cards";
import ImageWithCaption from "../../components/about-card-image";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";


export async function getStaticProps() {

  const data = await doFetch("/about-events-and-awards?populate=*");

  console.log(data)
  
  return {
    props: {
      data,
      // You can construct a title from your data.
      title: data?.heroTitle ? `${data.heroTitle} ` : "Events and Awards",
    },
  };
}


const AboutEventsAwards: NextPageAboutEventsAwardsType = ({data}) => {

  const isSingleImage = data?.eventsImages?.length === 1;
  return (
    <div className={styles.aboutEventsAwards}>
      <div className={styles.heroBannerSection}>
        <div className={styles.heroBannerImageSectionWeb}>
          <img
            className={styles.heroBannerImageWeb}
            alt="hero image"
            src={`${UPLOADS_BASE_URL}${data?.heroImageWeb?.data?.attributes?.url}`}
          />
        </div>
        <div className={styles.heroBannerImageSectionMobile}>
          <img
            className={styles.heroBannerImageMobile}
            alt="hero image"
            src={`${UPLOADS_BASE_URL}${data?.heroImageMobile?.data?.attributes?.url}`}
          />
        </div>
        <div className={styles.heroData}>
          <h1 className={styles.heroTitle}>
              {data?.heroTitle}
            </h1>
            <h2 className={styles.heroSubTitle}>
              {data?.heroSubTitle}
            </h2>
        </div>
        <div className={styles.quotationSection}>
          <blockquote className={styles.quotation1}>
              {data?.quotation1}
          </blockquote>
          <blockquote className={styles.quotation2}>
           {data?.quotation2}
          </blockquote></div>
      </div>
      <AnimationBus/>
      <AnimationBusMobile/>
      <AboutEventsContent data={data}/>
      <div className={styles.events}>
          <h1 className={styles.eventsTitle}>{data?.eventsTitle}</h1>
          <p className={styles.eventsContent}>{data?.eventsContent}</p>
          <div className={styles.eventsImagesSection}>
          {data?.eventsImages?.map((image:any, index:number) => (
            <ImageWithCaption
              key={index}
              src={image?.src}
              mobileSrc={image?.mobileSrc}
              caption={image?.caption}
              isSingleImage={isSingleImage}
              additionalClassName={styles.container}
              additionalImageSection={styles.imageSection}
              additionalImage={styles.image}
            />
          ))}
          </div>
      </div>
    </div>
  );
};

export default AboutEventsAwards;
