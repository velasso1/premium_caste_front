import { ITableData } from "#ui/price-table/price-table.tsx";
import { serviceNames } from "#utils/auxuliary/services-items-list.ts";
import { PriceBook } from "#utils/prices-types/price-table-types.ts";

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
      "Алькантара",
      "Доп. работы",
    ],
    data: [
      [
        { value: "Руль трёхспицевый" },
        { value: "3 000 ₽" },
        { value: "5 500 ₽" },
        { value: "8 500 ₽" },
        { value: "10 500 ₽" },
        { value: "13 500 ₽" },
        { value: "" },
      ],
      [
        { value: "Руль четырёхспицевый" },
        { value: "3 000 ₽" },
        { value: "5 500 ₽" },
        { value: "10 000 ₽" },
        { value: "12 000 ₽" },
        { value: "15 000 ₽" },
        { value: "" },
      ],
      [
        { value: "Руль с изменённой анатомией" },
        { value: "3 000 ₽" },
        { value: "10 500 ₽" },
        { value: "15 000 ₽" },
        { value: "18 000 ₽" },
        { value: "22 500 ₽" },
        { value: "" },
      ],
      [
        { value: "Если есть обогрев" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "+2 000 ₽" },
      ],
      [
        { value: "Добавить перфорацию" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "+2 000 ₽" },
      ],
      [
        { value: "Замена подложки" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "+3 000 ₽" },
      ],
      [
        { value: "Ремонт 'резиновой' основы руля, от" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "+2 000 ₽" },
      ],
      [
        { value: "Утолщение, вкл. новое лекало" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "+7 000 ₽" },
      ],
      [
        { value: "'Нулевая' отметка" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "+2 000 ₽" },
      ],
      [
        { value: "Изменение анатомии руля" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "30 000 ₽" },
      ],
      [
        { value: "Изготовление 'косточек' для руля под ламинацию карбоном, аквапечать и т.д." },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "22 000 ₽" },
      ],
      [
        { value: "Изменение анатомии автомобильного сиденья" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "45 000 ₽" },
      ],
      [
        { value: "Изменение анатомии мото сиденья" },
        { value: " " },
        { value: " " },
        { value: "" },
        { value: " " },
        { value: " " },
        { value: "22 000 ₽" },
      ],
    ],

    // headTitle: "ПОШИВ САЛОНОВ",
  },

  tinting: {
    headCols: ["Объекты", "Тонировочная плёнка", "Атермальная плёнка", "Укрепляющая плёнка", "Демонтаж плёнки"],
    data: [
      [{ value: "3 стекла" }, { value: "12 000" }, { value: "16 500" }, { value: "24 000" }, { value: "" }],
      [{ value: "3 стекла + форточки" }, { value: "15 000" }, { value: "19 500" }, { value: "30 000" }, { value: "" }],
      [{ value: "5 стёкол + форточки" }, { value: "18 000" }, { value: "22 500" }, { value: "36 000" }, { value: "" }],
      [{ value: "2 боковых стекла" }, { value: "7 500" }, { value: "9 000" }, { value: "15 000" }, { value: "3 000" }],
      [{ value: "2 форточки" }, { value: "3 000" }, { value: "3 000" }, { value: "3 000" }, { value: "1 500" }],
      [
        { value: "Заднее стекло (большое)" },
        { value: "7 500" },
        { value: "10 000" },
        { value: "15 000" },
        { value: "6 000" },
      ],
      [{ value: "Лобовое стекло" }, { value: "10 500" }, { value: "13 500" }, { value: "21 000" }, { value: "4 500" }],
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
  },

  soundproofing: {
    headCols: ["Деталь", "Стандарт", "Оптимал", "Премиум"],
    data: [
      [
        { value: "Крыша" },
        { value: "Practic 2.1 + П4В Space 2.0 + Комфорт 6 / Absorber A15", colSpan: 2, rowSpan: 4 },
        { value: "Jack + Комфорт 3 + Герметон 7" },
      ],
      [{ value: "Двери" }, { value: "Jack + Jack/Bass + Герметон А15" }],
      [{ value: "Пол салона и багажника" }, { value: "Black Jack + Prizma / Paradox / Membrane" }],
      [{ value: "Крышка багажника" }, { value: "Jack + Герметон А15" }],
    ],
  },

  sound: {
    headCols: ["Вид работ", "Стоимость"],
    data: [
      [
        {
          value:
            "Установка головного устройства 2DIN в штатное место с выводом микрофона, GPS-антенны, USB-модема, USB-входа, AUX’а",
        },
        { value: "8 000" },
      ],
      [
        {
          value: "Установка динамиков коаксиальных в штатные места",
        },
        { value: "5 000" },
      ],
      [
        {
          value: "Установка динамиков 2-х компонентных в штатные места",
        },
        { value: "7 000" },
      ],
      [
        {
          value:
            "Установка и подключение 4-х канального усилителя (включая протяжку силовых, межблочных/сигнальных кабелей, акустических кабелей, работу по замене динамиков, изготовление простого подиума под усилитель)",
        },
        { value: "25 000" },
      ],
      [
        {
          value:
            "Установка и подключение активного сабвуфера (включая, протяжку силовых, межблочных/сигнальных кабелей)",
        },
        { value: "10 000" },
      ],
      [
        {
          value: "Проставочные кольца под динамики, пара",
        },
        { value: "800" },
      ],
      [
        {
          value: "Изготовление подиумов в стойки, пара, включая материал",
        },
        { value: "20 000" },
      ],
      [
        {
          value: "Оформление багажника",
        },
        { value: "10 000" },
      ],
      [
        {
          value: "Изготовление корпуса для сабвуфера «стелс» , включая материал",
        },
        { value: "45 000" },
      ],
    ],
  },

  detailing: {
    headCols: ["Услуга", "Класс 1", "Класс 2", "Класс 3", "Класс 4"],
    data: [
      [
        { value: "Чистка интерьера 'стандарт'" },
        { value: "8 000 ₽" },
        { value: "12 000 ₽" },
        { value: "14 000 ₽" },
        { value: "16 000 ₽" },
      ],
      [
        { value: "Чистка интерьера 'детейлинг'" },
        { value: "12 000 ₽" },
        { value: "18 000 ₽" },
        { value: "24 000 ₽" },
        { value: "30 000 ₽" },
      ],
      [
        { value: "Одношаговая полировка" },
        { value: "9 000 ₽" },
        { value: "12 000 ₽" },
        { value: "15 000 ₽" },
        { value: "18 000 ₽" },
      ],
      [
        { value: "Двухшаговая полировка" },
        { value: "14 000 ₽" },
        { value: "18 000 ₽" },
        { value: "23 000 ₽" },
        { value: "29 000 ₽" },
      ],
      [
        { value: "Нанесение 'жидкого стекла' (с полировкой)" },
        { value: "24 000 ₽" },
        { value: "30 000 ₽" },
        { value: "36 000 ₽" },
        { value: "42 000 ₽" },
      ],
      [
        { value: "Абразивная полировка" },
        { value: "18 000 ₽" },
        { value: "23 000 ₽" },
        { value: "28 000 ₽" },
        { value: "33 000 ₽" },
      ],
      [
        { value: "Нанесение керамики (с полировкой)" },
        { value: "30 000 ₽" },
        { value: "38 000 ₽" },
        { value: "46 000 ₽" },
        { value: "54 000 ₽" },
      ],
      [
        { value: "Нанесение керамики на плёнку" },
        { value: "15 000 ₽" },
        { value: "20 000 ₽" },
        { value: "25 000 ₽" },
        { value: "30 000 ₽" },
      ],
      [
        { value: "Антидождь полный (все стёкла)" },
        { value: "5 000 ₽" },
        { value: "7 000 ₽" },
        { value: "9 000 ₽" },
        { value: "11 000 ₽" },
      ],
      [
        { value: "Антидождь передняя полусфера" },
        { value: "3 500 ₽" },
        { value: "4 500 ₽" },
        { value: "5 500 ₽" },
        { value: "6 500 ₽" },
      ],
      [
        { value: "Полировка одной детали" },
        { value: "1 000 ₽" },
        { value: "1 000 ₽" },
        { value: "1 000 ₽" },
        { value: "1 000 ₽" },
      ],
      [
        { value: "Полировка фар, пара" },
        { value: "3 000 ₽" },
        { value: "3 000 ₽" },
        { value: "3 000 ₽" },
        { value: "3 000 ₽" },
      ],
      [
        { value: "Шлифовка фар, пара" },
        { value: "15 000 ₽" },
        { value: "15 000 ₽" },
        { value: "15 000 ₽" },
        { value: "15 000 ₽" },
      ],
    ],
  },

  equipment: {
    headCols: ["Вид работы", "Стоимость"],
    data: [
      [
        {
          value:
            "Установка и скрытое подключение регистратора (на зажигание), 1 камера / 2 камеры (перед + зад), работа",
        },
        { value: "8 000 / 12 000" },
      ],
      [
        {
          value: "Установка доводчиков дверей, 4 шт., включая оборудование",
        },
        { value: "54 000" },
      ],
      [
        {
          value:
            "Установка контурной подсветки салона Ambient (многоцветная, многорежимная, с управлением по Bluetooth), включая компоненты - 10 / 18 / 22 точки",
        },
        { value: "25 000 / 35 000 / 40 000" },
      ],
      [
        {
          value: "Установка универсальной системы кругового обзора 360, включая оборудование",
        },
        { value: "70 000" },
      ],
      [
        {
          value: "Установка системы кругового обзора 360 под штатное ГУ, включая оборудование",
        },
        { value: "105 000" },
      ],
      [
        {
          value: "Установка камеры заднего вида, работа",
        },
        { value: "8 000" },
      ],
      [
        {
          value: "Установка парктроников (передних или задних), работа",
        },
        { value: "8 000" },
      ],
      [
        {
          value:
            "Установка охранной системы Scher-Khan X4 Compact (управление через приложение с телефона и метки, открытие/закрытие, автозапуск и т.д.)",
        },
        { value: "34 500" },
      ],
      [
        {
          value:
            "Установка охранной системы Scher-Khan X6 Compact (управление через приложение с телефона и метки, открытие/закрытие, автозапуск и т.д. + точно позиционирование автомобиля по GPS)",
        },
        { value: "37 700" },
      ],
      [
        {
          value: "Установка дополнительных модулей света (балки, фары-искатели т.д.), работа",
        },
        { value: "6 000" },
      ],
      [
        {
          value: "Установка дополнительных клаксонов, СГУ, стробоскопов и т.д., работа",
        },
        { value: "6 000" },
      ],
    ],
  },

  disks: {
    headCols: ["Опция", "Стоимость за комплект, 4 диска"],
    data: [
      [{ value: 'Кованые диски VISSOL, ширина 8-13", диаметр 18"' }, { value: "244 000 ₽" }],
      [{ value: 'Кованые диски VISSOL, ширина 8-11", диаметр 19"' }, { value: "274 000 ₽" }],
      [{ value: 'Кованые диски VISSOL, ширина 8-12.5", диаметр 20"' }, { value: "284 000 ₽" }],
      [{ value: 'Кованые диски VISSOL, ширина 8.5-13", диаметр 21"' }, { value: "314 000 ₽" }],
      [{ value: 'Кованые диски VISSOL, ширина 8.5-12.5", диаметр 22"' }, { value: "340 000 ₽" }],
      [{ value: 'Кованые диски VISSOL, ширина 9.5-12.5", диаметр 23"' }, { value: "488 000 ₽" }],
      [{ value: 'Кованые диски VISSOL, ширина 9.5-12", диаметр 24"' }, { value: "518 000 ₽" }],
      [{ value: "Дизайн с широкой полкой" }, { value: "+20 000 ₽" }],
      [{ value: "Алмазная проточка" }, { value: "+16 000 ₽" }],
      [{ value: "Металлическая плашка-табличка" }, { value: "+15 000 ₽" }],
      [{ value: "Крышки PremiumCaste / VISSOL" }, { value: "0 ₽" }],
      [{ value: "Колпачок однотонный" }, { value: "+8 000 ₽" }],
      [{ value: "Колпачок цветной" }, { value: "+20 000 ₽" }],
      [{ value: "Колпачок пластиковый" }, { value: "+20 000 ₽" }],
      [{ value: "Спиннер с лого авто" }, { value: "+20 000 ₽" }],
      [{ value: "Спиннер однотонный + лого" }, { value: "+50 000 ₽" }],
      [{ value: "Спиннер цветной" }, { value: "+60 000 ₽" }],
      [{ value: "Гравировка PremiumCaste / VISSOL в цвет диска" }, { value: "0 ₽" }],
      [{ value: "Гравировка PremiumCaste / VISSOL в свой цвет" }, { value: "+8 000 ₽" }],
      [{ value: "Гравировка своя в цвет диска" }, { value: "+12 000 ₽" }],
      [{ value: "Гравировка своя в особый цвет" }, { value: "+20 000 ₽" }],
      [{ value: "Декоративные болты" }, { value: "+20 000 ₽" }],
      [{ value: "Ручная зеркальная полировка" }, { value: "+50 000 ₽" }],
      [{ value: "Сквозные отверстия в спицах" }, { value: "+40 000 ₽" }],
      [{ value: "Milling (проточка на скошенных гранях)" }, { value: "+50 000 ₽" }],
      [{ value: "Насечки на ободе. Sport." }, { value: "+20 000 ₽" }],
    ],
  },

  //
} as const;

