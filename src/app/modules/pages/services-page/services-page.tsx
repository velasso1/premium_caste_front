import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const ServicesPage: FC = () => {
  return (
    <PageLayout pageClassName="services-page">
      <PageTitle pageName="Услуги" />
    </PageLayout>
  );
};

export default ServicesPage;
