import { FC } from "react";

import Slider from "../../../ui/slider/slider";
import PageTitle from "../../../ui/page-title/page-title";

const SliderBlock: FC = () => {
  return (
    <div className="general-page__slider-block">
      <div className="block-container">
        <PageTitle pageName="Наши работы" />
        <Slider />
      </div>
    </div>
  );
};

export default SliderBlock;
