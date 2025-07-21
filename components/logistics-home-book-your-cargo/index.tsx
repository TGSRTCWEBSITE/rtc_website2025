import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";
import { BOOK_NOW_LOGISTICS } from "../../constants";

export type MainContentType = {
  className?: string;
  bookYourCargoTitle?: string;
  bookYourCargoImage?: any;
  bookYourCargoSubtitle?: string;
  bookYourCargoContent?: string;
  bookYourCargoButtonText?: string;
  logisticsLink?: string
};

const MainContent: NextPage<MainContentType> = ({ bookYourCargoTitle, bookYourCargoImage, bookYourCargoSubtitle, bookYourCargoContent, bookYourCargoButtonText, logisticsLink, className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentLeft}>
        <div className={styles.bookYourCargoWrapper}>
          <h1 className={styles.bookYourCargo}>{bookYourCargoTitle}</h1>
        </div>
        <div className={styles.cargoCard}>
          <div className={styles.cargoInfo}>
            <div className={styles.infographics}>
              <div className={styles.infographicsInner}>
                <div className={styles.frameParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt="goods"
                    src={`${UPLOADS_BASE_URL}${bookYourCargoImage?.data.attributes.url}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.cargoDescription}>
              <div className={styles.lookingForSendYourPackageParent}>
                <h2 className={styles.lookingForSend}>
                  {bookYourCargoSubtitle}
                </h2>
                <p className={styles.loremIpsumDolor}>
                  {bookYourCargoContent}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cargoButton}>
            <a href={BOOK_NOW_LOGISTICS} 
            target="_blank"
              rel="noopener noreferrer" className={styles.button}>
              <div className={styles.applyNow}>{bookYourCargoButtonText}</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
