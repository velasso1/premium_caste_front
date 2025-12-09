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

// type PriceTableProps = { sections: PriceBook };

// const formatValue = (val: PriceValue) => (typeof val === "number" ? `${val.toLocaleString("ru-RU")} ₽` : val);
