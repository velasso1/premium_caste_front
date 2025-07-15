import { FC, useLayoutEffect, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Loader from "#ui/loader/loader.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

interface IWorkItemProps {
  itemTitle: string;
  imageSource: string;
  itemId: string;
  isAlbumPhoto?: boolean;
}

const WorkItem: FC<IWorkItemProps> = ({ itemTitle, imageSource, itemId, isAlbumPhoto }) => {
  const navigate = useNavigate();

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [zoom, setZoom] = useState<boolean>(false);

  const toggleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setZoom((prev) => !prev);
  };

  return (
    <div
      className="our-works-page__work-item"
      onClick={(e) => {
        navigate("../" + routes.CURRENT_GALLERY_PAGE + `/${itemId}`);
      }}
    >
      <div className="our-works-page__banner">
        {!imageLoaded && <Loader />}
        <img
          className="our-works-page__image"
          data-zoom={zoom}
          src={import.meta.env.VITE_UPLOADS_FILES + imageSource}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          onClick={(e) => (isAlbumPhoto ? toggleZoom(e) : null)}
          alt={itemTitle}
        />
        {!isAlbumPhoto && <span className="our-works-page__notice">подробнее</span>}
      </div>
      <div className="our-works-page__item-title">{itemTitle}</div>
    </div>
  );
};

export default WorkItem;
