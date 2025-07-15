import { FC, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Loader from "#ui/loader/loader.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

interface IWorkItemProps {
  itemTitle: string;
  imageSource: string;
  itemId: string;
}

const WorkItem: FC<IWorkItemProps> = ({ itemTitle, imageSource, itemId }) => {
  const navigate = useNavigate();

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div
      className="our-works-page__work-item"
      onClick={() => navigate("../" + routes.CURRENT_GALLERY_PAGE + `/${itemId}`)}
    >
      <div className="our-works-page__banner">
        {!imageLoaded && <Loader />}
        <img
          className="our-works-page__image"
          src={import.meta.env.VITE_UPLOADS_FILES + imageSource}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          alt={itemTitle}
        />
        <span className="our-works-page__notice">подробнее</span>
      </div>
      <div className="our-works-page__item-title">{itemTitle}</div>
    </div>
  );
};

export default WorkItem;
