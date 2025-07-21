import type { NextPage } from "next";
import BookYourServiceCards from "../HomePageCard/HomePageCard";
import styles from "./HomeBookYourServices.module.css";

export type HomeBookYourServicesType = {
  data?: {
    bookYourServiceTitle: string;
    bookYourServiceContent: string;
    serviceCards: Array<{
      image: string;
      title: string;
      content: string;
    }>;
  };
  className?: string;
};

const HomeBookYourServices: NextPage<HomeBookYourServicesType> = ({ data, className = "" }) => {
  return (
    <>
      <section className={[styles.homeBookYourServices, className].join(" ")}>
        <div className={styles.frameParent}>
          <div className={styles.bookYourServicesWrapper}>
            <h1 className={styles.bookYourServices}>{data?.bookYourServiceTitle}</h1>
          </div>
          <p className={styles.telanganaStateRoad}>
           {data?.bookYourServiceContent}
          </p>
        </div>
        <div className={styles.bookYourServiceCards}>
          {data?.serviceCards?.map((cardData, index) => (
            <BookYourServiceCards key={index} index={index} {...cardData} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeBookYourServices;
