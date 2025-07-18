import { FC, useLayoutEffect, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store";

import { useDeleteGalleryMutation } from "../../../../store/api/galleries-api";

import Loader from "#ui/loader/loader.tsx";
import Popup from "#ui/popup/popup.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import deleteIcon from "#images/delete-icon.png";
import changeIcon from "#images/change-icon.png";

interface IWorkItemProps {
  itemTitle: string;
  imageSource: string;
  itemId: string;
  isAlbumPhoto?: boolean;
}

const WorkItem: FC<IWorkItemProps> = ({ itemTitle, imageSource, itemId, isAlbumPhoto }) => {
  const navigate = useNavigate();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  const [deleteGallery, deletingGalleryStatus] = useDeleteGalleryMutation();

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [zoom, setZoom] = useState<boolean>(false);
  const [popupIsOpen, popupHandler] = useState<boolean>(false);
  const [idGalleryToDelete, selectGalleryId] = useState<string>("");

  const toggleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setZoom((prev) => !prev);
  };

  const deleteGalelryHandler = (id: string): void => {
    deleteGallery({ id: id });
  };

  return (
    <>
      <Popup
        isOpen={popupIsOpen}
        action={() => deleteGalelryHandler(idGalleryToDelete)}
        onClose={() => popupHandler(false)}
      />
      <div
        className="our-works-page__work-item"
        onClick={(e) => {
          navigate("../" + routes.CURRENT_GALLERY_PAGE + `/${itemId}`);
        }}
      >
        <div className="our-works-page__banner">
          {!imageLoaded && <Loader />}
          {userIsAdmin && (
            <>
              <img
                className="our-works-page__delete-button"
                src={deleteIcon}
                alt="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  selectGalleryId(itemId);
                  popupHandler(true);
                }}
              />
              <img
                className="our-works-page__change-button"
                src={changeIcon}
                alt="change"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </>
          )}

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
    </>
  );
};

export default WorkItem;
