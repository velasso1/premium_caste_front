import { FC, MutableRefObject, useRef } from "react";

import VideoBlock from "./components/video-block";
import SliderBlock from "./components/slider-block";
import PromotionBlock from "./components/promotion-block";
import AboutBlock from "./components/about-block";
import PlaceBlock from "./components/place-block";

import { useLocation, useParams } from "react-router-dom";

const GeneralPage: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!targetRef.current) return;

    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="general-page">
      <VideoBlock scrollHandler={handleScroll} />
      <SliderBlock ref={targetRef} />
      {/* <PromotionBlock /> */}
      <AboutBlock />
      <PlaceBlock />
    </div>
  );
};

export default GeneralPage;
