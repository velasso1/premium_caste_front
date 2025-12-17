import { FC, useState, useRef, useEffect } from "react";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import PriceTable from "#ui/price-table/price-table.tsx";
import { ITableProps } from "#ui/price-table/price-table.tsx";

import arrow from "#images/arrow-down.png";
import NewPriceTable from "#ui/price-table/new-price-table.tsx";

import { PriceBook } from "#utils/prices-types/price-table-types.ts";

import { samplePriceBook } from "#utils/fake-api/service-prices.ts";

import { priceComments } from "#utils/fake-api/service-prices.ts";

import VehicleClassesTable from "#ui/tables/vehicle-classes-table.tsx";

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

  const sectionByIds = (ids: string[]): PriceBook => samplePriceBook.filter((section) => ids.includes(section.id));

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
