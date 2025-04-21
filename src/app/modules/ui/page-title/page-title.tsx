import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IPageTitleProps {
  pageName: string;
  isLink?: boolean;
  linkHref?: string;
}

const PageTitle: FC<IPageTitleProps> = ({ pageName, isLink, linkHref = "/" }) => {
  return (
    <div className="page-title">
      {isLink ? (
        <NavLink to={linkHref} className="page-title__text">
          {pageName}
        </NavLink>
      ) : (
        <p className="page-title__text">{pageName}</p>
      )}
    </div>
  );
};

export default PageTitle;
