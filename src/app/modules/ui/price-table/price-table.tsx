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
    <TableContainer component={Paper} style={{ backgroundColor: "inherit" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {tableData.headTitle ? (
            <TableRow>
              <TableCell
                align="center"
                colSpan={tableData.headCols.length}
                style={{ fontSize: "17px", fontWeight: 700, color: "#fff", borderBottomColor: "#ff5000" }}
              >
                {tableData.headTitle}
              </TableCell>
            </TableRow>
          ) : null}

          <TableRow>
            {tableData.headCols.map((item) => {
              return (
                <TableCell align="left" style={{ fontWeight: 700, color: "#fff", borderBottomColor: "#ff5000" }}>
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.data.map((item, index) => {
            return (
              <TableRow>
                {item.map((row) => {
                  return (
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottomColor: "#ff5000",
                        backgroundColor: index % 2 === 0 ? "#0000003f" : "inherit",
                      }}
                    >
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
