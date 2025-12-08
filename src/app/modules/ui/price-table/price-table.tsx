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
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#0f1014", borderRadius: 2 }}
    >
      <Table
        sx={{
          minWidth: 650,
          backgroundColor: "#0f1014",
          "& th, & td": { borderBottom: "1px solid #1f222b" },
        }}
        aria-label="simple table"
      >
        <TableHead>
          {tableData.headTitle ? (
            <TableRow className="price-table__row">
              <TableCell
                className="price-table__cell"
                align="center"
                colSpan={tableData.headCols.length}
                sx={{
                  color: "#fff",
                  backgroundColor: "#16181f",
                  borderBottomColor: "#ff5000",
                  fontWeight: 700,
                }}
              >
                {tableData.headTitle}
              </TableCell>
            </TableRow>
          ) : null}

          <TableRow>
            {tableData.headCols.map((item) => {
              return (
                <TableCell
                  key={item}
                  align="left"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    borderBottomColor: "#ff5000",
                    backgroundColor: "#16181f",
                  }}
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
              <TableRow
                className="price-table__row"
                key={index}
                sx={{
                  "&:hover": { backgroundColor: "#15171f" },
                  "& td": { color: "#fff", borderBottomColor: "#1f222b" },
                  "&:hover td": {
                    borderBottomColor: "#ff5000",
                    backgroundColor: "#15171f",
                  },
                }}
              >
                {item.map((row, rowIdx) => {
                  return (
                    <TableCell
                      className="price-table__cell--xs"
                      key={rowIdx}
                      colSpan={row.colSpan}
                      rowSpan={row.rowSpan}
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
