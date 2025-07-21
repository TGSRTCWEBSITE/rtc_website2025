import type { NextPage } from "next";
import styles from "./index.module.css";
import TourismCardChip from "../tourism-card-chip";
import Button from '../button';
import { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useRef } from 'react';
import { TOURISM_CARD_BOOKNOW } from "../../constants";

export type TourismCardType = {
  placeName: string;
  image: string;
  pickupTime: string;
  pickupPoint: string;
  placesCovered: string;
  places: string[];
  packageDescription: string;
  button: string;
  link: string;
};

const TourismCard: NextPage<TourismCardType> = ({placeName,image,pickupPoint,pickupTime,placesCovered, places,link,packageDescription,button}) => {
  
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 900 || !cardRef.current) return;

    const cardElements = Array.from(document.querySelectorAll(`.${styles.tourismCard}`));
    let maxHeight = 0;

    cardElements.forEach(card => {
      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cardElements.forEach(card => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div ref={cardRef} className={styles.tourismCard}>
      <div className={styles.imageText}>
        <h2 className={styles.tourisamPlace}>{placeName}</h2>
        <div className={styles.imagePlaceholder}>
          <img
            className={styles.picturesIcon}
            loading="lazy"
            alt="tourism-card-image"
            src={UPLOADS_BASE_URL+image}
          />
        </div>
      </div>
      <div className={styles.tourismCardContent}>
        <div className={styles.contents}>
          <div className={styles.timePlace}>
            <div className={styles.calendar}>
              <img
                className={styles.calenderIcon}
                loading="lazy"
                alt="calender-icon"
                src="/calender-icon.svg"
              />
              <div className={styles.tourismTime}>{pickupTime}</div>
            </div>
            <div className={styles.pickup}>
              <img
                className={styles.pickupBusIcon}
                loading="lazy"
                alt="pickup-bus-icon"
                src="/pickup-bus-icon.svg"
              />
              <div className={styles.tourismPickup}>{pickupPoint}</div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.placesCovered}>{placesCovered}</div>
            <div className={styles.chipsAndText}>
              <div className={styles.chips}>
                {places.map((place,index:number) => (
                  <TourismCardChip  place={place} key={index} />
                ))}
              </div>
              <p className={styles.packageTourWill}>{packageDescription}</p>
            </div>
          </div>
        </div>
        {/* applies condition to display booknow button if it is available */}
        {button.length > 0 && (
             <div className={styles.buttonSection}>
             {/* updated the link in tourismCard */}
                   <div className={styles.cargoButton} onClick={()=>window.open(link)}>
                  <div className={styles.button}>
                  {button}
                  </div>        
              </div>
              
            </div>
        )}
     
      </div>
    </div>
  );
};

export default TourismCard;