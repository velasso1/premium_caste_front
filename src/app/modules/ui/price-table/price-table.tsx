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
      sx={{
        mb: 3,
        overflowX: "auto",
        backgroundColor: "#0f1014",
        color: "#fff",
        border: "1px solid #1f222b",
        borderRadius: 2,
      }}
    >
      <Table
        size="small"
        sx={{
          minWidth: 650,
          backgroundColor: "#0f1014",
          color: "#fff",
          "& .MuiTableCell-root": {
            color: "#fff",
            borderBottom: "1px solid #1f222b",
            cursor: "pointer",
          },
          "& .MuiTableBody-root .MuiTableCell-root": {
            backgroundColor: "#0f1014",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          {tableData.headTitle ? (
            <TableRow>
              <TableCell
                align="center"
                colSpan={tableData.headCols.length}
                sx={{
                  fontWeight: 700,
                  backgroundColor: "#1a1d29",
                  color: "#ffffff",
                  borderBottom: "1px solid #2a2f3a",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  boxShadow: "inset 0 1px 0 #1f222b, inset 0 -4px 0 #ff500022",
                  py: 1.5,
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
                    fontWeight: 600,
                    backgroundColor: "#16181f",
                    color: "#fff",
                    borderBottom: "1px solid #ff5000",
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
                key={index}
                hover
                sx={{
                  backgroundColor: "#0f1014",
                  "&:hover": { backgroundColor: "#15171f" },
                  "& td": {
                    color: "#fff",
                    borderBottomColor: "#1f222b",
                  },
                  "&:hover td": {
                    borderBottomColor: "#ff5000",
                    backgroundColor: "#15171f",
                  },
                }}
              >
                {item.map((row, rowIdx) => {
                  return (
                    <TableCell
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
