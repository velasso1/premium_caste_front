import { FC, useEffect, useState } from "react";

import {
  useGetCurrentPostQuery,
  useGetMediaGroupsOfPostQuery,
  useGetMediaGroupQuery,
  usePublishPostMutation,
  useArchivePostMutation,
  useDeletePostMutation,
} from "../../../store/api/posts-api";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setEffect } from "../../../store/slices/effects";

import { useNavigate, useParams } from "react-router-dom";

import { SwiperSlide } from "swiper/react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import Slider from "#ui/slider/slider.tsx";
import Loader from "#ui/loader/loader.tsx";
import WorkItem from "#pages/our-works-page/components/work-item.tsx";
import Button from "#ui/button/button.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Album from "#ui/album/album.tsx";
import Popup from "#ui/popup/popup.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const CurrentPostPage: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  const [publish, publishStatus] = usePublishPostMutation();
  const [archive, archiveStatus] = useArchivePostMutation();
  const [deletePost, deletingStatus] = useDeletePostMutation();

  const currentPost = useGetCurrentPostQuery({ post_id: params?.id });
  const mediaGroups = useGetMediaGroupsOfPostQuery({ post_id: params?.id });

  const [albumRender, toggleAlbumRender] = useState<boolean>(false);
  const [currentAlbum, setCurrentAlbum] = useState<string[]>([]);
  const [photoZoomIndex, setZoomIndex] = useState<number>();
  const [popupIsOpen, popupHandler] = useState<boolean>(false);

  useEffect(() => {
    console.log(currentPost.data?.media_groups?.content);
    const savedImages: string[] = currentPost.data?.media_groups?.content.map((item) => item.storage_path) || [];

    if (savedImages.length !== 0) {
      setCurrentAlbum(savedImages);
    }
  }, [currentPost]);

  useEffect(() => {
    if (publishStatus.isSuccess || archiveStatus.isSuccess || deletingStatus.isSuccess) {
      dispatch(setEffect({ status: "success", message: "Успешно" }));
    }

    if (publishStatus.isError || archiveStatus.isError || deletingStatus.isError) {
      dispatch(
        setEffect({
          status: "error",
          message: "Возникла ошибка, попробуйте позже",
        })
      );
    }
  }, [publishStatus, archiveStatus, deletingStatus]);

  return (
    <PageLayout pageClassName="current-post-page">
      {/* <PageTitle pageName={currentPost?.data?.title ?? "Загрузка.."} /> */}
      <Popup
        isOpen={popupIsOpen}
        action={() => {
          if (params.id) {
            deletePost({ postId: params?.id });
            navigate(-1);
          }
        }}
        onClose={() => popupHandler(false)}
      />
      <>
        {userIsAdmin && (
          <div className="current-post-page__managing-buttons">
            {currentPost.data?.status !== "published" && (
              <Button
                buttonStyle="OUTLINED"
                buttonText="Опубликовать"
                onClickAction={() => {
                  if (params?.id) {
                    publish({ postId: params?.id });
                    currentPost.refetch();
                  }
                }}
              />
            )}

            {currentPost.currentData?.status !== "archived" && (
              <Button
                buttonStyle="OUTLINED"
                buttonText="Архивировать"
                onClickAction={() => {
                  if (params.id) {
                    archive({ postId: params?.id });
                    currentPost.refetch();
                  }
                }}
              />
            )}

            <Button
              buttonStyle="OUTLINED"
              buttonText="Редактировать"
              onClickAction={() => navigate("../" + `${routes.EDIT_POST_PAGE}/item/${currentPost?.data?.id}`)}
            />
            <Button buttonStyle="OUTLINED" buttonText="Удалить пост" onClickAction={() => popupHandler(true)} />
          </div>
        )}
        <> {currentPost.data?.status === "archived" && <span>Пост в архиве</span>}</>
      </>

      <ContentBlockLayout
        contentTitle={`${currentPost?.data?.title ?? "Загрузка.."}`}
        customClassName="current-post-page__post-wrapper"
      >
        <div
          className="current-post-page__post"
          dangerouslySetInnerHTML={{ __html: currentPost?.data?.content ? currentPost?.data?.content : "" }}
        ></div>
      </ContentBlockLayout>
      <ContentBlockLayout customClassName="current-work-page__block" customContentClass="current-work-page__album">
        <Slider paginationInclude={false}>
          {currentPost.data ? (
            currentPost.data?.media_groups?.content?.map((item, index) => {
              return (
                <SwiperSlide>
                  <WorkItem
                    imageSource={item.storage_path}
                    itemId=""
                    itemTitle=""
                    isAlbumPhoto={true}
                    toggleZoom={() => {
                      toggleAlbumRender(true);
                      setZoomIndex(index);
                    }}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <Loader />
          )}
        </Slider>
      </ContentBlockLayout>
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

export default CurrentPostPage;
