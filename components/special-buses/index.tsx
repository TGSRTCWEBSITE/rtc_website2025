import type { NextPage } from "next";
import styles from "./index.module.css";
import Carousel from "../carousel";
import SpecialBusesOffersCard from "../specialBusesOffersCard";

export type SpecialBusesType = {
  specialBusOffersTitle:string;
  specialBusOffersData:any;
};

const SpecialBuses:NextPage<SpecialBusesType>=({specialBusOffersTitle,specialBusOffersData})=>{
  const splBusOffersCards = specialBusOffersData?.map((item : any,  index :number) => (
    <SpecialBusesOffersCard
      key={index}
      item={item}
    />
  ));
    return(
        <section className={styles.busDustParent}>
          <div className={styles.reservationSpecialBusesOf}>
            <div className={styles.specialBusesOfferWrapper}>
              <h1 className={styles.specialBuses}>{specialBusOffersTitle}</h1>
            </div>
            <Carousel
              perView={1}
              children={[splBusOffersCards]}
              customStyles={styles.specialBusSlider}
            > 
            </Carousel>
          </div>
        </section>
    )
}
export default SpecialBuses;