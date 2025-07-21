import type { NextPage } from "next";
import TourismCard from "../tourism-card";
import styles from "./index.module.css";

export interface TourismPlace {
  placeName: string;
  image: string;
  pickupTime: string;
  pickupPoint: string;
  placesCovered: string;
  places: string[];
  packageDescription: string;
  button: string;
  link: string;
}

export type ReservationDestinationsType = {
  destinationsTitle: string;
  tourismCards:any;
  className?: string;
};

const ReservationDestinations:NextPage<ReservationDestinationsType> = ({ destinationsTitle,tourismCards, className = "" }) => {
  return (
    <section className={[styles.reservationDestinations, className].join(" ")}>
      <div className={styles.destinationsWrapper}>
        <h1 className={styles.destinations}>{destinationsTitle}</h1>
      </div>
      <div className={styles.tourismCards}>
         {tourismCards?.map((tour : TourismPlace,index:number) => (
            <TourismCard  
              key={index}
              placeName={tour.placeName} 
              image={tour.image} 
              pickupTime={tour.pickupTime} 
              pickupPoint={tour.pickupPoint} 
              placesCovered={tour.placesCovered}
              places={tour.places} 
              packageDescription={tour.packageDescription} 
              button={tour.button} 
              link = {tour.link}
            />
          ))}
      </div>
    </section>
  );
};

export default ReservationDestinations;