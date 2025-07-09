import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import PriceTable from "#ui/price-table/price-table.tsx";

import { ITableProps } from "#ui/price-table/price-table.tsx";

const PriceServiceBlock: FC<ITableProps> = ({ tableData }) => {
  return (
    <ContentBlockLayout contentTitle="ЦЕНЫ" customClassName="curent-service-page__about-service">
      <>
        {tableData ? <PriceTable tableData={tableData} /> : "Информации о ценах пока что нет"}
        <p>
          * Указана ориентировочная стоимость работ и материалов европейских производителей, «от». Просим вас иметь
          ввиду, что каждая работа индивидуальна и просчитывается индивидуально. Конечная стоимость зависит от
          конкретной марки и модели авто, конструкции деталей, комбинации материалов и дополнительных работ, если такие
          оговариваются.
        </p>
      </>
    </ContentBlockLayout>
  );
};

export default PriceServiceBlock;
