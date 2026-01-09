import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./HomePageCard.module.css";
import {
  APPLY_NOW,
  BUS_PASS_LINK,
  HOSPITAL_LINK,
  VISIT_TO_THE_SITE_LABEL,
  LOGISTICS_LINK,
  HIRE_BUS,
} from "../../constants";
import { useRouter } from "next/router";
import { UPLOADS_BASE_URL } from "../../services/service";

export type BookYourServiceCardType = {
  className?: string;
  image?: string;
  title?: string;
  content?: string;
  link?: string;

  /** Style props */
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivLeft?: CSSProperties["left"];
  busPassesPadding?: CSSProperties["padding"];
  busPassesGap?: CSSProperties["gap"];
  dedicatedToDeliveringTransform?: CSSProperties["transform"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMarginRight?: CSSProperties["marginRight"];
  buttonsContainerDisplay?: CSSProperties["display"];
  buttonsContainerMinWidth?: CSSProperties["minWidth"];
  buttonsContainerMargin?: CSSProperties["margin"];
  index: number;
};

const BookYourServiceCards: NextPage<BookYourServiceCardType> = ({
  className = "",
  image,
  title,
  content,
  ellipseDivTop,
  ellipseDivLeft,
  busPassesPadding,
  busPassesGap,
  dedicatedToDeliveringTransform,
  propMarginLeft,
  propMarginRight,
  buttonsContainerDisplay,
  buttonsContainerMinWidth,
  buttonsContainerMargin,
  index,
  link,
}) => {
  const cardsStyle: CSSProperties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivTop, ellipseDivLeft]);

  const infographicsStyle: CSSProperties = useMemo(() => {
    return {
      padding: busPassesPadding,
      gap: busPassesGap,
    };
  }, [busPassesPadding, busPassesGap]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: dedicatedToDeliveringTransform,
    };
  }, [dedicatedToDeliveringTransform]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      marginRight: propMarginRight,
    };
  }, [propMarginLeft, propMarginRight]);

  const busPasses1Style: CSSProperties = useMemo(() => {
    return {
      display: buttonsContainerDisplay,
      minWidth: buttonsContainerMinWidth,
      margin: buttonsContainerMargin,
    };
  }, [
    buttonsContainerDisplay,
    buttonsContainerMinWidth,
    buttonsContainerMargin,
  ]);

  const router = useRouter();
  const handleClick = (index: number) => {
    if (index === 0) {
      router.push(BUS_PASS_LINK);
    } else if (index === 1) {
      router.push(LOGISTICS_LINK);
    } else if (index === 2) {
      // page to open in a new tab.
      window.open(link);
    } 
    else if (index === 3) {
      // page to open in a new tab.
      window.open(link);
    }
     else if (index === 4) {
      // page to open in a new tab.
      window.open(link);
    } else {
      router.push(HOSPITAL_LINK);
    }
  };
  return (
    <div className={[styles.cards, className].join(" ")} style={cardsStyle}>
      <div className={styles.infographicContainerWrapper}>
        <div className={styles.infographicContainer}>
          <div className={styles.infographics} style={infographicsStyle}>
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                loading="lazy"
                alt="service cards image"
                src={`${UPLOADS_BASE_URL}${image}`}
                style={groupIconStyle}
              />
            </div>
            <div className={styles.infographicsChild} style={ellipseDivStyle} />
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <b className={styles.cardTitle} style={busPasses1Style}>
            {title}
          </b>
          <p className={styles.cardContent}>
            <span className={styles.dedicatedToDelivering}>{content}</span>
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt="line seperator"
            loading="lazy"
          />
        </div>
        <button className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.applyNow}>{APPLY_NOW}</div>
          </div>
          <div className={styles.button2} onClick={() => handleClick(index)}>
            <b className={styles.applyNow1}>{VISIT_TO_THE_SITE_LABEL}</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BookYourServiceCards;
