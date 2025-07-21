import React from "react";
import styles from "./index.module.css";
interface TableHeadingProps {
  heading: string;
  containerClassName?: string;
}
const TableHeading: React.FC<TableHeadingProps> = ({
  heading,
  containerClassName,
}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <p className={styles.headingText}>{heading}</p>
    </div>
  );
};

export default TableHeading;
