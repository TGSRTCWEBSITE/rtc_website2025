import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./reservation-hero-landing.module.css";
import { BOOK_YOUR_TRAVEL_TICKET } from "../constants";

export type ReservationHeroLandingType = {
  className?: string;
  maskGroup?: string;
  tGSRTCOnlineBusTicket?: string;
  bookingService?: string;
  bookYourTicketsHassleFree?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propLineHeight?: CSSProperties["lineHeight"];
  propWidth?: CSSProperties["width"];
  propTextShadow?: CSSProperties["textShadow"];
};

const ReservationHeroLanding: NextPage<ReservationHeroLandingType> = ({
  className = "",
  maskGroup,
  tGSRTCOnlineBusTicket,
  bookingService,
  bookYourTicketsHassleFree,
  propPadding,
  propLineHeight,
  propWidth,
  propTextShadow,
}) => {
  const reservationHeroLandingStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const tGSRTCOnlineBusContainerStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const bookYourTicketsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      textShadow: propTextShadow,
    };
  }, [propWidth, propTextShadow]);

  return (
    <section
      className={[styles.reservationHeroLanding, className].join(" ")}
      style={reservationHeroLandingStyle}
    >
      <img className={styles.maskGroupIcon} alt="reservation hero image" src={maskGroup} loading="lazy"/>
      <h1
        className={styles.tgsrtcOnlineBusContainer}
        style={tGSRTCOnlineBusContainerStyle}
      >
        <p className={styles.tgsrtcOnlineBus}>{tGSRTCOnlineBusTicket}</p>
        <p className={styles.bookingService}>{bookingService}</p>
      </h1>
      <h2 className={styles.bookYourTickets} style={bookYourTicketsStyle}>
        {bookYourTicketsHassleFree}
      </h2>
      <div className={styles.applyRenew} style={bookYourTicketsStyle}>
          {BOOK_YOUR_TRAVEL_TICKET}
      </div>
    </section>
  );
};

export default ReservationHeroLanding;
