import React, { FC } from "react";

interface IPageLayoutProps {
  children: React.ReactElement;
  pageClassName: string;
}

const PageLayout: FC<IPageLayoutProps> = ({ pageClassName, children }) => {
  return <div className={`${pageClassName} page-layout`}>{children}</div>;
};

export default PageLayout;
