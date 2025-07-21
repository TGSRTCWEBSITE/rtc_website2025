import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type AboutLegacyLetterType = {
    legacyTitle?: string;
    legacyWebImage?:any;
    legacyMobileImage?:any;
    legacyPara1?:string;
    legacyPara2?:string;
    legacyPara3?:string;
    legacyPara4?:string;
  className?: string;
};

const AboutLegacyLetter: NextPage<AboutLegacyLetterType> = ({
    legacyTitle,
    legacyWebImage,
    legacyMobileImage,
    legacyPara1,
    legacyPara2,
    legacyPara3,
    legacyPara4
}) => {
  return (
    <section className={styles.aboutLegacy}>
        <h1 className={styles.aboutLegacyTitle}>{legacyTitle}</h1>
        <div className={styles.aboutLegacyImageContainer}>
            <img className={styles.aboutLegacyImageWeb} src={UPLOADS_BASE_URL+legacyWebImage?.data?.attributes?.url} alt="legacyWebImage" />
            <img className={styles.aboutLegacyImageMobile} src={UPLOADS_BASE_URL+legacyMobileImage?.data?.attributes?.url} alt="legacyMobileImage" />
        </div>
        <div className={styles.aboutLegacyContent}>
            <p className={styles.aboutLegacyPara}>{legacyPara1}</p>
            <p className={styles.aboutLegacyPara}>{legacyPara2}<br/>{legacyPara3} <br/>{legacyPara4}</p>
        </div>
    </section>
  );
};

export default AboutLegacyLetter;
