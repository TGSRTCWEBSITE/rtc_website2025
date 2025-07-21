import type { NextPage } from "next";
import styles from "./HomeCard.module.css";
import { NEWS_UPDATES_CARD_TITLE, NEWS_UPDATES_CARD_CONTENT, APPLY_NOW, VIEW_DETAILS } from "../../constants";

export type NewsUpdateCardType = {
  className?: string;
};

const NewsAndUpdatesCard: NextPage<NewsUpdateCardType> = ({ className = "" }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.imageWeb}>
        <img
          className={styles.picturesIcon}
          loading="lazy"
          alt="news cards image"
          src="/pictures@2x.png"
        />
      </div>
      <div className={styles.imageMobile}>
        <img className={styles.picturesIcon1} alt="news cards mobile image" loading="lazy"/>
      </div>
      <div className={styles.cardTextHolder}>
        <div className={styles.texts}>
          <h2 className={styles.internationalWomensDay}>
            {NEWS_UPDATES_CARD_TITLE}
          </h2>
          <p className={styles.loremIpsumDolor}>
           {NEWS_UPDATES_CARD_CONTENT}
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img className={styles.lineSeparatorIcon} alt="line seperator" loading="lazy"/>
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

export default NewsAndUpdatesCard;
