import { FC } from "react";

interface IPageTitleProps {
  pageName: string;
}

const PageTitle: FC<IPageTitleProps> = ({ pageName }) => {
  return (
    <div className="page-title">
      <p className="page-title__text">{pageName}</p>
    </div>
  );
};

export default PageTitle;
