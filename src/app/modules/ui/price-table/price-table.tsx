import { FC } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface IRows {
  value: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface ITableData {
  headCols: string[];
  data: IRows[][];
  headTitle?: string;
}

export interface ITableProps {
  tableData: ITableData;
}

const PriceTable: FC<ITableProps> = ({ tableData }) => {
  return (
    <TableContainer component={Paper} style={{ backgroundColor: "inherit" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {tableData.headTitle ? (
            <TableRow className="price-table__row">
              <TableCell className="price-table__cell" align="center" colSpan={tableData.headCols.length}>
                {tableData.headTitle}
              </TableCell>
            </TableRow>
          ) : null}

          <TableRow>
            {tableData.headCols.map((item, index) => {
              return (
                <TableCell
                  key={index}
                  align="left"
                  style={{ fontWeight: 700, color: "#fff", borderBottomColor: "#ff5000" }}
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.data.map((item, index) => {
            return (
              <TableRow className="price-table__row" key={index}>
                {item.map((row) => {
                  return (
                    <TableCell className="price-table__cell--xs" colSpan={row.colSpan} rowSpan={row.rowSpan}>
                      {row.value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
