import { FC } from "react";
import { Link } from "react-router-dom";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import { IServicesItem } from "#utils/auxuliary/services-items-list.ts";

const CategoryItem: FC<IServicesItem> = ({ title, iconPath, serviceName }) => {
  const linkTo = `../${routes.CURRENT_SERVICE_PAGE}/${serviceName}`;
  return (
    <Link className="services-page__category-item" to={linkTo}>
      <div className="services-page__image">
        <img className="services-page__icon" src={iconPath} alt="icon" />
      </div>

      <div className="services-page__title">{title}</div>
    </Link>
  );
};

export default CategoryItem;
