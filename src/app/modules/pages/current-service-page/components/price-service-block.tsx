import { FC, useState, useRef, useEffect } from "react";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import PriceTable from "#ui/price-table/price-table.tsx";
import { ITableProps } from "#ui/price-table/price-table.tsx";

import arrow from "#images/arrow-down.png";
import NewPriceTable from "#ui/price-table/new-price-table.tsx";

import { PriceBook } from "#utils/prices-types/price-table-types.ts";

import { samplePriceBook } from "#utils/fake-api/service-prices.ts";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const VehicleClassesTable: FC = () => {
  const classesData = [
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

type PriceServiceBlockProps = ITableProps & { serviceKey?: string };

const priceComments: Record<string, string> = {
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
  vinyl: `Стоимость указана "под ключ" - снятие/установка и разбор/сбор необходимых деталей под оклейку, чистовая подготовка под оклейку, оклейка снаружи окрашенных в основной цвет деталей, плёнка,

прочие расходные материалы.

❗Клеим с разбором❗

С нами вы можете быть уверены в качестве и подлинности используемых материалов.

Работаем напрямую с поставщиками/производителями:

- виниловых плёнок Oracal, KPMF, TecWrap

- цветных полиуретановых плёнок Meta PPF, WeMaTec`,
  safety: `Стоимость указана "под ключ" - снятие/установка и разбор/сбор необходимых деталей под оклейку, чистовая подготовка под оклейку, оклейка снаружи окрашенных в основной цвет деталей, плёнка,

прочие расходные материалы.

❗Клеим с разбором❗

С нами вы можете быть уверены в качестве и подлинности используемых материалов.

Работаем напрямую с поставщиками/производителями:

- прозрачных полиуретановых плёнок Union PPF и Hexis Bodyfence X

- тонирующего поиуретана для оптики Quantum

- атермального полиуретана для панорамных крыш Magnum`,
};

const PriceServiceBlock: FC<PriceServiceBlockProps> = ({ tableData, serviceKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [tableData, isExpanded]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const sectionByIds = (ids: string[]): PriceBook =>
    samplePriceBook.filter((section) => ids.includes(section.id));

  const priceBookByCategory: Record<string, PriceBook> = {
    safety: sectionByIds(["ppf-front", "ppf-body-full", "ppf-parts", "glass-panorama"]),
    vinyl: sectionByIds(["colored-vinyl", "colored-poly", "design-print"]),
    soundproofing: sectionByIds(["soundproof"]),
    sound: sectionByIds(["audio"]),
    equipment: sectionByIds(["additional-equipment"]),
    light: sectionByIds(["optics"]),
    belts: sectionByIds(["belts-basic", "belts-hard", "mats"]),
  };

  const sectionsFromUrl = serviceKey ? priceBookByCategory[serviceKey] ?? [] : [];
  const hasNewPrice = sectionsFromUrl.length > 0;
  const hasOldPrice = tableData && tableData.headCols && tableData.headCols.length > 0;
  const commentText = serviceKey ? priceComments[serviceKey] : null;
  const showClassesTable = serviceKey && ["detailing", "soundproofing", "vinyl", "safety"].includes(serviceKey);

  return (
    <ContentBlockLayout contentTitle="ЦЕНЫ" customClassName="curent-service-page__about-service">
      <div
        className={`curent-service-page__prices-table ${isExpanded ? "expanded" : ""}`}
        style={{
          maxHeight: isExpanded ? "none" : "400px",
          overflow: isExpanded ? "visible" : "hidden",
        }}
      >
        <div ref={contentRef}>
          {hasNewPrice ? (
            <NewPriceTable sections={sectionsFromUrl} />
          ) : hasOldPrice && tableData ? (
            <PriceTable tableData={tableData} />
          ) : (
            "Информации о ценах пока что нет"
          )}
          {commentText && (
            <>
              <div
                style={{
                  whiteSpace: "pre-line",
                  marginTop: "16px",
                  lineHeight: "1.6",
                }}
              >
                {commentText.split("\n").map((line, index, array) => {
                  const trimmedLine = line.trim();
                  const isEmpty = trimmedLine === "";
                  const isHeading =
                    trimmedLine &&
                    trimmedLine === trimmedLine.toUpperCase() &&
                    trimmedLine.length > 3 &&
                    !trimmedLine.includes("-") &&
                    !trimmedLine.match(/^\d+\./);

                  // Пропускаем пустые строки в начале и конце
                  if (isEmpty && (index === 0 || index === array.length - 1)) {
                    return null;
                  }

                  return (
                    <p
                      key={index}
                      style={{
                        margin: isEmpty ? "8px 0" : isHeading ? "12px 0 4px 0" : "2px 0",
                        fontWeight: isHeading ? 700 : 400,
                        fontSize: isHeading ? "1.1em" : "1em",
                      }}
                    >
                      {trimmedLine || "\u00A0"}
                    </p>
                  );
                })}
              </div>
              {showClassesTable && <VehicleClassesTable />}
            </>
          )}
        </div>

        {!isExpanded && (
          <div className="expand-overlay" onClick={toggleExpand}>
            <img className="expand-overlay__arrow" src={arrow} alt="arrow" />
          </div>
        )}
      </div>

      <>
        {isExpanded && (
          <div className="collapse-button" onClick={toggleExpand}>
            <img className="collapse-button__arrow" src={arrow} alt="arrow" />
          </div>
        )}
      </>
    </ContentBlockLayout>
  );
};

export default PriceServiceBlock;
