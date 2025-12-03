import { FC, useState, useRef, useEffect } from "react";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import PriceTable from "#ui/price-table/price-table.tsx";
import { ITableProps } from "#ui/price-table/price-table.tsx";

import arrow from "#images/arrow-down.png";
import NewPriceTable from "#ui/price-table/new-price-table.tsx";

const PriceServiceBlock: FC<ITableProps> = ({ tableData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [tableData, isExpanded]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <ContentBlockLayout contentTitle="ЦЕНЫ" customClassName="curent-service-page__about-service">
      <div
        className={`curent-service-page__prices-table ${isExpanded ? "expanded" : ""}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : "400px" }}
      >
        <div ref={contentRef}>
          <NewPriceTable />
          {/* {tableData ? <PriceTable tableData={tableData} /> : "Информации о ценах пока что нет"} */}
          <p>
            *Указана ориентировочная стоимость работ и материалов европейских производителей, «от». Просим вас иметь
            ввиду, что каждая работа индивидуальна и просчитывается индивидуально. Конечная стоимость зависит от
            конкретной марки и модели авто, конструкции деталей, комбинации материалов и дополнительных работ, если
            такие оговариваются.
          </p>
        </div>

        {!isExpanded && tableData && (
          <div className="expand-overlay" onClick={toggleExpand}>
            <img className="expand-overlay__arrow" src={arrow} alt="arrow" />
          </div>
        )}
      </div>

      <>
        {isExpanded && tableData && (
          <div className="collapse-button" onClick={toggleExpand}>
            <img className="collapse-button__arrow" src={arrow} alt="arrow" />
          </div>
        )}
      </>
    </ContentBlockLayout>
  );
};

export default PriceServiceBlock;
