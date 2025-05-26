import { useParams } from "react-router-dom";

import { SwiperSlide } from "swiper/react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import Slider from "#ui/slider/slider.tsx";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";

import pic1 from "#images/alfa-romeo.jpg";
import pic2 from "#images/audi.jpg";
import pic3 from "#images/toyota.jpg";

const CurrentPostPage = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <PageLayout pageClassName="current-post-page">
      <PageTitle pageName=" " />
      <Slider>
        <SwiperSlide>
          <SlideLayout imageUrl={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic3} />
        </SwiperSlide>
      </Slider>
    </PageLayout>
  );
};

export default CurrentPostPage;
