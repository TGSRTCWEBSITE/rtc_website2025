import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AboutLandingHero from "../../components/about-landing-hero";
import AboutVision from "../../components/about-vision";
import AboutPhilosophyGuidlines from "../../components/about-philosophy-guidelines";
import AboutLegacyLetter from "../../components/about-legacy-letter";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";
import AccordionItem from "../../components/accordians";

export async function getStaticProps() {

  const data = await doFetch("/about-vision-and-legacys?populate=*");

  console.log(data)

  return {
    props: {
      data,
      title: data?.heroTitle ? `${data.heroTitle} ` : "About-vision-legacy",
    },
  };
}

const AboutVisionLegacy: any = ({data}) => {
  // opened accordian by default and toggling the accordian
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    new Array(data?.coreValuesData?.length).fill(true)
  );
 
  const handleChange = (index: number) => {
    setExpandedItems(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
 

  return (
    <div className={styles.aboutVisionLegacy}>
      <AboutLandingHero
        heroTitle={data?.heroTitle}
        heroSubTitle={data?.heroSubtitle}
        heroWebImage={data?.heroBackgroundImageWeb}
        heroMobileImage={data?.heroBackgroundImageMobile}
      />
       <AnimationBus />
       <AnimationBusMobile />
      <div className={styles.aboutContent}>
        <img
          className={styles.busDustMobile}
          alt="bus"
          src={UPLOADS_BASE_URL + data?.busDustImageMobile?.data?.attributes?.url}
          loading="lazy"
        />
        <img
          className={styles.busDustWebsite}
          alt="bus"
          src={UPLOADS_BASE_URL + data?.busDustImageWeb?.data?.attributes?.url}
          loading="lazy"
        />
        <AboutVision
          visionTitle={data?.visionTitle}
          visionContent={data?.visionContent}
        />
        {/* added accordian item */}
        <section className={styles.otherServices}>
            <div className={styles.otherServiceTitle}>
               {data?.CoreValuesTitle}
            </div>
            <ol className={styles.accordion}>
               {data?.coreValuesData.map((e: any, index: any) => (
                  <AccordionItem
                     key={index}
                     extraDropdownClassName={styles.extraDropdown}
                     name={e.name}
                     info={e.info}
                     expanded={expandedItems[index]}
                     onChange={() => handleChange(index)}
                     containerClassName={styles.containerClassName}
                  />
               ))}
            </ol>
         </section>
        <AboutPhilosophyGuidlines
          corporatePhilosophyTitle={data?.corporatePhilosophyTitle}
          guidingPrincipleTitle={data?.guidingPrincipleTitle}
          corporatePhilosophyList={data?.corporatePhilosophyList}
          guidingPrincipleList={data?.guidingPrincipleList}
        />
        <AboutLegacyLetter
          legacyTitle={data?.legacyTitle}
          legacyWebImage={data?.legacyWebImage}
          legacyMobileImage={data?.legacyMobileImage}
          legacyPara1={data?.legacyPara1}
          legacyPara2={data?.legacyPara2}
          legacyPara3={data?.legacyPara3}
          legacyPara4={data?.legacyPara4}
        />
      </div>
    </div>
  );
};

export default AboutVisionLegacy;
