import { FC, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useLazyGetGalleryByTagQuery } from "../../../store/api/galleries-api";

import AboutServiceBlock from "./components/about-service-block";
import PriceServiceBlock from "./components/price-service-block";

import WorksAlbum from "./components/works-album";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Button from "#ui/button/button.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import { serviceNames } from "#utils/auxuliary/services-items-list.ts";
import { PRICES } from "#utils/fake-api/service-prices.ts";

const CurrentServicePage: FC = () => {
  const navigate = useNavigate();
  const { service } = useParams<{ service: string }>();

  const [getGalleryByTag, galleryTagStatus] = useLazyGetGalleryByTagQuery();

  useEffect(() => {
    if (service) {
      getGalleryByTag({ tag: serviceNames[`${service}`].title });
    }
  }, []);

  console.log(service, PRICES, PRICES[`${service}`]);

  return (
    <PageLayout pageClassName="curent-service-page">
      <PageTitle pageName={service ? serviceNames[`${service}`].title : "Неизвестная ошибка"} />
      <WorksAlbum galleries={galleryTagStatus.data?.galleries} />
      <PriceServiceBlock tableData={PRICES[`${service}`]} serviceKey={service} />
      <AboutServiceBlock serviceDescription={service ? serviceNames[`${service}`].description : "Неизвестная ошибка"} />

      <Button buttonText="Вернуться к списку услуг" onClickAction={() => navigate(`../${routes.SERVICES_PAGE}`)} />
    </PageLayout>
  );
};

export default CurrentServicePage;
