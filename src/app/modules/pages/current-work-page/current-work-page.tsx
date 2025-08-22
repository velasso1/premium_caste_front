import { FC } from "react";

import { useGetGalleryByIdQuery } from "../../../store/api/galleries-api";

import { useParams, useNavigate } from "react-router-dom";

import { SwiperSlide } from "swiper/react";

import WorkItem from "#pages/our-works-page/components/work-item.tsx";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Loader from "#ui/loader/loader.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import Tag from "#pages/create-work-page/components/tag.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const CurrentWorkPage: FC = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const getGallery = useGetGalleryByIdQuery({ id: id ? id : "" });

  return (
    <PageLayout pageClassName="current-work-page">
      <PageTitle pageName={getGallery.data?.title || "Наша работа"} />

      <ContentBlockLayout customClassName="current-work-page__description" contentTitle="описание работы">
        <>
          <p>{getGallery.data?.description}</p>
          {/* <div style={{ fontSize: "15px" }}>
            Теги: <Tag title="tag1" />
          </div> */}
        </>
      </ContentBlockLayout>

      <ContentBlockLayout
        customClassName="current-work-page__block"
        customContentClass="current-work-page__album"
        contentTitle="Галерея"
      >
        {getGallery.data ? (
          getGallery.data.images.map((imageSrc, index) => {
            return <WorkItem key={index} imageSource={imageSrc} itemId="" itemTitle="" isAlbumPhoto={true} />;
          })
        ) : (
          <Loader />
        )}
      </ContentBlockLayout>
      <Button buttonText="Вернуться к списку работ" onClickAction={() => navigate(`../${routes.OUR_WORKS_PAGE}`)} />
    </PageLayout>
  );
};

export default CurrentWorkPage;
