import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import styles from "./index.module.css";

interface TableProps {
  rows: Array<{ [key: string]: any }>;
  containerClassName?: string;
  columnWidths?: any;
  tableHeadCellStyles?: any;
  tableCellStyles?: any;
  rowsClassName?: any;
  Links: string[];
}

const CustomTable: React.FC<TableProps> = ({
  rows = [],
  containerClassName,
  columnWidths,
  tableHeadCellStyles,
  tableCellStyles,
  rowsClassName,
  Links,
}) => {
  if (rows?.length === 0) {
    return <div>No data available</div>;
  }
//view details data is directly accesing from the strapi
 

  const headers: { [key: string]: any } = rows[0];
  const bodyRows = rows.slice(1);

  const renderCellContent = (key: string, index: number, row: any) => {
    if (key === "Action") {
      if (Links[index]) {
        return (
          <a
            className={styles.actionButton}
            // Added Base URL to the PDF link
            href={process.env.BASE_URL + Links[index]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100px !important" }}
          >
            {row[key]}
          </a>
        );
      } else {
        return "";
      }
    }
    // Download button is added to the table 
    else if(key === "Download"){
      if (Links[index]) {
        return (
          <a
            className={styles.actionButton}
            href={Links[index]}
            // target="_blank"
            download={"tender_report.pdf"}
            rel="noopener noreferrer"
            style={{ width: "100px !important" }}
          >
            {row[key]}
          </a>
        );
      } else {
        return "";
      }
    }
     else {
      return row[key];
    }
  };

  return (
    <TableContainer
      className={`${styles.tableContainer} ${containerClassName}`}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow className={styles.tableHead}>
            {Object.keys(headers).map((key) => (
              <TableCell
                className={`${styles.tableHeadCell} ${tableHeadCellStyles ? tableHeadCellStyles : ""
                  } ${key === "Action" ? styles.centerAlign : ""}`}
                key={key}
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px !important",
                  width: "0px",
                  color: "#FFFFFF",
                  fontWeight: "600 !important"
                }}
              >
                {headers[key]}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyRows.map((row, index) => (
            <TableRow
              key={index}
              className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow} ${styles.additionalClassName
                } ${rowsClassName}`}
            >
              {Object.keys(row).map((key: string) => (
                <TableCell
                  className={`${styles.tableCell} ${tableCellStyles ? tableCellStyles : ""
                    }`}
                  key={key}
                  align="left"
                  sx={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px !important",
                    width: columnWidths ? columnWidths[key] : "0px",

                  }}
                >
                  {renderCellContent(key, index, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
