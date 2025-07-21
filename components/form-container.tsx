import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-container.module.css";

export type FormContainerType = {
  className?: string;
  date?: string;
  prop?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FormContainer: NextPage<FormContainerType> = ({
  className = "",
  date,
  prop,
  propBorderRadius,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const formContainerStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const dateStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={[styles.formContainer, className].join(" ")}
      style={formContainerStyle}
    >
      <div className={styles.field}>
        <div className={styles.date} style={dateStyle}>
          {date}
        </div>
        <div className={styles.inputField}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
          <img className={styles.icons} alt="" src="/icons-2.svg" />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
