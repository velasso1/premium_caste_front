// import { FC } from "react";

// import { useParams } from "react-router-dom";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// import { NEW_PRICES } from "#utils/fake-api/service-prices.ts";

// const NewPriceTable: FC = () => {
//   const { service } = useParams<{ service: string }>();

//   return (
//     <TableContainer component={Paper} style={{ backgroundColor: "inherit" }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow className="price-table__row">
//             <TableCell className="price-table__cell" align="center" colSpan={NEW_PRICES[`${service}`].cells.length}>
//               {NEW_PRICES[`${service}`].title}
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {NEW_PRICES[`${service}`].subtitles.map((subtitle) => {
//             return (
//               <TableRow className="price-table__row">
//                 <TableCell
//                   className="price-table__cell"
//                   colSpan={NEW_PRICES[`${service}`].cells.length}
//                   style={{ color: "white" }}
//                 >
//                   {subtitle}
//                 </TableCell>
//               </TableRow>
//             );
//           })}

//           <TableRow className="price-table__row">
//             {NEW_PRICES[`${service}`].cells.map((cell) => {
//               return <TableCell className="price-table__cell">{cell}</TableCell>;
//             })}
//           </TableRow>

//           {NEW_PRICES[`${service}`].rows.map((row_item) => {
//             return (
//               <TableRow className="price-table__row">
//                 {row_item.map((row) => {
//                   return <TableCell className="price-table__cell">{row}</TableCell>;
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default NewPriceTable;

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/**
 * Универсальная таблица для отображения прайса.
 * Данные задаются декларативно через Section/RowCell.
 */

export type PriceValue = number | string; // допускаем "от 3 000" или числа

export type RowCell =
  | { kind: "text"; label: string; note?: string }
  | { kind: "price"; label?: string; value: PriceValue };

export type TableRowData = {
  id: string;
  cells: RowCell[];
};

export type Column = { id: string; label: string; width?: number | string };

export type Section = {
  id: string;
  title: string;
  subtitle?: string;
  columns: Column[]; // названия столбцов (классы, варианты ремней и т.п.)
  rows: TableRowData[];
};

export type PriceBook = Section[];

type PriceTableProps = { sections: PriceBook };

const formatValue = (val: PriceValue) => (typeof val === "number" ? `${val.toLocaleString("ru-RU")} ₽` : val);

const NewPriceTable: React.FC<PriceTableProps> = ({ sections }) => (
  <>
    {sections.map((section) => (
      <TableContainer key={section.id} component={Paper} sx={{ mb: 3, overflowX: "auto" }}>
        <Table size="small" aria-label={section.title}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={section.columns.length} sx={{ fontWeight: 700, backgroundColor: "#e8f5e9" }}>
                {section.title}
                {section.subtitle ? ` — ${section.subtitle}` : ""}
              </TableCell>
            </TableRow>
            <TableRow>
              {section.columns.map((col) => (
                <TableCell key={col.id} sx={{ fontWeight: 600, width: col.width }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {section.rows.map((row) => (
              <TableRow key={row.id} hover>
                {row.cells.map((cell, idx) => (
                  <TableCell key={idx}>{cell.kind === "text" ? cell.label : formatValue(cell.value)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ))}
  </>
);

// Пример минимальных данных. Замените/дополните фактическим прайсом из макетов.
export const samplePriceBook: PriceBook = [
  {
    id: "paint-protection-ppf-front",
    title: "Защитные плёнки (прозрачный полиуретан), кузов, передок",
    columns: [
      { id: "col-0", label: "Опция" },
      { id: "class1", label: "Класс 1" },
      { id: "class2", label: "Класс 2" },
      { id: "class3", label: "Класс 3" },
      { id: "class4", label: "Класс 4" },
    ],
    rows: [
      {
        id: "front",
        cells: [
          { kind: "text", label: "Front (бампер, капот, крылья…)" },
          { kind: "price", value: 64000 },
          { kind: "price", value: 71000 },
          { kind: "price", value: 82000 },
          { kind: "price", value: 89000 },
        ],
      },
      {
        id: "front-plus",
        cells: [
          { kind: "text", label: "Front+ (стойки, крыша перед…)" },
          { kind: "price", value: 91000 },
          { kind: "price", value: 98000 },
          { kind: "price", value: 109000 },
          { kind: "price", value: 116000 },
        ],
      },
    ],
  },
];

export default NewPriceTable;
