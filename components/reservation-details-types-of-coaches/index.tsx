import React from "react";
import type { NextPage } from "next";
import styles from "./index.module.css";
import BulletPoints from "../bullet-points";
import { SALIENT_FEATURES } from "../../constants";

export type FrameComponent5Type = {
  className?: string;
  subheading: string;
  para: string;
  bulletPoints: string[];
  imageSrc: string;
};

const TypesOfCoaches: NextPage<FrameComponent5Type> = ({
  className = "",
  subheading,
  para,
  bulletPoints,
  imageSrc
}) => {
  return (
    <div className={[styles.coachTypesHeadingParent, className].join(" ")}>
      <div className={styles.garudaPlusSection}>
        <div className={styles.garudaPlusContent}>
          <h3 className={styles.garudaPlusMulti}>
            {subheading}
          </h3>
          <p className={styles.theCorporationHas}>
            {para}
          </p>
        </div>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <div className={styles.guidingPrinciplesOf}>
            {SALIENT_FEATURES}
            </div>
          </div>
          <BulletPoints items={bulletPoints} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.imageCards}>
          <div className={styles.imageText}>
            <div className={styles.imagePlaceholder}>
              <img
                className={styles.picturesIcon}
                loading="lazy"
                alt="image"
                src={imageSrc}
              />
              <div className={styles.garudaPlusImageHighlight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfCoaches;
