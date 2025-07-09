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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {tableData.headTitle ? (
            <TableRow>
              <TableCell
                align="center"
                colSpan={tableData.headCols.length}
                style={{ fontSize: "17px", fontWeight: 700 }}
              >
                {tableData.headTitle}
              </TableCell>
            </TableRow>
          ) : null}

          <TableRow>
            {tableData.headCols.map((item) => {
              return (
                <TableCell align="left" style={{ fontWeight: 700 }}>
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.data.map((item) => {
            return (
              <TableRow>
                {item.map((row) => {
                  return <TableCell>{row.value}</TableCell>;
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
