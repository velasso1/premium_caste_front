import { FC } from "react";

// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideLayout from "./components/slide-layout";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// import arrow from "../../../assets/images/swiper-arrow.png";

const Slider: FC = () => {
  return (
    <div className="swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={"30"}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={true}
      >
        <SwiperSlide>
          <SlideLayout />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
