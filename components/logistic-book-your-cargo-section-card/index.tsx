import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type LogisticBookYourCargoSectionCardType = {
  className?: string;
  cards: Array<{
    image: string;
    cardHeading: string;
    content: string;
    button: string;
    link: string
  }>;
};

const LogisticBookYourCargoSectionCard: NextPage<
  LogisticBookYourCargoSectionCardType
> = ({ className = "", cards = [] }) => {
  return (
    <section
      className={[styles.logisticBookYourCargoSecti, className].join(" ")}
    >
      <h1 className={styles.bookYourCargo}>{`Book Your Cargo `}</h1>
      <div className={styles.cardContainer}>
        {cards?.map((card, index) => (
          <div key={index} className={styles.cards}>
            <div className={styles.infographicContainerWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt={card.cardHeading}
                src={UPLOADS_BASE_URL + card?.image}
              />
            </div>
            <div className={styles.bodyContainer}>
              <div className={styles.texts}>
                <h2 className={styles.busPasses}>
                  <p className={styles.bulkCtvCargo}>{card?.cardHeading}</p>
                </h2>
                <p className={styles.loremIpsumDolor}>{card?.content}</p>
              </div>
              <a className={styles.buttonsContainer} target="_blank"
                rel="noopener noreferrer" href={process.env.BASE_URL + card?.link}>
                <div className={styles.button1}>
                  <b className={styles.applyNow}>{card?.button}</b>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticBookYourCargoSectionCard;
