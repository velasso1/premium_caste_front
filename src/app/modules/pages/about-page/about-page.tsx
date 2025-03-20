import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const AboutPage: FC = () => {
  return (
    <PageLayout pageClassName="about-page">
      <PageTitle pageName="О нас" />
    </PageLayout>
  );
};

export default AboutPage;
