import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const OurWorksPage: FC = () => {
  return (
    <PageLayout pageClassName="our-works-page">
      <PageTitle pageName="Наши работы" />
    </PageLayout>
  );
};

export default OurWorksPage;
