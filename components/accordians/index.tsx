import React from "react";
import styles from "./index.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AccordianTab from "../accordian-tab";

export interface DataItem {
  type: string;
  text?: string;
  data?: string[] | { [key: string]: string | number }[];
}
interface AccordionItemProps {
  name: string;
  info: DataItem[];
  expanded: boolean;
  onChange: () => void;
  containerClassName?: string;
  headingStyles?: string;
  extraDropdownClassName?: string
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  name,
  info,
  expanded,
  onChange,
  containerClassName,
  headingStyles,
  extraDropdownClassName
}) => {
  return (
    <div className={styles.accordian}>
      <Accordion
        className={`${styles.dropdown} ${extraDropdownClassName || ''} ${expanded ? styles.expandedAccordion : ''}`}
        expanded={expanded}
        onChange={onChange}
        sx={{
          "&.Mui-expanded": {
            margin: "0px",
            boxShadow: "0px 4px 10px 0px #E8E8E880"
          },
          "&.MuiPaper-root-MuiAccordion-root": {
            boxShadow: "0px 4px 10px 0px #E8E8E880"
          },

        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <HorizontalRuleIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"

          sx={{

            margin: "0px", ".MuiAccordionSummary-content": {
              margin: "16px 0px"
            },
            ".MuiAccordionSummary-content.Mui-expanded": {
              margin: "0px",
            },
            ".MuiAccordionSummary-expandIconWrapper":{
              color:"#000000 !important"
            }
          }}
          className={styles.before6AmContainer1}
        >
          <li className={`${styles.accordianHeading} ${headingStyles}`}>
            {name}
          </li>
        </AccordionSummary>
      </Accordion>
      {expanded && (
        <AccordionDetails  sx={{ padding: "0px" }} className={styles.accordianDetails}>
          <div className={`${styles.accordianTab} ${containerClassName}`}>
            <AccordianTab array={info} />
          </div>
        </AccordionDetails>
      )}
    </div>
  );
};

export default AccordionItem;
