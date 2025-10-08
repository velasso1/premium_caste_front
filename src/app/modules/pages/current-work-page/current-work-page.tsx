import { FC, useState, useEffect } from "react";

import { useGetGalleryByIdQuery } from "../../../store/api/galleries-api";

import { useParams, useNavigate } from "react-router-dom";

import { SwiperSlide } from "swiper/react";

import WorkItem from "#pages/our-works-page/components/work-item.tsx";
import Tag from "#pages/create-work-page/components/tag.tsx";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Loader from "#ui/loader/loader.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import Album from "#ui/album/album.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const CurrentWorkPage: FC = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const [albumRender, toggleAlbumRender] = useState<boolean>(false);
  const [currentAlbum, setCurrentAlbum] = useState<string[]>([]);
  const [photoZoomIndex, setZoomIndex] = useState<number>();

  const getGallery = useGetGalleryByIdQuery({ id: id ? id : "" });

  useEffect(() => {
    const savedImages: string[] = getGallery.data?.images.map((item) => item) ?? [];

    if (savedImages.length !== 0) {
      setCurrentAlbum(savedImages);
    }
  }, [getGallery]);

  return (
    <PageLayout pageClassName="current-work-page">
      <PageTitle pageName={getGallery.data?.title || "Наша работа"} />

      <ContentBlockLayout customClassName="current-work-page__description" contentTitle="описание работы">
        <div
          className="current-post-page__post"
          dangerouslySetInnerHTML={{ __html: getGallery.data?.description ? getGallery.data?.description : "" }}
        ></div>
      </ContentBlockLayout>

      <ContentBlockLayout
        customClassName="current-work-page__block"
        customContentClass="current-work-page__album"
        contentTitle="Галерея"
      >
        {getGallery.data ? (
          getGallery.data.images.map((imageSrc, index) => {
            return (
              <WorkItem
                key={imageSrc}
                imageSource={imageSrc}
                itemId=""
                itemTitle=""
                isAlbumPhoto={true}
                toggleZoom={() => {
                  toggleAlbumRender(true);
                  setZoomIndex(index);
                }}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </ContentBlockLayout>
      <Button buttonText="Вернуться к списку работ" onClickAction={() => navigate(`../${routes.OUR_WORKS_PAGE}`)} />
      <>
        {albumRender && (
          <Album
            photos={currentAlbum}
            toggleZoom={() => toggleAlbumRender((prev) => !prev)}
            zoomPhotoIndex={photoZoomIndex ?? 0}
          />
        )}
      </>
    </PageLayout>
  );
};

export default CurrentWorkPage;
