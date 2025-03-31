import { FC } from "react";

import VideoBlock from "./components/video-block";
import SliderBlock from "./components/slider-block";

const GeneralPage: FC = () => {
  return (
    <div className="general-page">
      <VideoBlock />
      <SliderBlock />
    </div>
  );
};

export default GeneralPage;
