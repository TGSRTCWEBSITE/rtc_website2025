import { NextPage } from "next";
import styles from "./index.module.css";
import HospitalServiceCard from "../hospital-service-cards";
import { UPLOADS_BASE_URL } from "../../services/service";

export type HospitalServicesType = {
  aboutHospitalTitle:string;
  aboutHospitalImage:any;
  aboutHospitalContent:string;
  whatServicesTitle:string;
  whatServicesCards:any;
  className?: string;
};

const HospitalServices: NextPage<HospitalServicesType> = ({aboutHospitalTitle,aboutHospitalImage,aboutHospitalContent,whatServicesTitle,whatServicesCards,className = "",}) => {
  return (
    <section className={[styles.hospitalAboutWhatServiceWe, className].join(" ")}>
      {/* About hospital */}
      <div className={styles.aboutHospital}>
        <div className={styles.texts}>
          <div className={styles.titleAndLine}>
            <h1 className={styles.aboutHospitalHeading}>
              {aboutHospitalTitle}
            </h1>
            <div className={styles.imagePlaceholder}>
              <img
                className={styles.aboutHospitalImage}
                loading="lazy"
                alt="about-hospital-image"
                src={UPLOADS_BASE_URL +aboutHospitalImage?.data?.attributes?.url}
              />
            </div>
          </div>
          <p className={styles.tarnakaHospitalStands}>
            {aboutHospitalContent}
          </p>
        </div>
      </div>
      {/* what services we provide */}
      <div className={styles.serviceProviderContainer}>
        <h1 className={styles.whatServiceWe}>{whatServicesTitle}</h1>
        <div className={styles.textCardContianer}>
          {whatServicesCards?.map((e: {heading: string,subheading?: string },index:number) => (
            <HospitalServiceCard
              key={index}
              heading={e.heading}
              subheading={e.subheading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalServices;