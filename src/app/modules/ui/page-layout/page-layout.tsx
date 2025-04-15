import React, { FC } from "react";

interface IPageLayoutProps {
  children: React.ReactElement;
  pageClassName: string;
}

const PageLayout: FC<IPageLayoutProps> = ({ pageClassName, children }) => {
  return (
    <div className={`${pageClassName} page-layout`}>
      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;
