import type { NextPage } from "next";
import OtherBusPassesCard from "../other-bus-passes-card";
import styles from "./index.module.css";
export type BusPassOptionsType = {
  className?: string;
};
interface BusPassOption {
  title: string;
  content: string;
  image: string;
  details: string;
  button: string;

}

interface BusPassOptionsProps {
  options: BusPassOption[];
  title: string;
  className?: string;
}
const BusPassOptions: NextPage<BusPassOptionsProps> = ({ className = "", options, title }) => {
  return (
    <section className={[styles.busPassOptions, className].join(" ")}>
      
      <div className={styles.busPassOptionsWrapper}>
        <h1 className={styles.busPassOptions1}>{title}</h1>
      </div>
      <div className={styles.cardsContainer}>
        {options?.map((card, index) => {
          return (
            <OtherBusPassesCard
              key={index}
              heading={card.title}
              description={card.content}
              viewAll={card.details}
              image={card.image}
              applyNow={card.button}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BusPassOptions;
