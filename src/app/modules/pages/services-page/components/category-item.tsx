import { FC } from "react";

import substrate from "#images/substrate.png";

interface ICategoryItemProps {
  title: string;
  icon: string;
}

const CategoryItem: FC<ICategoryItemProps> = ({ title, icon }) => {
  return (
    <div className="services-page__category-item">
      <div className="services-page__image">
        <img src={substrate} alt="substrate" />
        <img className="services-page__icon" src={icon} alt="icon" />
      </div>

      <div className="services-page__title">{title}</div>
    </div>
  );
};

export default CategoryItem;
