import { FC } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

interface IWorkItemProps {
  itemTitle: string;
  imageSource: string;
  itemId: string;
}

const WorkItem: FC<IWorkItemProps> = ({ itemTitle, imageSource, itemId }) => {
  const navigate = useNavigate();

  return (
    <div
      className="our-works-page__work-item"
      onClick={() => navigate("../" + routes.CURRENT_GALLERY_PAGE + `/${itemId}`)}
    >
      <div className="our-works-page__banner">
        <img className="our-works-page__image" src={import.meta.env.VITE_UPLOADS_FILES + imageSource} alt="tesla" />
        <span className="our-works-page__notice">подробнее</span>
      </div>
      <div className="our-works-page__item-title">{itemTitle}</div>
    </div>
  );
};

export default WorkItem;
