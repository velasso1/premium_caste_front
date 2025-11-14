import { FC, useState, useRef, useEffect } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import arrow from "#images/arrow-down.png";

interface IAboutServiceBlockProps {
  serviceDescription: string;
}

const AboutServiceBlock: FC<IAboutServiceBlockProps> = ({ serviceDescription }) => {
  const description = serviceDescription.split(" \n ");

  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  return (
    <ContentBlockLayout contentTitle="ОБ УСЛУГЕ" customClassName="curent-service-page__about-service">
      <div
        className={`curent-service-page__about-block ${isExpanded ? "expanded" : ""}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : "400px" }}
      >
        <div className="" ref={contentRef}>
          {description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
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

export default AboutServiceBlock;
