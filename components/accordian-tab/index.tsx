import React from "react";
import Links from "../Links";
import AccordiansHeading from "../accordians-heading";
import BulletPoints from "../bullet-points";
import Tables from "../tables";
import TimingsOfBuses from "../timings-of-buses";
import Note from "../note";
import TableHeading from "../table-headings";
import styles from './index.module.css'
type typeOfTheObject = "link" | "heading" | "bullet points" | "table" | "note";


interface DataItem {
  type: string;
  text?: string;
  data?: string[] | any[];
}

interface AccordianTabProps {
  array: DataItem[];
}
const AccordianTab: React.FC<AccordianTabProps> = ({ array }) => {
  return (
    <div>
      {array !== undefined &&
        array.map((item, index) => {
          switch (item.type) {
          case "note":
            return <Note text={item?.text || ""} />;
            case "link":
              return <Links key={index} text={item.text || ""} />;
            case "heading":
              return (
                <AccordiansHeading key={index} heading={item.text || ""} />
              );
            case "bullet points":
              return <BulletPoints key={index} items={item.data as string[]} />;
            case "table":
              return (
                <Tables
                  key={index}
                  rows={item.data as { [key: string]: string | number }[]}
                />
              );
            case "table-heading":
              return <TableHeading heading={item.text || ""} />;
            case "timings":
              return <TimingsOfBuses data={item.data as string[]} />;
            case "text":
              return <p className={styles.text}>{item.text}</p>
            default:
              return null;
          }
        })}
    </div>
  );
};
export default AccordianTab;