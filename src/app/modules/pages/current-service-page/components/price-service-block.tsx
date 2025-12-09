import { FC, useState, useRef, useEffect } from "react";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import PriceTable from "#ui/price-table/price-table.tsx";
import { ITableProps } from "#ui/price-table/price-table.tsx";

import arrow from "#images/arrow-down.png";
import NewPriceTable from "#ui/price-table/new-price-table.tsx";

import { PriceBook } from "#utils/prices-types/price-table-types.ts";

import { samplePriceBook } from "#utils/fake-api/service-prices.ts";

type PriceServiceBlockProps = ITableProps & { serviceKey?: string };

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
          {hasNewPrice ? <NewPriceTable sections={sectionsFromUrl} /> : "Информации о ценах пока что нет"}
          <p>
            *Указана ориентировочная стоимость работ и материалов европейских производителей, «от». Просим вас иметь
            ввиду, что каждая работа индивидуальна и просчитывается индивидуально. Конечная стоимость зависит от
            конкретной марки и модели авто, конструкции деталей, комбинации материалов и дополнительных работ, если
            такие оговариваются.
          </p>
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
