import { FC, useState, useRef, useEffect } from "react";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import PriceTable from "#ui/price-table/price-table.tsx";
import { ITableProps } from "#ui/price-table/price-table.tsx";

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
          {tableData ? <PriceTable tableData={tableData} /> : "Информации о ценах пока что нет"}
          <p>
            *Указана ориентировочная стоимость работ и материалов европейских производителей, «от». Просим вас иметь
            ввиду, что каждая работа индивидуальна и просчитывается индивидуально. Конечная стоимость зависит от
            конкретной марки и модели авто, конструкции деталей, комбинации материалов и дополнительных работ, если
            такие оговариваются.
          </p>
        </div>

        {!isExpanded && tableData && (
          <div className="expand-overlay" onClick={toggleExpand}>
            <span>Развернуть</span>
          </div>
        )}
      </div>

      <>
        {isExpanded && tableData && (
          <button className="collapse-button" onClick={toggleExpand}>
            Свернуть
          </button>
        )}
      </>
    </ContentBlockLayout>
  );
};

export default PriceServiceBlock;
