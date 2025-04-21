import { FC } from "react";

import Slider from "../../../ui/slider/slider";
import PageTitle from "../../../ui/page-title/page-title";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const SliderBlock: FC = () => {
  return (
    <div className="general-page__slider-block">
      {/* <div className="block-container"> */}
      <PageTitle pageName="Наши работы" isLink={true} linkHref={"../main/" + routes.OUR_WORKS_PAGE} />
      <Slider />
      {/* </div> */}
    </div>
  );
};

export default SliderBlock;
