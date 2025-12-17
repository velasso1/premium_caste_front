import { FC } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { classesData } from "#utils/fake-api/service-prices.ts";

const VehicleClassesTable: FC = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        mb: 2,
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
          minWidth: 400,
          backgroundColor: "#0f1014",
          color: "#fff",
          "& .MuiTableCell-root": {
            color: "#fff",
            borderBottom: "1px solid #1f222b",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={2}
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
              КЛАССЫ общее
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 600,
                backgroundColor: "#16181f",
                color: "#fff",
                borderBottom: "1px solid #ff5000",
                width: "30%",
              }}
            >
              Класс
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                backgroundColor: "#16181f",
                color: "#fff",
                borderBottom: "1px solid #ff5000",
              }}
            >
              Типы автомобилей
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classesData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: "#0f1014",
                "&:hover": { backgroundColor: "#15171f" },
                "& td": {
                  color: "#fff",
                  borderBottomColor: "#1f222b",
                },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: 600,
                  verticalAlign: "top",
                }}
              >
                {row.class}
              </TableCell>
              <TableCell>
                {row.vehicles.map((vehicle, idx) => (
                  <div key={idx} style={{ marginBottom: idx < row.vehicles.length - 1 ? "4px" : "0" }}>
                    - {vehicle}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleClassesTable;
