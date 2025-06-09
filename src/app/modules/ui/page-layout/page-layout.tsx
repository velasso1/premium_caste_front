import React, { FC, useState, useEffect, useLayoutEffect } from "react";

import premium from "#images/premiun-caste.png";

interface IPageLayoutProps {
  children: React.ReactElement[] | React.ReactElement | null;
  pageClassName: string;
  includePreloader?: boolean;
}

const PageLayout: FC<IPageLayoutProps> = ({ pageClassName, children, includePreloader = true }) => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 2500);
  }, []);

  return (
    <div className={`${pageClassName} page-layout`}>
      {includePreloader && showPreloader && (
        <div className="page-layout__preloader">
          <img className="page-layout__banner page-layout__banner-closed" src={premium} alt="premium caste" />
        </div>
      )}

      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;
