import { FC, useEffect } from "react";

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
import PageTitle from "#ui/page-title/page-title.tsx";
import Slider from "#ui/slider/slider.tsx";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";
import Loader from "#ui/loader/loader.tsx";
import WorkItem from "#pages/our-works-page/components/work-item.tsx";
import Button from "#ui/button/button.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import audi from "#images/audi.jpg";
import SliderBlock from "#pages/general-page/components/slider-block.tsx";

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
      <>
        {userIsAdmin && (
          <div className="current-post-page__managing-buttons">
            <Button
              buttonStyle="OUTLINED"
              buttonText="Опубликовать"
              onClickAction={() => {
                if (params?.id) {
                  publish({ postId: params?.id });
                }
              }}
            />

            <Button
              buttonStyle="OUTLINED"
              buttonText="Архивировать"
              onClickAction={() => {
                if (params.id) {
                  archive({ postId: params?.id });
                }
              }}
            />

            <Button buttonStyle="OUTLINED" buttonText="Редактировать" onClickAction={() => undefined} />
            <Button
              buttonStyle="OUTLINED"
              buttonText="Удалить пост"
              onClickAction={() => {
                if (params.id) {
                  deletePost({ postId: params?.id });
                  navigate(-1);
                }
              }}
            />
          </div>
        )}
      </>

      {/* <ContentBlockLayout customClassName="current-post-page__post-wrapper">
        <div className="current-post-page__album">
          <Slider paginationInculde={false}>
            {currentPost.data?.media_groups?.content?.map((item, index) => {
              return (
                <SwiperSlide>
                  <SlideLayout imageUrl={import.meta.env.VITE_UPLOADS_FILES + item.storage_path} />
                </SwiperSlide>
              );
            })}
          </Slider>
        </div>
      </ContentBlockLayout> */}
      <ContentBlockLayout customClassName="current-work-page__block" customContentClass="current-work-page__album">
        <Slider paginationInculde={false}>
          {currentPost.data ? (
            currentPost.data?.media_groups?.content?.map((item) => {
              return (
                <SwiperSlide>
                  <WorkItem imageSource={item.storage_path} itemId="" itemTitle="" isAlbumPhoto={true} />
                </SwiperSlide>
              );
            })
          ) : (
            <Loader />
          )}
        </Slider>
      </ContentBlockLayout>

      <ContentBlockLayout
        contentTitle={`${currentPost?.data?.title ?? "Загрузка.."}`}
        customClassName="current-post-page__post-wrapper"
      >
        <div className="current-post-page__post">{currentPost?.data?.content}</div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default CurrentPostPage;
