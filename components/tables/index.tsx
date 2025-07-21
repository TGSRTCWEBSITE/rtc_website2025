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
  rowClassName?: any
}

const Tables: React.FC<TableProps> = ({
  rows = [],
  containerClassName,
  columnWidths,
  tableHeadCellStyles,
  tableCellStyles,
  rowClassName
}) => {
  if (rows?.length === 0) {
    return <div>No data available</div>;
  }
  const headers = rows[0];
  const bodyRows = rows.slice(1);

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
                  }`}
                key={key}
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  width: columnWidths ? columnWidths[key] : "auto",
                  color: "#FFFFFF",
                  borderBottom: "0px",
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
              className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow
                } ${rowClassName}`}
            >
              {Object.keys(row).map((key) => (
                <TableCell
                  className={`${styles.tableCell} ${tableCellStyles ? tableCellStyles : ""
                    }`}
                  key={key}
                  align="left"
                  sx={{
                    paddingTop: "15.5px",
                    paddingBottom: "15.5px",
                    paddingLeft: "20px",
                    width: columnWidths ? columnWidths[key] : "auto",
                    borderBottom: "0px"
                  }}
                >
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
