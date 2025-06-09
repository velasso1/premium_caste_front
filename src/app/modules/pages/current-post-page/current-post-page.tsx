import { FC, useEffect } from "react";

import { useParams } from "react-router-dom";

import {
  useGetCurrentPostQuery,
  useGetMediaGroupsOfPostQuery,
  useGetMediaGroupQuery,
  usePublishPostMutation,
} from "../../../store/api/posts-api";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setEffect } from "../../../store/slices/effects";

import { SwiperSlide } from "swiper/react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Slider from "#ui/slider/slider.tsx";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";
import Button from "#ui/button/button.tsx";

import pic1 from "#images/alfa-romeo.jpg";
import pic2 from "#images/audi.jpg";
import pic3 from "#images/toyota.jpg";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const CurrentPostPage: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  const [
    publishPost,
    { data: publishData, isLoading: publishLoading, isError: publishError, isSuccess: publishSuccess },
  ] = usePublishPostMutation();

  const { data, isLoading, isSuccess, isError } = useGetCurrentPostQuery({ post_id: params?.id });

  const {
    data: mediaData,
    isLoading: mediaLoading,
    isError: mediaError,
  } = useGetMediaGroupsOfPostQuery({ post_id: params?.id });

  useEffect(() => {
    if (publishSuccess) {
      dispatch(setEffect({ status: "success", message: "Пост успешно опубликован" }));
    }
  }, [publishSuccess]);

  return (
    <PageLayout pageClassName="current-post-page">
      <PageTitle pageName={data?.title ?? "Загрузка.."} />
      <>
        {userIsAdmin && (
          <div className="current-post-page__managing-buttons">
            <Button
              buttonStyle="OUTLINED"
              buttonText="Опубликовать"
              onClickAction={() => {
                if (params?.id) {
                  publishPost({ postId: params?.id });
                }
              }}
            />

            <Button buttonStyle="OUTLINED" buttonText="Архивировать" onClickAction={() => undefined} />

            <Button buttonStyle="OUTLINED" buttonText="Редактировать" onClickAction={() => undefined} />
            <Button buttonStyle="OUTLINED" buttonText="Удалить пост" onClickAction={() => undefined} />
          </div>
        )}
      </>

      <ContentBlockLayout>
        <div className="current-post-page__post">{data?.content}</div>

        <div className="current-post-page__album">
          {/* <Slider paginationInculde={false}>
          <SwiperSlide>
            <SlideLayout imageUrl={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <SlideLayout imageUrl={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <SlideLayout imageUrl={pic3} />
          </SwiperSlide>

          <SwiperSlide>
            <SlideLayout imageUrl={pic3} />
          </SwiperSlide>

          <SwiperSlide>
            <SlideLayout imageUrl={pic3} />
          </SwiperSlide>
        </Slider> */}
        </div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default CurrentPostPage;