//
interface INewPricesItem {
  title: string;
  subtitles: string[];
  rows: string[][];
  cells: string[];
  table_data: [];
}

interface INewPrices {
  [key: string]: INewPricesItem;
}

export const NEW_PRICES: INewPrices = {
  safety: {
    // title - заголовок таблицы
    title:
      "ЗАЩИТНЫЕ ПЛЁНКИ (прозрачный полиуретан), зоны риска, 'под ключ' - оклейка, разбор/сбор, плёнка, прочие материалы",
    // subtitles - подзаголовки таблицы
    subtitles: [
      "ФРОНТ - бампер, капот, крылья, фары (и ПТФ, если есть)",
      "ФРОНТ+ - 'фронт' + стойки лобового стекла, полоса на крышу, зеркала, зоны под ручками, погрузочная зона багажника/бампера",
    ],
    table_data: [],
    // cells - ячейки оглавления столбцов
    cells: ["Оклейка", "Класс 1", "Класс 2", "Класс 3", "Класс 4"],

    // rows - каждый массив - новая строка, каждый вложенный массив - ячейки в данной строке
    rows: [
      ["Фронт, Union PPF 190", "64,000 ₽", "71,000 ₽", "82,000 ₽", "89,000 ₽"],
      ["Фронт+, Union PPF 190", "91,000 ₽", "98,000 ₽", "109,000 ₽", "116,000 ₽"],
    ],
  },
};

