import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./HomeNewsUpdates.module.css";
import Carousal from "../Carosal/index";
import { VIEW_DETAILS, APPLY_NOW } from "../../constants";
import { UPLOADS_BASE_URL } from "../../services/service";

export type HomeNewsUpdatesType = {
  className?: string;
  data?: { title: string; content: string; imageUrl: string }[];
  maintitle?:string;
};

const HomeNewsUpdates: NextPage<HomeNewsUpdatesType> = ({ data, className = "",maintitle }) => {
  const [perView, setPerView] = useState(3);

  const updatePerView = () => {
    const width = window.innerWidth;
    if (width <= 599) {
      setPerView(1);
    } else if (width <= 1023) {
      setPerView(2);
    } else {
      setPerView(3);
    }
  };

  useEffect(() => {
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => {
      window.removeEventListener("resize", updatePerView);
    };
  }, []);

  const NewsAndUpdatesCard = ({ title, content, imageUrl }: { title: string; content: string; imageUrl: string }) => {
    return (
      <div className={styles.cards}>
        <div className={styles.imageWeb}>
          <img
            className={styles.picturesIcon}
            loading="lazy"
            alt="news cards image"
            src={ UPLOADS_BASE_URL+ imageUrl}
          />
        </div>
        <div className={styles.imageMobile}>
          <img className={styles.picturesIcon1} alt="news cards mobile image" src={UPLOADS_BASE_URL + imageUrl} loading="lazy" />
        </div>
        <div className={styles.cardTextHolder}>
          <div className={styles.texts}>
            <h2 className={styles.cardHeading}>
              {title}
            </h2>
            <p className={styles.cardContent}>
              {content}
            </p>
          </div>
          <div className={styles.lineSeparater}>
            <img className={styles.lineSeparatorIcon} alt="line separator" loading="lazy" />
          </div>
          <div className={styles.buttonHolder}>
            <div className={styles.viewDetails}>{VIEW_DETAILS}</div>
            <div className={styles.button2}>
              <div className={styles.applyNow}>{APPLY_NOW}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const newsCards = data?.map((news, index) => (
    <NewsAndUpdatesCard
      key={index}
      title={news.title}
      content={news.content}
      imageUrl={news.imageUrl}
    />
  ));

  return (
    <section className={[styles.homeNewsUpdates, className].join(" ")}>
      <h1 className={styles.newsUpdates}>{maintitle}</h1>
      <div className={styles.carousel}>
        <Carousal
          perView={perView}
          autoplay={false}
          sliderClassName={styles.customSlider}
          children={[newsCards]}
        >
        </Carousal>
      </div>
    </section>
  );
};

export default HomeNewsUpdates;


