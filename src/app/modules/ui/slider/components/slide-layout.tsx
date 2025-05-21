import { FC } from "react";

interface ISlideLayoutProps {
  imageUrl: string;
  slideText?: string;
}

const SlideLayout: FC<ISlideLayoutProps> = ({ imageUrl, slideText }) => {
  return (
    <div className="slide-layout">
      <div className="slide-layout__picture">
        <img src={imageUrl} alt="" className="slide-layout__image" />
        <span className="slide-layout__title">{slideText}</span>
      </div>
    </div>
  );
};

export default SlideLayout;
