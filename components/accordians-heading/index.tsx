import React from "react";
import styles from "./index.module.css";
interface AccordiansHeadingProps {
  heading: string;
  containerClassName?: string;
}
const AccordiansHeading: React.FC<AccordiansHeadingProps> = ({
  heading,
  containerClassName,
}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <p className={styles.headingText}>{heading}</p>
    </div>
  );
};

export default AccordiansHeading;
