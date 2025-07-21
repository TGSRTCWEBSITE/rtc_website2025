import type { NextPage } from "next";
import { useState, useEffect } from "react";
import BusPassOptionsCard from "../bus-pass-options-card.tsx";
import styles from "./index.module.css";
import { VIEW_MORE } from "../../constants";

export type BusPassOtherBusPassesType = {
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

const BusPassOtherBusPasses: NextPage<BusPassOptionsProps> = ({
  className = "",
  options,
  title,
}) => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth >= 600);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedCards = showAll ? options : options?.slice(0, 4);

  return (
    <section className={[styles.busPassOtherBusPasses, className].join(" ")}>
      <h1 className={styles.otherBusPasses}>{title}</h1>
      <div className={styles.cardsContainer}>
        {displayedCards?.map((card: any, index: number) => {
          return (
            <BusPassOptionsCard
              key={index}
              heading={card.title}
              description={card.content}
              viewAll={card.details}
              applyNow={card.button}
              index={index}
            />
          );
        })}
      </div>
      {!showAll && (
        <p className={styles.viewMoreButton} onClick={() => setShowAll(true)}>
          {VIEW_MORE}
        </p>
      )}
    </section>
  );
};

export default BusPassOtherBusPasses;
