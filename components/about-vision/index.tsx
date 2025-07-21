import type { NextPage } from "next";
import styles from "./index.module.css";

export type AboutVisionType = {
  visionTitle?: string;
  visionContent?: string;
  className?: string;
};

const AboutVision: NextPage<AboutVisionType> = ({
  visionTitle,
  visionContent,
}) => {
  return (
    <section className={styles.visionConatiner}>
      <div className={styles.texts}>
        <div className={styles.titleAndLine}>
          <div className={styles.visionTitle}>{visionTitle}</div>
          <div className={styles.headingUnderline}></div>
        </div>
        <div className={styles.tgsrtcIsCommittedContainer}>{visionContent}</div>
      </div>
    </section>
  );
};

export default AboutVision;
