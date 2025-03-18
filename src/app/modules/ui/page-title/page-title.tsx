import { FC } from "react";

interface IPageTitleProps {
  pageName: string;
}

const PageTitle: FC<IPageTitleProps> = ({ pageName }) => {
  return <div className="page-title">{pageName}</div>;
};

export default PageTitle;
