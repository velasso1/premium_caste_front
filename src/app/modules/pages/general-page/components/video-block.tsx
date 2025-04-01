import { FC } from "react";

import video from "../../../../assets/video/dodge-chalenger.mp4";
import premium from "../../../../assets/images/premiun-caste.png";

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
        src={video}
      ></video>
    </div>
  );
};

export default VideoBlock;
