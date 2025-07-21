import React from "react"
import styles from "./index.module.css";

interface IntroductionData {
    introTitle: string;
    introContent: string;
}
interface AboutInitiativeIntroductionProps {
    data: IntroductionData;
}
const AboutInitiativeIntroduction: React.FC<AboutInitiativeIntroductionProps>=({data})=>{
  return(
    <section className={styles.introduction}>
    <div className={styles.introHeading}>{data?.introTitle}</div>
    <div className={styles.introContent}>{data?.introContent}</div>
  </section>
  )
}
export default AboutInitiativeIntroduction;