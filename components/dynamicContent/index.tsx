import React from "react";
import styles from "./index.module.css";
interface DynamicContentProps {
  number: number;
  ContentComponent: React.ComponentType;
  backgroundColor: string;
  itemContentStyles?: string;
  sequenceStyles?: string;
}
const DynamicContent = ({
  number,
  ContentComponent,
  backgroundColor,
  itemContentStyles,
  sequenceStyles,
}: DynamicContentProps) => {
  return (
    <div style={{ backgroundColor }}>
      <div
        className={`${styles.contentItem} ${itemContentStyles || ""}`}
      >
        <div className={`${styles.sequence} ${sequenceStyles}`}>{`${number
          .toString()
          .padStart(2, "0")}`}</div>
        <ContentComponent />
      </div>
    </div>
  );
};
export default DynamicContent;
