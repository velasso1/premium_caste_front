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

    // headTitle: "ПОШИВ САЛОНОВ",
  },

  tinting: {
    headCols: ["Объекты", "Тонировочная плёнка", "Атермальная плёнка", "Укрепляющая плёнка", "Полиуретан"],
    data: [
      [{ value: "3 стекла" }, { value: "12 000" }, { value: "16 500" }, { value: "24 000" }, { value: "-" }],
      [{ value: "3 стекла + форточки" }, { value: "15 000" }, { value: "19 500" }, { value: "30 000" }, { value: "-" }],
      [{ value: "5 стёкол + форточки" }, { value: "18 000" }, { value: "22 500" }, { value: "36 000" }, { value: "-" }],
      [{ value: "2 боковых стекла" }, { value: "12 000" }, { value: "16 500" }, { value: "24 000" }, { value: "-" }],
      [{ value: "2 форточки" }, { value: "2 000" }, { value: "2 000" }, { value: "2 000" }, { value: "-" }],
      [
        { value: "Заднее стекло (большое)" },
        { value: "7 500" },
        { value: "10 000" },
        { value: "15 000" },
        { value: "-" },
      ],
      [{ value: "Лобовое стекло" }, { value: "10 500" }, { value: "13 500" }, { value: "21 000" }, { value: "-" }],
      [{ value: "Фары" }, { value: "-" }, { value: "-" }, { value: "-" }, { value: "9 000" }],
      [{ value: "ПТФ" }, { value: "-" }, { value: "-" }, { value: "-" }, { value: "3 000" }],
      [{ value: "Фонари" }, { value: "-" }, { value: "-" }, { value: "-" }, { value: "9 000" }],
    ],
    // headTitle: "ТОНИРОВАНИЕ СТЕКОЛ И ОПТИКИ",
  },

  light: {
    headCols: ["Вид работы", "Стоимость"],
    data: [
      [{ value: "Снятие/установка фар/ПТФ" }, { value: "3 000" }],
      [{ value: "Разбор/сбор фар на горячем герметике, ПТФ" }, { value: "10 000" }],
      [{ value: "Разбор/сбор фар на холодном герметике" }, { value: "12 000–15 000" }],
      [{ value: "Покраска масок и прочих внутренних элементов" }, { value: "8 000 – 22 000" }],
      [{ value: "Установка би-ксеноновых/диодных линз в фары" }, { value: "6 000 – 8 000" }],
      [
        { value: "Установка би-ксеноновых/диодных линз в фары с адаптивным (поворотным) механизмом" },
        { value: "10 000 – 12 000" },
      ],
      [{ value: "Установка и подключение ДХО внешних" }, { value: "6000" }],
      [
        {
          value:
            "Установка и подключение дополнительных внутренних модулей (ДХО, ангельские глазки, подсветка линз и т.д.)",
        },
        { value: "3 000" },
      ],

      [
        {
          value:
            "Установка контурной подсветки салона Ambient (многоцветная, многорежимная, с управлением по Bluetooth), включая компоненты - 10 / 18 / 22 точки",
        },
        { value: "25 000 / 35 000 / 40 000" },
      ],
    ],
    // headTitle: "ТОНИРОВАНИЕ СТЕКОЛ И ОПТИКИ",
  },
} as const;

async function getServicePrice(serviceName: keyof typeof serviceNames): Promise<ITableData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRICES[`${serviceName}`]);
    }, 1500);
  });
}

export { getServicePrice };
