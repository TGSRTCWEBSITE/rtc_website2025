import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type Cards4Type = {
  className?: string;
  image?: string;
  busPasses?: string;
  content?:string;
};
const Cards4: NextPage<Cards4Type> = ({
  className = "",
  image,
  busPasses,
  content
}) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics} >
          <div className={styles.wrapperGroup1000013498}>
            <img
              className={styles.wrapperGroup1000013498Child}
              loading="lazy"
              alt="image"
              src={UPLOADS_BASE_URL+image}
            />
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <h2 className={styles.busPasses}>{busPasses}</h2>
          <p className={styles.loremIpsumDolor}>
           {content}
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img className={styles.lineSeparatorIcon} alt="image" />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.applyNow}>Apply Now</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.applyNow1}>Apply Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards4;
