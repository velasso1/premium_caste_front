import { useParams } from "react-router-dom";

import {
  useGetCurrentPostQuery,
  useGetMediaGroupsOfPostQuery,
  useGetMediaGroupQuery,
} from "../../../store/api/posts-api";

import { SwiperSlide } from "swiper/react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Slider from "#ui/slider/slider.tsx";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";
import Button from "#ui/button/button.tsx";

import pic1 from "#images/alfa-romeo.jpg";
import pic2 from "#images/audi.jpg";
import pic3 from "#images/toyota.jpg";

const CurrentPostPage = () => {
  const params = useParams();

  const { data, isLoading, isSuccess, isError } = useGetCurrentPostQuery({ post_id: params?.id });

  const {
    data: mediaData,
    isLoading: mediaLoading,
    isError: mediaError,
  } = useGetMediaGroupsOfPostQuery({ post_id: params?.id });

  console.log("MEDIA GROUPS:", mediaData);

  return (
    <PageLayout pageClassName="current-post-page">
      <PageTitle pageName={data?.title ?? "Загрузка.."} />

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
    </PageLayout>
  );
};

export default CurrentPostPage;
