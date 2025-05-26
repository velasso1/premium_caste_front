import { useParams } from "react-router-dom";

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

  console.log(params.id);

  return (
    <PageLayout pageClassName="current-post-page">
      <PageTitle pageName="TITLE OF POST" />

      <div className="current-post-page__post">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis recusandae eligendi aspernatur? Ducimus sint
        corporis aspernatur repellendus dolore enim ipsum laborum atque iusto distinctio tempore repellat iste libero,
        sapiente consequuntur? Repellat saepe quod nisi qui porro, sed at iste ratione, aliquam consectetur odio
        possimus quo. Ipsa voluptate, veniam neque atque quis repellendus aperiam velit inventore. Officia fugiat
        quibusdam mollitia illum. Tempore cum illo possimus iste natus fugit dolores pariatur quisquam hic velit? Quia,
        accusantium in commodi ea tempora ab, rem quo laboriosam voluptatem perspiciatis, molestias eligendi quas
        necessitatibus officiis consequuntur? Incidunt nostrum perspiciatis optio consequuntur dolor, illo molestiae,
        quo et saepe odit dolorum hic provident omnis ad soluta cupiditate nesciunt tenetur? Voluptatem aperiam aliquid
        error provident facere dolor quibusdam explicabo.
      </div>

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
