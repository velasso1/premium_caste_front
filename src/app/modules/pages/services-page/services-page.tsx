import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

import CategoryItem from "./components/category-item";

import { SERVICES_ITEMS } from "#utils/auxuliary/services-items-list.ts";

const ServicesPage: FC = () => {
  return (
    <PageLayout pageClassName="services-page">
      <PageTitle pageName="Услуги" />
      <div className="services-page__content">
        {SERVICES_ITEMS.map((item, index) => {
          return <CategoryItem title={item.title} icon={item.iconPath} key={index} />;
        })}
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
