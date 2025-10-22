import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import { IServicesItem } from "#utils/auxuliary/services-items-list.ts";

const CategoryItem: FC<IServicesItem> = ({ title, iconPath, serviceName }) => {
  const navigate = useNavigate();

  return (
    <div
      className="services-page__category-item"
      onClick={() => navigate(`../${routes.CURRENT_SERVICE_PAGE}/` + serviceName)}
    >
      <div className="services-page__image">
        <img className="services-page__icon" src={iconPath} alt="icon" />
      </div>

      <div className="services-page__title">{title}</div>
    </div>
  );
};

export default CategoryItem;