export const samplePriceBook: PriceBook = [
  {
    id: "ppf-front",
    title:
      'ЗАЩИТНЫЕ ПЛЁНКИ (прозрачный полиуретан), зона риска, "под ключ" — оклейка, разбор/сбор, плёнка, прочие материалы',
    subtitle:
      "ФРОНТ — бампер, капот, крылья, фары (и ПТФ, если есть); ФРОНТ+ добавляет стойки лобового, полосы на крышу, хром, зоны под ручками, погружную защиту бампера/багажника",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c1", label: "Класс 1" },
      { id: "c2", label: "Класс 2" },
      { id: "c3", label: "Класс 3" },
      { id: "c4", label: "Класс 4" },
    ],
    rows: [
      {
        id: "Фронт-union",
        cells: [
          { kind: "text", label: "Фронт, Union PPF 190" },
          { kind: "price", value: 64000 },
          { kind: "price", value: 71000 },
          { kind: "price", value: 82000 },
          { kind: "price", value: 89000 },
        ],
      },
      {
        id: "Фронт-plus-union",
        cells: [
          { kind: "text", label: "Фронт+, Union PPF 190" },
          { kind: "price", value: 91000 },
          { kind: "price", value: 98000 },
          { kind: "price", value: 109000 },
          { kind: "price", value: 116000 },
        ],
      },
      {
        id: "Фронт-hexis",
        cells: [
          { kind: "text", label: "Фронт, Hexis Bodyfence X" },
          { kind: "price", value: 88000 },
          { kind: "price", value: 95000 },
          { kind: "price", value: 110000 },
          { kind: "price", value: 117000 },
        ],
      },
      {
        id: "Фронт-plus-hexis",
        cells: [
          { kind: "text", label: "Фронт+, Hexis Bodyfence X" },
          { kind: "price", value: 119000 },
          { kind: "price", value: 126000 },
          { kind: "price", value: 141000 },
          { kind: "price", value: 148000 },
        ],
      },
    ],
  },
  {
    id: "ppf-body-full",
    title:
      'ЗАЩИТНЫЕ ПЛЁНКИ (прозрачный полиуретан), кузов, "под ключ" — оклейка, разбор/сбор, плёнка, прочие материалы',
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c1", label: "Класс 1" },
      { id: "c2", label: "Класс 2" },
      { id: "c3", label: "Класс 3" },
      { id: "c4", label: "Класс 4" },
    ],
    rows: [
      {
        id: "body-uppf190",
        cells: [
          { kind: "text", label: "UPPF 190 / SATIN" },
          { kind: "price", value: 194000 },
          { kind: "price", value: 232000 },
          { kind: "price", value: 275000 },
          { kind: "price", value: 328000 },
        ],
      },
      {
        id: "body-hbx",
        cells: [
          { kind: "text", label: "HBX" },
          { kind: "price", value: 258000 },
          { kind: "price", value: 304000 },
          { kind: "price", value: 355000 },
          { kind: "price", value: 416000 },
        ],
      },
      {
        id: "body-uppf215",
        cells: [
          { kind: "text", label: "UPPF 215 / MATTE" },
          { kind: "price", value: 210000 },
          { kind: "price", value: 250000 },
          { kind: "price", value: 295000 },
          { kind: "price", value: 350000 },
        ],
      },
      {
        id: "body-hbxs-m",
        cells: [
          { kind: "text", label: "HBXS/M" },
          { kind: "price", value: 290000 },
          { kind: "price", value: 340000 },
          { kind: "price", value: 395000 },
          { kind: "price", value: 460000 },
        ],
      },
    ],
  },
  {
    id: "ppf-parts",
    title: 'ЗАЩИТНЫЕ ПЛЁНКИ, отдельные элементы, "под ключ" — оклейка, плёнка',
    columns: [
      { id: "opt", label: "Элемент" },
      { id: "union", label: "Union PPF" },
      { id: "hbx", label: "HBX" },
      { id: "quantum", label: "Quantum Taifun Gray / Sky Black / Montana Smoke" },
    ],
    rows: [
      {
        id: "small-fog",
        cells: [
          { kind: "text", label: "ПТФ/небольшая фара, фонарь и т.д., ПАРА" },
          { kind: "price", value: 2000 },
          { kind: "price", value: 2000 },
          { kind: "price", value: 3000 },
        ],
      },
      {
        id: "headlight",
        cells: [
          { kind: "text", label: "Фара/фонарь, ПАРА" },
          { kind: "price", value: 6000 },
          { kind: "price", value: 8000 },
          { kind: "price", value: 9000 },
        ],
      },
      {
        id: "roof-strip",
        cells: [
          { kind: "text", label: "Полоса на крышу" },
          { kind: "price", value: 6000 },
          { kind: "price", value: 8000 },
          // { kind: "price", value: 8000 },
        ],
      },
      {
        id: "a-pillar",
        cells: [
          { kind: "text", label: "Стойки лобового стекла" },
          { kind: "price", value: 6000 },
          { kind: "price", value: 8000 },
          // { kind: "price", value: 8000 },
        ],
      },
      {
        id: "door-cups",
        cells: [
          { kind: "text", label: "Зона под ручками, ПАРА" },
          { kind: "price", value: 2000 },
          { kind: "price", value: 2000 },
          // { kind: "price", value: 2000 },
        ],
      },
      {
        id: "trunk-sill",
        cells: [
          { kind: "text", label: "Погрузочная зона багажника" },
          { kind: "price", value: 5000 },
          { kind: "price", value: 6000 },
          // { kind: "price", value: "" },
        ],
      },
      {
        id: "inner-sill",
        cells: [
          { kind: "text", label: "Внутренний порог/зона входа, ПАРА" },
          { kind: "price", value: 5000 },
          { kind: "price", value: 6000 },
          // { kind: "price", value: "" },
        ],
      },
      {
        id: "long-sill",
        cells: [
          {
            kind: "text",
            label: "Порог, накладка или внутренний длинный порог, ПАРА",
          },
          { kind: "price", value: 12000 },
          // { kind: "price", value: 12000 },
          { kind: "price", value: 16000 },
        ],
      },
    ],
  },
  {
    id: "glass-panorama",
    title: "Стёкла / панорама",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "price", label: "Цена" },
    ],
    rows: [
      {
        id: "quantum-tpu-12",
        cells: [
          { kind: "text", label: "Лобовое стекло, Quantum TPU — класс 1 и 2" },
          { kind: "price", value: 24000 },
        ],
      },
      {
        id: "quantum-tpu-34",
        cells: [
          { kind: "text", label: "Лобовое стекло, Quantum TPU — класс 3 и 4" },
          { kind: "price", value: 28000 },
        ],
      },
      {
        id: "panorama-luk",
        cells: [
          { kind: "text", label: "Панорама, Magnum Sunroof Black/Blue — люк" },
          { kind: "price", value: 8000 },
        ],
      },
      {
        id: "panorama-one",
        cells: [
          { kind: "text", label: "Панорама, Magnum Sunroof Black/Blue — 1 стекло" },
          { kind: "price", value: 12000 },
        ],
      },
      {
        id: "panorama-two",
        cells: [
          { kind: "text", label: "Панорама, Magnum Sunroof Black/Blue — 2 стекла и более" },
          { kind: "price", value: 24000 },
        ],
      },
    ],
  },
  {
    id: "colored-vinyl",
    title: "ЦВЕТНЫЕ ВИНИЛОВЫЕ ПЛЁНКИ, кузов, “под ключ” — оклейка, разбор/сбор, плёнка, прочие материалы",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c1", label: "Класс 1" },
      { id: "c2", label: "Класс 2" },
      { id: "c3", label: "Класс 3" },
      { id: "c4", label: "Класс 4" },
    ],
    rows: [
      {
        id: "vinyl-teckwrap",
        cells: [
          { kind: "text", label: "TeckWrap" },
          { kind: "price", value: 179000 },
          { kind: "price", value: 217000 },
          { kind: "price", value: 265000 },
          { kind: "price", value: 298000 },
        ],
      },
      {
        id: "vinyl-oracal",
        cells: [
          { kind: "text", label: "Oracal 970" },
          { kind: "price", value: 187000 },
          { kind: "price", value: 226000 },
          { kind: "price", value: 275000 },
          { kind: "price", value: 309000 },
        ],
      },
      {
        id: "vinyl-kpmf",
        cells: [
          { kind: "text", label: "KPMF" },
          { kind: "price", value: 195000 },
          { kind: "price", value: 235000 },
          { kind: "price", value: 285000 },
          { kind: "price", value: 320000 },
        ],
      },
    ],
  },
  {
    id: "colored-poly",
    title: "ЦВЕТНЫЕ ПОЛИУРЕТАНОВЫЕ ПЛЁНКИ, кузов, “под ключ”",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c1", label: "Класс 1" },
      { id: "c2", label: "Класс 2" },
      { id: "c3", label: "Класс 3" },
      { id: "c4", label: "Класс 4" },
    ],
    rows: [
      {
        id: "poly-meta",
        cells: [
          { kind: "text", label: "META / WeMaTec" },
          { kind: "price", value: 241000 },
          { kind: "price", value: 293000 },
          { kind: "price", value: 345000 },
          { kind: "price", value: 392000 },
        ],
      },
    ],
  },
  {
    id: "design-print",
    title: 'ДИЗАЙН — печать на плёнке, кузов, "под ключ" — оклейка, разбор/сбор, плёнка, прочие материалы',
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c1", label: "Класс 1" },
      { id: "c2", label: "Класс 2" },
      { id: "c3", label: "Класс 3" },
      { id: "c4", label: "Класс 4" },
    ],
    rows: [
      {
        id: "design-std-clear",
        cells: [
          { kind: "text", label: "стандарт / прозрачная" },
          { kind: "price", value: 298000 },
          { kind: "price", value: 340000 },
          { kind: "price", value: 394000 },
          { kind: "price", value: 438000 },
        ],
      },
      {
        id: "design-std-white",
        cells: [
          { kind: "text", label: "стандарт / белая" },
          { kind: "price", value: 301500 },
          { kind: "price", value: 344000 },
          { kind: "price", value: 399000 },
          { kind: "price", value: 443500 },
        ],
      },
      {
        id: "design-std-clear-ink",
        cells: [
          { kind: "text", label: "стандарт / прозр / белила" },
          { kind: "price", value: 334000 },
          { kind: "price", value: 380000 },
          { kind: "price", value: 442000 },
          { kind: "price", value: 494000 },
        ],
      },
      {
        id: "design-prem-clear",
        cells: [
          { kind: "text", label: "премиум / прозрачная" },
          { kind: "price", value: 352000 },
          { kind: "price", value: 400000 },
          { kind: "price", value: 465000 },
          { kind: "price", value: 522000 },
        ],
      },
      {
        id: "design-prem-white",
        cells: [
          { kind: "text", label: "премиум / белая" },
          { kind: "price", value: 352000 },
          { kind: "price", value: 400000 },
          { kind: "price", value: 466500 },
          { kind: "price", value: 539000 },
        ],
      },
      {
        id: "design-prem-clear-ink",
        cells: [
          { kind: "text", label: "премиум / прозр / белила" },
          { kind: "price", value: 388000 },
          { kind: "price", value: 440000 },
          { kind: "price", value: 514500 },
          { kind: "price", value: 578000 },
        ],
      },
      {
        id: "design-prem-silver",
        cells: [
          { kind: "text", label: "премиум / серебро / перламутр" },
          { kind: "price", value: 368000 },
          { kind: "price", value: 418000 },
          { kind: "price", value: 487500 },
          { kind: "price", value: 547000 },
        ],
      },
    ],
  },
  {
    id: "soundproof",
    title: 'ШУМОИЗОЛЯЦИЯ "под ключ" — разбор/сбор, установка, материалы',
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c1-std", label: "Класс 1 — стандарт" },
      { id: "c1-prem", label: "Класс 1 — премиум" },
      { id: "c2-std", label: "Класс 2 — стандарт" },
      { id: "c2-prem", label: "Класс 2 — премиум" },
      { id: "c3-std", label: "Класс 3 — стандарт" },
      { id: "c3-prem", label: "Класс 3 — премиум" },
      { id: "c4-std", label: "Класс 4 — стандарт" },
      { id: "c4-prem", label: "Класс 4 — премиум" },
    ],
    rows: [
      {
        id: "doors",
        cells: [
          { kind: "text", label: "двери" },
          { kind: "price", value: 23500 },
          { kind: "price", value: 27000 },
          { kind: "price", value: 31500 },
          { kind: "price", value: 36500 },
          { kind: "price", value: 36500 },
          { kind: "price", value: 42000 },
          { kind: "price", value: 42500 },
          { kind: "price", value: 49500 },
        ],
      },
      {
        id: "arches",
        cells: [
          { kind: "text", label: "арки" },
          { kind: "price", value: 19000 },
          { kind: "price", value: "" },
          { kind: "price", value: 24000 },
          { kind: "price", value: "" },
          { kind: "price", value: 30000 },
          { kind: "price", value: "" },
          { kind: "price", value: 35000 },
          { kind: "price", value: "" },
        ],
      },
      {
        id: "full",
        cells: [
          { kind: "text", label: "полная" },
          { kind: "price", value: 75000 },
          { kind: "price", value: 95000 },
          { kind: "price", value: 90000 },
          { kind: "price", value: 112000 },
          { kind: "price", value: 105000 },
          { kind: "price", value: 129000 },
          { kind: "price", value: 120000 },
          { kind: "price", value: 146000 },
        ],
      },
    ],
  },
  {
    id: "audio",
    title: "Установка / замена / доработка аудиосистем и мультимедиа",
    columns: [
      { id: "opt", label: "Работа, от" },
      { id: "price", label: "Цена" },
    ],
    rows: [
      {
        id: "hu-2din",
        cells: [
          { kind: "text", label: "замена/установка ГУ 2DIN, вкл. вывод антенны, USB и т.д." },
          { kind: "price", value: 12000 },
        ],
      },
      {
        id: "hu-remove",
        cells: [
          { kind: "text", label: "с/у ГУ для прочих работ, от" },
          { kind: "price", value: "от 3 000" },
        ],
      },
      {
        id: "coax",
        cells: [
          { kind: "text", label: "уст/подкл динамиков, коаксиалы" },
          { kind: "price", value: 5000 },
        ],
      },
      {
        id: "two-way",
        cells: [
          { kind: "text", label: "уст/подкл динамиков, 2-компонентные" },
          { kind: "price", value: 7000 },
        ],
      },
      {
        id: "three-way",
        cells: [
          { kind: "text", label: "уст/подкл динамиков, 3-компонентные" },
          { kind: "price", value: 10000 },
        ],
      },
      {
        id: "amp-4ch",
        cells: [
          { kind: "text", label: "уст/подкл 4-канального усилителя" },
          { kind: "price", value: 25000 },
        ],
      },
      {
        id: "proc-8",
        cells: [
          { kind: "text", label: "уст/подкл процессорного усилителя, до 8 каналов включительно" },
          { kind: "price", value: 37500 },
        ],
      },
      {
        id: "proc-more",
        cells: [
          { kind: "text", label: "уст/подкл процессорного усилителя, более 8 каналов" },
          { kind: "price", value: 55000 },
        ],
      },
      {
        id: "active-sub",
        cells: [
          { kind: "text", label: "уст/подкл активного сабвуфера" },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "extra-amp",
        cells: [
          { kind: "text", label: "уст/подкл дополнительного усилителя" },
          { kind: "price", value: 10000 },
        ],
      },
      {
        id: "stealth-box",
        cells: [
          { kind: "text", label: 'изготовление корпуса для сабвуфера "стелс"' },
          { kind: "price", value: 60000 },
        ],
      },
      {
        id: "trunk-finish",
        cells: [
          { kind: "text", label: "оформление багажника (фальшпол, подсветка и т.д.), от" },
          { kind: "price", value: 10000 },
        ],
      },
      {
        id: "tune-proc-8",
        cells: [
          { kind: "text", label: "настройка процессора, стандарт, до 8 каналов включительно" },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "tune-proc-9plus",
        cells: [
          { kind: "text", label: "настройка процессора, стандарт, 9 каналов и более" },
          { kind: "price", value: 18000 },
        ],
      },
      {
        id: "tune-proc-multi",
        cells: [
          { kind: "text", label: "настройка процессора, более одного пресета, от" },
          { kind: "price", value: 21000 },
        ],
      },
    ],
  },
  {
    id: "additional-equipment",
    title: "Установка дополнительного оборудования",
    columns: [
      { id: "opt", label: "Работа" },
      { id: "price", label: "Цена" },
    ],
    rows: [
      {
        id: "dashcam-1",
        cells: [
          { kind: "text", label: "установка регистратора, 1 камера" },
          { kind: "price", value: 8000 },
        ],
      },
      {
        id: "dashcam-2",
        cells: [
          { kind: "text", label: "установка регистратора, 2 камеры" },
          { kind: "price", value: 12000 },
        ],
      },
      {
        id: "dashcam-1-mirror",
        cells: [
          { kind: "text", label: "установка регистратора, 1 камера, подключение в зеркало" },
          { kind: "price", value: 6000 },
        ],
      },
      {
        id: "dashcam-2-mirror",
        cells: [
          { kind: "text", label: "установка регистратора, 2 камеры, подключение в зеркало" },
          { kind: "price", value: 10000 },
        ],
      },
      {
        id: "door-closer-2",
        cells: [
          { kind: "text", label: "установка доводчиков, 2 двери" },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "door-closer-4",
        cells: [
          { kind: "text", label: "установка доводчиков, 4 двери" },
          { kind: "price", value: 25000 },
        ],
      },
      {
        id: "ambient-18",
        cells: [
          { kind: "text", label: "установка подсветки салона, стандарт, 18 точек" },
          { kind: "price", value: 30000 },
        ],
      },
      {
        id: "cam-360",
        cells: [
          { kind: "text", label: "установка камеры з/вида" },
          { kind: "price", value: 8000 },
        ],
      },
      {
        id: "surround-oem",
        cells: [
          { kind: "text", label: "установка кругового обзора под ГУ нештат" },
          { kind: "price", value: 32000 },
        ],
      },
      {
        id: "surround-non-oem",
        cells: [
          { kind: "text", label: "установка кругового обзора под ГУ штат" },
          { kind: "price", value: 48000 },
        ],
      },
      {
        id: "parktronic",
        cells: [
          { kind: "text", label: "установка парктроников, 1 сторона" },
          { kind: "price", value: 12000 },
        ],
      },
      {
        id: "hu-remove-needed",
        cells: [
          { kind: "text", label: "с/у ГУ, если требуется" },
          { kind: "price", value: 3000 },
        ],
      },
    ],
  },
  {
    id: "optics",
    title: "ОПТИКА",
    columns: [
      { id: "opt", label: "Работа" },
      { id: "price", label: "Цена" },
    ],
    rows: [
      {
        id: "headlight-remove",
        cells: [
          { kind: "text", label: "с/у фар (вкл. с/у бампера)" },
          { kind: "price", value: 4500 },
        ],
      },
      {
        id: "open-hot",
        cells: [
          { kind: "text", label: "р/с фар/ПТФ, горячий герметик" },
          { kind: "price", value: 10000 },
        ],
      },
      {
        id: "open-cold",
        cells: [
          { kind: "text", label: "р/с фар/ПТФ, холодный герметик" },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "lens-reflector",
        cells: [
          { kind: "text", label: "уст/подкл линз в рефлектор без доработок" },
          { kind: "price", value: 10000 },
        ],
      },
      {
        id: "lens-stock-no-adapt",
        cells: [
          { kind: "text", label: "уст/подкл линз вместо штатных линз без адаптивного механизма" },
          { kind: "price", value: 12000 },
        ],
      },
      {
        id: "lens-stock-adapt",
        cells: [
          {
            kind: "text",
            label: "уст/подкл линз вместо штатных линз с адаптивным механизмом / в рефлектор с доработками",
          },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "fog-lens",
        cells: [
          { kind: "text", label: "уст/подкл линз в ПТФ, от" },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "extra-elements",
        cells: [
          { kind: "text", label: "уст/подкл доп элементов в фаре (глазки и т.д.), за пару" },
          { kind: "price", value: 6000 },
        ],
      },
      {
        id: "mask-paint",
        cells: [
          { kind: "text", label: "покраска масок фар, от" },
          { kind: "price", value: 6000 },
        ],
      },
      {
        id: "polish-out",
        cells: [
          { kind: "text", label: "полировка фары, пара, наружу" },
          { kind: "price", value: 3000 },
        ],
      },
      {
        id: "polish-in",
        cells: [
          { kind: "text", label: "полировка фары, пара, изнутри" },
          { kind: "price", value: 6000 },
        ],
      },
      {
        id: "sand-out",
        cells: [
          { kind: "text", label: "шлифовка стёкол фар, пара, снаружи" },
          { kind: "price", value: 15000 },
        ],
      },
      {
        id: "ppf-clear",
        cells: [
          { kind: "text", label: "оклейка фар, прозрачный полиуретан" },
          { kind: "price", value: 6000 },
        ],
      },
      {
        id: "ppf-smoke",
        cells: [
          { kind: "text", label: "оклейка фары, тонирующий полиуретан" },
          { kind: "price", value: 9000 },
        ],
      },
      {
        id: "extra-light",
        cells: [
          { kind: "text", label: "установка прочих дополнительных источников света (балки, стробоскопы и т.д.), от" },
          { kind: "price", value: 12000 },
        ],
      },
    ],
  },
  {
    id: "belts-basic",
    title: "РЕМНИ — базовая замена (седаны, кроссоверы, 5-дверные хэтчбеки и т.д.)",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "b2", label: "2 ремня" },
      { id: "b4", label: "4 ремня" },
      { id: "b5", label: "5 ремней" },
    ],
    rows: [
      {
        id: "belt-p1",
        cells: [
          { kind: "text", label: "Палитра 1" },
          { kind: "price", value: 12800 },
          { kind: "price", value: 28600 },
          { kind: "price", value: 32000 },
        ],
      },
      {
        id: "belt-p2",
        cells: [
          { kind: "text", label: "Палитра 2" },
          { kind: "price", value: 13900 },
          { kind: "price", value: 30800 },
          { kind: "price", value: 34700 },
        ],
      },
      {
        id: "belt-p3",
        cells: [
          { kind: "text", label: "Палитра 3" },
          { kind: "price", value: 14400 },
          { kind: "price", value: 31800 },
          { kind: "price", value: 36000 },
        ],
      },
      {
        id: "belt-p4",
        cells: [
          { kind: "text", label: "Палитра 4" },
          { kind: "price", value: 16500 },
          { kind: "price", value: 36000 },
          { kind: "price", value: 41000 },
        ],
      },
      {
        id: "belt-p5",
        cells: [
          { kind: "text", label: "Палитра 5" },
          { kind: "price", value: 17500 },
          { kind: "price", value: 38000 },
          { kind: "price", value: 43500 },
        ],
      },
      {
        id: "belt-custom",
        cells: [
          { kind: "text", label: "лента с индивидуальным дизайном" },
          { kind: "price", value: 22300 },
          { kind: "price", value: 47600 },
          { kind: "price", value: 54800 },
        ],
      },
    ],
  },
  {
    id: "belts-hard",
    title: "Ремни — замена с усложнением (купе, кабриолет, 3-д хэтчбек и т.д.)",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "b2", label: "2 ремня" },
      { id: "b4", label: "4 ремня" },
      { id: "b5", label: "5 ремней" },
    ],
    rows: [
      {
        id: "belt-hard-p1",
        cells: [
          { kind: "text", label: "Палитра 1" },
          { kind: "price", value: 15800 },
          { kind: "price", value: 36100 },
          { kind: "price", value: 39500 },
        ],
      },
      {
        id: "belt-hard-p2",
        cells: [
          { kind: "text", label: "Палитра 2" },
          { kind: "price", value: 16900 },
          { kind: "price", value: 38300 },
          { kind: "price", value: 42200 },
        ],
      },
      {
        id: "belt-hard-p3",
        cells: [
          { kind: "text", label: "Палитра 3" },
          { kind: "price", value: 17400 },
          { kind: "price", value: 39300 },
          { kind: "price", value: 43500 },
        ],
      },
      {
        id: "belt-hard-p4",
        cells: [
          { kind: "text", label: "Палитра 4" },
          { kind: "price", value: 19500 },
          { kind: "price", value: 43500 },
          { kind: "price", value: 48500 },
        ],
      },
      {
        id: "belt-hard-p5",
        cells: [
          { kind: "text", label: "Палитра 5" },
          { kind: "price", value: 20500 },
          { kind: "price", value: 45500 },
          { kind: "price", value: 51000 },
        ],
      },
      {
        id: "belt-hard-custom",
        cells: [
          { kind: "text", label: "лента с индивидуальным дизайном" },
          { kind: "price", value: 25300 },
          { kind: "price", value: 55100 },
          { kind: "price", value: 62300 },
        ],
      },
    ],
  },
  {
    id: "mats",
    title: "КОВРЫ",
    columns: [
      { id: "opt", label: "Опция" },
      { id: "c3", label: "Класс 3" },
      { id: "c2", label: "Класс 2" },
      { id: "c1", label: "Класс 1" },
    ],
    rows: [
      {
        id: "salon",
        cells: [
          { kind: "text", label: "Салон (перед + зад + подпятник + крепёж)" },
          { kind: "price", value: 9500 },
          { kind: "price", value: 10500 },
          { kind: "price", value: 18500 },
        ],
      },
      {
        id: "trunk",
        cells: [
          { kind: "text", label: "Ковёр в багажник" },
          { kind: "price", value: 7000 },
          { kind: "price", value: 8500 },
          { kind: "price", value: 10000 },
        ],
      },
    ],
  },
];

export const priceComments: Record<string, string> = {
  tinting: `Стоимость указана "под ключ" - плёнка, нанесение плёнки, базовые арматурные работы (если таковые требуются).
Работаем с плёнками NDFOS, Южная Корея:
- тонирующая плёнка - серия PHP Black Pro Series, чёрная, без оттенка, светопропускаемостью, на выбор, 5/15/35/50%.
- атермальная плёнка - серия Premium IR 80 (ГОСТ)
- укрепляющая плёнка - серия SF PRO 12 mil
С нами вы можете быть уверены в качестве и подлинности используемых материалов.
Работаем напрямую с поставщиком.`,
  detailing: `С нами вы можете быть уверены в качестве используемых материалов.
Работаем напрямую с поставщиками/производителями - Krytex, Leraton, VDA shop и т.д.`,
  sewing: `Раздел дополняется. Позже здесь появятся цены на пошив сидений, перетяжку потолка, дверей и прочих деталей.
С нами вы можете быть уверены в качестве используемых материалов.
Работаем напрямую с поставщиками натуральной и эко-кожи, ткани и оригинальной Alcanrata`,
  belts: `Стоимость комплекта "салон" указана передние и задние коврики на автомобили с двумя рядами сидений. 
  Комплект включает так же подпятник на водительский коврик и крепёж на коврики при наличии/необходимости. 

  Подпятник – сменная часть на липучке в районе педалей.

Коврик в багажник – высчитывается по площади, по бОльшим значениям. В таблице указана стоимость за 1 м2.

Все ковры изготовлены с учетом российских условий, на резиновой непромокаемой подложке, подходят для круглогодичного применения,
позволяют заменить подпятник самостоятельно не приезжая в мастерскую.
Отлично поглощают шум, экологически безвредны, легко чистятся и эстетично вписываются в салон авто.

Класс 3 – прямой плотный ворс высотой около 7 мм. Покрытие тыльной стороны - термопластичная резина. Аналог премиальных оригинальных ковриков для Мercedes и BMW.
Цвета – чёрный, тёмно-серый.

Класс 2 – прямой плотный ворс высотой 8-10мм. Покрытие тыльной стороны - термопластичная резина. Впитывает до 3-х литров воды.
Цвета – чёрный, тёмно-серый, бежевый, коричневый.

Класс 1 – крученый ворс высотой около 10 мм. Покрытие тыльной стороны - термопластичная резина. Более высокая плотность и стойкость к истиранию.
Цвета - чёрный, серый, бежевый, коричневый, синий.

С нами вы можете быть уверены в качестве используемых материалов.
Работаем напрямую с поставщиками/производителями лент и ковров.`,
  light: `В стоимость работ входят - установка и подключение оборудвания, сопутствующие арматурные и прочие работы.
Приведена стоимость работ без учёта стоимости компонентов.
Стоимость оклейка указана "под ключ", с учётом плёнки.

С нами вы можете быть уверены в качестве и подлинности используемых компонентов.
Работаем напрямую с поставщиками/производителями - Optima Premium, MTF, Aozoom, Shiny Light`,
  equipment: `В стоимость работ входят - установка и подключение оборудвания, сопутствующие арматурные и прочие работы.
Приведена стоимость работ без учёта стоимости компонентов.

С нами вы можете быть уверены в качестве и подлинности используемых компонентов.
Работаем напрямую с поставщиками/производителями`,
  sound: `В стоимость работ входят - установка и подключение оборудвания, сопутствующие арматурные и прочие работы.
Приведена стоимость работ без учёта стоимости компонентов.

С нами вы можете быть уверены в качестве и подлинности используемых компонентов.
Работаем напрямую с поставщиками/производителями`,
  soundproofing: `Стоимость указана "под ключ" - арматурные работы, работы по установке, материалы Шумофф, прочие расходные материалы и сопутствующие работы.
В комплексную шумоизоляцию салона входят - пол, включая арки изнутри и нижнюю часть моторного щита, двери, задние боковые панели, крышка багажника, крыша.
В пакет "Премиум" так же входит "антискрип".

В "Премиум" применяются более технологичные материалы. Они легче или такой же массы, но эффективнее.
Антискрип - это проклейка специальным материалом панелей, которые стыкуются между собой, чтобы избежать появления лишних звуков в будущем.

Используемые материалы:
- в пакете "Стандарт" - Space 2.0, Комфорт 6, Абсорбер А15
- в пакете "Премиум" - Jack, Black Jack, Bass, Комфорт 3, Герметон 7, Герметон А15, Prizma, Paradox, Membrane, BigBlock, Specific
- для шумоизоляции арок снаружи - Space 2.0, Комфорт 6/3
*возможна замена отдельных материалов связанных с особенностями конкретной модели авто

С нами вы можете быть уверены в качестве и подлинности используемых материалов.
Работаем напрямую с одним из ведущих производителей материалов для шумоизоляции - Шумофф`,
  vinyl: `Стоимость указана "под ключ" - снятие/установка и разбор/сбор необходимых деталей под оклейку, чистовая подготовка под оклейку, оклейка снаружи окрашенных в основной цвет деталей, плёнка, прочие расходные материалы.
❗Клеим с разбором❗
С нами вы можете быть уверены в качестве и подлинности используемых материалов.

Работаем напрямую с поставщиками/производителями:
- виниловых плёнок Oracal, KPMF, TecWrap
- цветных полиуретановых плёнок Meta PPF, WeMaTec`,
  safety: `Стоимость указана "под ключ" - снятие/установка и разбор/сбор необходимых деталей под оклейку, чистовая подготовка под оклейку, оклейка снаружи окрашенных в основной цвет деталей, плёнка, прочие расходные материалы.
❗Клеим с разбором❗
С нами вы можете быть уверены в качестве и подлинности используемых материалов.

Работаем напрямую с поставщиками/производителями:
- прозрачных полиуретановых плёнок Union PPF и Hexis Bodyfence X
- тонирующего поиуретана для оптики Quantum
- атермального полиуретана для панорамных крыш Magnum`,
};

export const classesData = [
  {
    class: "класс 1",
    vehicles: ["хэтчи A, B"],
  },
  {
    class: "класс 2",
    vehicles: ["седаны B", "седаны и хэтчи C, D, E", "купе", "кроссоверы A, B, C"],
  },
  {
    class: "класс 3",
    vehicles: ["седаны F", "кроссоверы D, E", "минивены"],
  },
  {
    class: "класс 4",
    vehicles: ["кроссоверы F", "микроавтобусы", "купе/седаны элит сегмент"],
  },
];

async function getServicePrice(serviceName: keyof typeof serviceNames): Promise<ITableData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRICES[`${serviceName}`]);
    }, 1500);
  });
}

export { getServicePrice };
