import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import AboutServiceBlock from "./components/about-service-block";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Button from "#ui/button/button.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import { serviceNames } from "#utils/auxuliary/services-items-list.ts";

const CurrentServicePage: FC = () => {
  const navigate = useNavigate();
  const { service } = useParams<{ service: keyof typeof serviceNames }>();

  return (
    <PageLayout pageClassName="curent-service-page">
      <PageTitle pageName={service ? serviceNames[`${service}`].title : "Неизвестная ошибка"} />

      <AboutServiceBlock serviceDescription={service ? serviceNames[`${service}`].description : "Неизвестная ошибка"} />
      <Button buttonText="Вернуться к списку услуг" onClickAction={() => navigate(`../${routes.SERVICES_PAGE}`)} />
    </PageLayout>
  );
};

export default CurrentServicePage;
