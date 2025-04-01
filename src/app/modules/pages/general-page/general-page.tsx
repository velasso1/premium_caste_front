import { FC } from "react";

import VideoBlock from "./components/video-block";
import SliderBlock from "./components/slider-block";
import PromotionBlock from "./components/promotion-block";
import AboutBlock from "./components/about-block";
import PlaceBlock from "./components/place-block";

const GeneralPage: FC = () => {
  return (
    <div className="general-page">
      <VideoBlock />
      <SliderBlock />
      <PromotionBlock />
      <AboutBlock />
      <PlaceBlock />
    </div>
  );
};

export default GeneralPage;
