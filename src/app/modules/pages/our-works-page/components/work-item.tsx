import { FC } from "react";

interface IWorkItemProps {
  itemTitle: string;
  imageSource: string;
}

const WorkItem: FC<IWorkItemProps> = ({ itemTitle, imageSource }) => {
  return (
    <div className="our-works-page__work-item">
      <div className="our-works-page__banner">
        <img className="our-works-page__image" src={imageSource} alt="tesla" />
        <span className="our-works-page__notice">подробнее</span>
      </div>
      <div className="our-works-page__item-title">{itemTitle}</div>
    </div>
  );
};

export default WorkItem;
