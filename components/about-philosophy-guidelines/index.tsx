import type { NextPage } from "next";
import styles from "./index.module.css";
import BulletPoints from "../bullet-points";

export type AboutPhilosophyGuidlinesType = {
    corporatePhilosophyTitle?: string;
    guidingPrincipleTitle?: string;
    corporatePhilosophyList?: string[];
    guidingPrincipleList?:string[];
};

const AboutPhilosophyGuidlines: NextPage<AboutPhilosophyGuidlinesType> = ({
    corporatePhilosophyTitle,
    guidingPrincipleTitle,
    corporatePhilosophyList,
    guidingPrincipleList
}) => {
  return (
    <section className={styles.philosophyAndGuidelines}>
        <div className={styles.philosophy}>
            <div className={styles.philosophyHeading}>{corporatePhilosophyTitle}</div>
            <div className={styles.phylosophyList}>
                <BulletPoints items={corporatePhilosophyList} containerClassName={styles.bulletPoints} />
            </div>
        </div>
        <div className={styles.horzontalDivider}></div>
        <div className={styles.guidelines}>
            <div className={styles.guidelinesHeading}>{guidingPrincipleTitle}</div>
            <div className={styles.guidelinesList}>
                <BulletPoints items={guidingPrincipleList} containerClassName={styles.bulletPoints} />
            </div>
        </div>
    </section>
  );
};

export default AboutPhilosophyGuidlines;
