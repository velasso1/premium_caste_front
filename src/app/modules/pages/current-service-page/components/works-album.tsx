import { FC } from "react";

import { IGalleryResponse } from "#types/api-response-types.ts";

import WorkItem from "#pages/our-works-page/components/work-item.tsx";
import Slider from "#ui/slider/slider.tsx";
import { SwiperSlide } from "swiper/react";
import SlideLayout from "#ui/slider/components/slide-layout.tsx";

interface IWorksAlbumProps {
  galleries: IGalleryResponse[] | undefined;
}

const WorksAlbum: FC<IWorksAlbumProps> = ({ galleries }) => {
  return (
    <div className="current-post-page__album">
      <Slider paginationInculde={false}>
        {galleries
          ? galleries.map((galleries, index) => {
              return galleries.images.map((image) => {
                return (
                  <SwiperSlide>
                    <SlideLayout imageUrl="none">
                      <WorkItem itemTitle={galleries.title} itemId={galleries.id} imageSource={image} />
                    </SlideLayout>
                  </SwiperSlide>
                );
              });
            })
          : "Пока что таких работ нет"}
      </Slider>
    </div>
  );
};

export default WorksAlbum;
