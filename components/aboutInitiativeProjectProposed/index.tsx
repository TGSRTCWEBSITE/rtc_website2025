import React from "react";
import styles from "./index.module.css"
import BulletPoints from "../bullet-points";

interface ProjectProposedData {
    projectProposedTitle: string;
    intelligentTitle: string;
    intelligentContent: string[];
    vehicleTrackingTitle: string;
    vehicleTrackingContent: string;
    implementationTitle: string;
    implementationList: string[];
    computerisationTitle: string;
    computerizationAchievementsList: string[];
}

interface AboutInitiativeProjectProposedProps {
    data: ProjectProposedData;
}

const AboutInitiativeProjectProposed: React.FC<AboutInitiativeProjectProposedProps> = ({ data }) => {
 
return(
    <section className={styles.projectProposed}>
        <div className={styles.projectProposedHeading}>{data?.projectProposedTitle}</div>
        <div className={styles.heading}>{data?.intelligentTitle}</div>
        <div className={styles.content}>
          {data?.intelligentContent.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className={styles.lineSeperator}></div>
        <div className={styles.heading}>{data?.vehicleTrackingTitle}</div>
        <div className={styles.content}>A{data?.vehicleTrackingContent}</div>
        <div className={styles.listContainer}>
          <div>
            <div className={styles.listHeading}>{data?.implementationTitle}</div>
            <div className={styles.list}>
              <BulletPoints items={data?.implementationList} containerClassName={styles.listStyles} />
            </div>
          </div>
          <div>
            <div className={styles.listHeading}>{data?.computerisationTitle}</div>
            <div className={styles.list}>
              <BulletPoints items={data?.computerizationAchievementsList} containerClassName={styles.listStyles} />
            </div>
          </div>
        </div>
      </section>
)
}
export default AboutInitiativeProjectProposed;
