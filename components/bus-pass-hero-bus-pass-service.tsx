import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bus-pass-hero-bus-pass-service.module.css";

export type BusPassHeroBusPassServiceType = {
  className?: string;
  bG?: string;
  busPassServices?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const BusPassHeroBusPassService: NextPage<BusPassHeroBusPassServiceType> = ({
  className = "",
  bG,
  busPassServices,
  propPadding,
  propMarginLeft,
}) => {
  const busPassHeroBusPassServiceStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <section
      className={[styles.busPassHeroBusPassService, className].join(" ")}
      style={busPassHeroBusPassServiceStyle}
    >
      <img className={styles.bgIcon} alt="" src={bG} />
      <h1 className={styles.busPassServices}>{busPassServices}</h1>
      <div
        className={styles.applyRenewTravelEffortleWrapper}
        style={frameDiv1Style}
      >
        <h2
          className={styles.applyRenew}
        >{`Apply, Renew & Travel effortlessly with TGSRTC`}</h2>
      </div>
    </section>
  );
};

export default BusPassHeroBusPassService;
