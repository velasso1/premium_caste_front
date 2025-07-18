import { FC } from "react";

import { SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";

import { useGetAllGalleriesQuery } from "../../../../store/api/galleries-api";

import Slider from "#ui/slider/slider.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import pic1 from "#images/alfa-romeo.jpg";
import pic2 from "#images/audi.jpg";
import pic3 from "#images/toyota.jpg";
import { ImageList } from "@mui/material";

const SliderBlock: FC = () => {
  const navigate = useNavigate();

  const getGalleries = useGetAllGalleriesQuery({ status: "published", page: "1", per_page: "6" });

  return (
    <div className="general-page__slider-block">
      {/* <div className="block-container"> */}
      <PageTitle pageName="Наши работы" isLink={true} linkHref={"../main/" + routes.OUR_WORKS_PAGE} />
      <Slider>
        {getGalleries.data?.galleries ? (
          getGalleries.data?.galleries.map((gallery, index) => {
            return (
              <SwiperSlide key={index} onClick={() => navigate(`../main/work/${gallery.id}`)}>
                <SlideLayout
                  imageUrl={import.meta.env.VITE_UPLOADS_FILES + gallery.images[0]}
                  slideText={gallery.title}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <SwiperSlide>
              <SlideLayout imageUrl={pic1} slideText={"Alfra Romeo"} />
            </SwiperSlide>
            <SwiperSlide>
              <SlideLayout imageUrl={pic2} slideText={"Audi"} />
            </SwiperSlide>
            <SwiperSlide>
              <SlideLayout imageUrl={pic3} slideText={"Porsche"} />
            </SwiperSlide>
          </>
        )}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default SliderBlock;
