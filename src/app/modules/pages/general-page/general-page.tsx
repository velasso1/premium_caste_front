import { FC } from "react";

import VideoBlock from "./components/video-block";
import Slider from "../../ui/slider/slider";

const GeneralPage: FC = () => {
  return (
    <div className="general-page">
      <VideoBlock />
      <Slider />
    </div>
  );
};

export default GeneralPage;
