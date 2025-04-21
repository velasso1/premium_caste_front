import { FC } from "react";

import video from "../../../../assets/video/dodge-chalenger.mp4";
import premium from "#images/premiun-caste.png";

import poster from "#images/poster.png";

import arrow from "#images/arrow-down.png";

const VideoBlock: FC = () => {
  return (
    <div className="general-page__video">
      <img className="general-page__banner" src={premium} alt="premium caste" />
      <video
        className="general-page__clip"
        autoPlay={true}
        loop
        muted
        preload="auto"
        poster={poster}
        src={video}
      ></video>
      <span className="general-page__clue" onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}>
        <img className="general-page__arrow" src={arrow} alt="" />
      </span>
    </div>
  );
};

export default VideoBlock;
