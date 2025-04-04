import { FC, useRef } from "react";

import SlideLayout from "./components/slide-layout";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper/types";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pic1 from "../../../assets/images/belt.png";
import pic2 from "../../../assets/images/vinyl.png";
import pic3 from "../../../assets/images/toner-film.png";

const Slider: FC = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
    }
  };

  return (
    <div className="swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={"0"}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={(s, time, progress) => onAutoplayTimeLeft(s, time, progress)}
      >
        <SwiperSlide>
          <SlideLayout imageUrl={pic1} slideText="Виниловые плёнки" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic2} slideText="Цветные ремни и автоковры" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic3} slideText="Тонировочные плёнки" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic1} slideText="Виниловые плёнки" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic2} slideText="Цветные ремни и автоковры" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic3} slideText="Тонировочные плёнки" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic1} slideText="Виниловые плёнки" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic2} slideText="Цветные ремни и автоковры" />
        </SwiperSlide>
        {/* progress bar */}
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </div>
  );
};

export default Slider;
