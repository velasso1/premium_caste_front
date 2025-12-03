import { FC } from "react";

import { useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { NEW_PRICES } from "#utils/fake-api/service-prices.ts";

const NewPriceTable: FC = () => {
  const { service } = useParams<{ service: string }>();

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "inherit" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="price-table__row">
            <TableCell className="price-table__cell" align="center" colSpan={NEW_PRICES[`${service}`].cells.length}>
              {NEW_PRICES[`${service}`].title}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {NEW_PRICES[`${service}`].subtitles.map((subtitle) => {
            return (
              <TableRow className="price-table__row">
                <TableCell
                  className="price-table__cell"
                  colSpan={NEW_PRICES[`${service}`].cells.length}
                  style={{ color: "white" }}
                >
                  {subtitle}
                </TableCell>
              </TableRow>
            );
          })}

          <TableRow className="price-table__row">
            {NEW_PRICES[`${service}`].cells.map((cell) => {
              return <TableCell className="price-table__cell">{cell}</TableCell>;
            })}
          </TableRow>

          {NEW_PRICES[`${service}`].rows.map((row_item) => {
            return (
              <TableRow className="price-table__row">
                {row_item.map((row) => {
                  return <TableCell className="price-table__cell">{row}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewPriceTable;
