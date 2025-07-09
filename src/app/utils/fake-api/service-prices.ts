import { ITableData } from "#ui/price-table/price-table.tsx";
import { serviceNames } from "#utils/auxuliary/services-items-list.ts";

interface IPrices {
  readonly [key: string]: ITableData;
}

export const PRICES: IPrices = {
  vinyl: {
    headCols: ["Класс авто", "Работа", "Плёнка"],
    data: [
      [{ value: "Базовый / Стандартный кузов" }, { value: "110 000" }, { value: "от 35 000" }],
      [
        { value: "Крупный / сложный / с большим количеством накладок кузов" },
        { value: "165 000" },
        { value: "от 42 000" },
      ],
    ],
    headTitle: "ПОЛНАЯ ОКЛЕЙКА",
  },
  sewing: {
    headCols: [
      "Элемент",
      "Снятие / Установка",
      "Экокожа",
      "Натуральная кожа текстурная",
      "Натуральная кожа гладкая (Nappa)",
      "Ткань",
      "Алькантара",
    ],
    data: [
      [
        { value: "Руль трёхспицевый" },
        { value: "3 000" },
        { value: "5 500" },
        { value: "8 500" },
        { value: "10 500" },
        { value: " " },
        { value: "13 500" },
      ],
      [
        { value: "Руль четырёхспицевый" },
        { value: "3 000" },
        { value: "5 500" },
        { value: "10 000" },
        { value: "12 000" },
        { value: " " },
        { value: "15 000" },
      ],
      [
        { value: "Руль с изменённой анатомией" },
        { value: "3 000" },
        { value: "10 500" },
        { value: "15 000" },
        { value: "18 000" },
        { value: " " },
        { value: "22 500" },
      ],
      [
        { value: "Наличие обогрева" },
        { value: " " },
        { value: " " },
        { value: "+2 000" },
        { value: " " },
        { value: " " },
        { value: " " },
      ],
      [
        { value: "Замена подложки или утолщение" },
        { value: " " },
        { value: " " },
        { value: "+2 000" },
        { value: " " },
        { value: " " },
        { value: " " },
      ],
      [
        { value: "Лекало под экокожу/кожу (если руль без штатной оплётки) " },
        { value: " " },
        { value: " " },
        { value: "+2 000 / +4 000" },
        { value: " " },
        { value: " " },
        { value: " " },
      ],

      [
        { value: "'Нулевая отметка'" },
        { value: " " },
        { value: " " },
        { value: "+2 000" },
        { value: " " },
        { value: " " },
        { value: " " },
      ],

      [
        { value: "Ремонт 'резиновой' основы руля" },
        { value: " " },
        { value: " " },
        { value: "+2 000 - 6 000" },
        { value: " " },
        { value: " " },
        { value: " " },
      ],

      [
        { value: "Сиденья (перед+зад)" },
        { value: "8 000" },
        { value: "120 000" },
        { value: "200 000" },
        { value: "240 000" },
        { value: " " },
        { value: " " },
      ],

      [
        { value: "Потолок + стойки + козырьки (базовый класс)" },
        { value: "10 000" },
        { value: " " },
        { value: " " },
        { value: " " },
        { value: "50 000" },
        { value: "80 000" },
      ],

      [
        { value: "Потолок + стойки + козырьки (крупный/сложный класс)" },
        { value: "15 000" },
        { value: " " },
        { value: " " },
        { value: " " },
        { value: "100 000" },
        { value: "170 000" },
      ],
    ],
    // headTitle: "ПОЛНАЯ ОКЛЕЙКА",
  },
} as const;
