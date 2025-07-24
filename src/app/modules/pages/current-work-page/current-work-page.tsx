import { FC } from "react";

import { useGetGalleryByIdQuery } from "../../../store/api/galleries-api";

import { useParams } from "react-router-dom";

import WorkItem from "#pages/our-works-page/components/work-item.tsx";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Loader from "#ui/loader/loader.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Slider from "#ui/slider/slider.tsx";
import { SwiperSlide } from "swiper/react";

const CurrentWorkPage: FC = () => {
  const { id } = useParams<string>();

  const getGallery = useGetGalleryByIdQuery({ id: id ? id : "" });

  return (
    <PageLayout pageClassName="current-work-page">
      <PageTitle pageName={getGallery.data?.title || "Наша работа"} />
      <ContentBlockLayout customClassName="current-work-page__block" customContentClass="current-work-page__album">
        <Slider paginationInculde={false}>
          {getGallery.data ? (
            getGallery.data.images.map((imageSrc) => {
              return (
                <SwiperSlide>
                  <WorkItem imageSource={imageSrc} itemId="" itemTitle="" isAlbumPhoto={true} />
                </SwiperSlide>
              );
            })
          ) : (
            <Loader />
          )}
        </Slider>
      </ContentBlockLayout>

      <ContentBlockLayout customClassName="current-work-page__description" contentTitle="описание работы">
        <p>{getGallery.data?.description}</p>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default CurrentWorkPage;
