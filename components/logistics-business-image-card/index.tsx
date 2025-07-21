import type { NextPage } from "next";
import styles from "./index.module.css";

export type ImageCardsType = {
  className?: string;
  pictures?: string;
};

const ImageCards: NextPage<ImageCardsType> = ({
  className = "",
  pictures,
}) => {

  return (
    <div
      className={[styles.imageCards, className].join(" ")}
    >
      <div className={styles.imageText}>
        <div className={styles.imagePlaceholder} >
          <img className={styles.picturesIcon} alt="" src={pictures} />
          <div className={styles.imagePlaceholderChild} />
        </div>
        <div className={styles.busBhavan}>
          Energy Conservation Gold Awards for the year 2019-20 on improvement in
          fuel efficiency to Suryapet Depot.
        </div>
      </div>
      <div className={styles.contentsParent}>
        <div className={styles.contents}>
          <div className={styles.content1}>
            <div className={styles.calendar}>
              <img className={styles.frameIcon} alt="" />
              <div className={styles.amTo0800}>
                08:30 am to 08:00 pm (Weekends)
              </div>
            </div>
            <div className={styles.pickup}>
              <img className={styles.frameIcon1} alt="" />
              <div className={styles.pickupAlpha}>
                Pickup - Alpha Hotel Secundarabad
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <div
              className={styles.placesCovered}
            >{`Places covered & description`}</div>
            <div className={styles.chipsParent}>
              <div className={styles.chips}>
                <div className={styles.birlaMandirWrapper}>
                  <div className={styles.birlaMandir}>Birla Mandir</div>
                </div>
                <div className={styles.golkondaWrapper}>
                  <div className={styles.golkonda}>Golkonda</div>
                </div>
                <div className={styles.taramatiBaradariWrapper}>
                  <div className={styles.taramatiBaradari}>
                    Taramati Baradari
                  </div>
                </div>
                <div className={styles.chowmahallaPalaceWrapper}>
                  <div className={styles.chowmahallaPalace}>
                    Chowmahalla Palace
                  </div>
                </div>
                <div className={styles.durgamCheruvuParkWrapper}>
                  <div className={styles.durgamCheruvuPark}>
                    Durgam Cheruvu Park
                  </div>
                </div>
                <div className={styles.cableBridgeWrapper}>
                  <div className={styles.cableBridge}>Cable Bridge</div>
                </div>
                <div className={styles.lumbiniParkWrapper}>
                  <div className={styles.lumbiniPark}>Lumbini Park</div>
                </div>
              </div>
              <div
                className={styles.packageTourWill}
              >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.applyNow}>Book Now</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
