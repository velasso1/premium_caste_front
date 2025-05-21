import { FC } from "react";

import { SwiperSlide } from "swiper/react";

import Slider from "#ui/slider/slider.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import pic1 from "#images/alfa-romeo.jpg";
import pic2 from "#images/audi.jpg";
import pic3 from "#images/toyota.jpg";

const SliderBlock: FC = () => {
  return (
    <div className="general-page__slider-block">
      {/* <div className="block-container"> */}
      <PageTitle pageName="Наши работы" isLink={true} linkHref={"../main/" + routes.OUR_WORKS_PAGE} />
      <Slider>
        <SwiperSlide>
          <SlideLayout imageUrl={pic1} slideText="Alfa Romeo Giulia True Blood" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic2} slideText="Audi A5 from Lime to Lemon" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic3} slideText="Toyota Highlander Cranberry" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic1} slideText="Alfa Romeo Giulia True Blood" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic2} slideText="Audi A5 from Lime to Lemon" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLayout imageUrl={pic3} slideText="Toyota Highlander Cranberry" />
        </SwiperSlide>
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default SliderBlock;
