import React, { FC } from "react";

interface ISlideLayoutProps {
  imageUrl: string;
  slideText?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const SlideLayout: FC<ISlideLayoutProps> = ({ imageUrl, slideText, children }) => {
  return (
    <div className="slide-layout">
      {children ? (
        children
      ) : (
        <div className="slide-layout__picture">
          <img src={imageUrl} alt="" className="slide-layout__image" />
          <span className="slide-layout__title">{slideText}</span>
        </div>
      )}
    </div>
  );
};

export default SlideLayout;
