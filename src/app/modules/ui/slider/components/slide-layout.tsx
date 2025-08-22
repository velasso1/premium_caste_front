import React, { FC, useState } from "react";

import imageNotFound from "#images/not-found.webp";

interface ISlideLayoutProps {
  imageUrl: string;
  slideText?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const SlideLayout: FC<ISlideLayoutProps> = ({ imageUrl, slideText, children }) => {
  const [imageLoaded, setImageState] = useState<boolean>(true);

  return (
    <div className="slide-layout">
      {children ? (
        children
      ) : (
        <div className="slide-layout__picture">
          <img
            src={imageNotFound ? imageNotFound : imageUrl}
            alt=""
            className="slide-layout__image"
            onError={() => setImageState(false)}
          />
          <span className="slide-layout__title">{slideText}</span>
        </div>
      )}
    </div>
  );
};

export default SlideLayout;
