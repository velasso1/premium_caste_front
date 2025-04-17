import React, { FC, useState, useEffect, useLayoutEffect } from "react";

import premium from "#images/premiun-caste.png";

interface IPageLayoutProps {
  children: React.ReactElement;
  pageClassName: string;
}

const PageLayout: FC<IPageLayoutProps> = ({ pageClassName, children }) => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  useEffect(() => {
    turnOffPreloader();
  }, []);

  const turnOffPreloader = () => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 2500);
  };

  return (
    <div className={`${pageClassName} page-layout`}>
      {/* {showPreloader && (
        <div className="page-layout__preloader">
          <img className="page-layout__banner page-layout__banner-closed" src={premium} alt="premium caste" />
        </div>
      )} */}

      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;
