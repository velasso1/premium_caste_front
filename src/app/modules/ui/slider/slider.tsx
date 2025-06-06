import React, { FC, useRef } from "react";

import SlideLayout from "./components/slide-layout";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper/types";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ISliderProps {
  children: React.ReactElement[];
  navigationInculde?: boolean;
  paginationInculde?: boolean;
}

const Slider: FC<ISliderProps> = ({ children, paginationInculde = true, navigationInculde = true }) => {
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
        pagination={paginationInculde}
        navigation={navigationInculde}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={(s, time, progress) => onAutoplayTimeLeft(s, time, progress)}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1640: {
            slidesPerView: 3,
          },

          1920: {
            slidesPerView: 4,
          },

          2200: {
            slidesPerView: 5,
          },
        }}
      >
        {children}
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
