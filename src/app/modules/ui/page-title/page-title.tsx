import { FC, LegacyRef } from "react";
import { NavLink } from "react-router-dom";

interface IPageTitleProps {
  pageName: string;
  isLink?: boolean;
  linkHref?: string;
  ref?: LegacyRef<HTMLDivElement>;
}

const PageTitle: FC<IPageTitleProps> = ({ pageName, isLink, linkHref = "/", ref }) => {
  return (
    <div className="page-title" ref={ref}>
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
