import type { NextPage } from "next";
import styles from "./accordion-items.module.css";

export type AccordionItemsType = {
  className?: string;
  before6Am25?: string;
};

const AccordionItems: NextPage<AccordionItemsType> = ({
  className = "",
  before6Am25,
}) => {
  return (
    <div className={[styles.accordionItems, className].join(" ")}>
      <div className={styles.accordion}>
        <div className={styles.bg} />
        <div className={styles.before6Am}>{before6Am25}</div>
        <img
          className={styles.accordianDropdowntrueIcon}
          alt=""
          src="/accordian-dropdowntrue.svg"
        />
      </div>
    </div>
  );
};

export default AccordionItems;
