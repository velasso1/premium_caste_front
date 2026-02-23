import { FC, useLayoutEffect, useEffect, useState } from "react";

// import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector } from "../../../../store";

import { useDeleteGalleryMutation } from "../../../../store/api/galleries-api";

import Loader from "#ui/loader/loader.tsx";
import Popup from "#ui/popup/popup.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import imageNotFound from "#images/not-found.webp";

interface IWorkItemProps {
  itemTitle: string;
  imageSource: string;
  itemId: string;
  toggleZoom: () => void;
  isAlbumPhoto?: boolean;
  isEdit?: boolean;
}

const WorkItem: FC<IWorkItemProps> = ({ itemTitle, imageSource, itemId, isAlbumPhoto, toggleZoom }) => {
  const navigate = useNavigate();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  const [deleteGallery, deletingGalleryStatus] = useDeleteGalleryMutation();

  const [imageState, setImageState] = useState<{ isLoaded: boolean; isError: boolean }>({
    isLoaded: false,
    isError: false,
  });

  // const [zoom, setZoom] = useState<boolean>(false);
  const [popupIsOpen, popupHandler] = useState<boolean>(false);
  const [idGalleryToDelete, selectGalleryId] = useState<string>("");

  // const toggleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
  // e.stopPropagation();
  // setZoom((prev) => !prev);
  // };

  const deleteGalelryHandler = (id: string): void => {
    deleteGallery({ id: id });
  };

  const linkTo = "../" + routes.CURRENT_GALLERY_PAGE + `/${itemId}`;

  return (
    <>
      <Popup
        isOpen={popupIsOpen}
        action={() => deleteGalelryHandler(idGalleryToDelete)}
        onClose={() => popupHandler(false)}
      />
      <Link
        to={linkTo}
        data-album={isAlbumPhoto}
        className="our-works-page__work-item"
      >
        <div className="our-works-page__banner">
          {!imageState.isLoaded && <Loader />}

          <img
            className="our-works-page__image"
            // data-zoom={zoom}
            data-album={isAlbumPhoto}
            src={imageState.isError ? imageNotFound : import.meta.env.VITE_UPLOADS_FILES + imageSource}
            style={{ opacity: imageState.isLoaded ? 1 : 0 }}
            onLoad={() => setImageState({ ...imageState, isLoaded: true })}
            onClick={(e) => {
              if (isAlbumPhoto) {
                e.stopPropagation();
                e.preventDefault();
                toggleZoom();
              }
            }}
            onError={() => setImageState({ ...imageState, isError: true })}
            alt={itemTitle}
          />

          {userIsAdmin && !isAlbumPhoto && (
            <div className="our-works-page__manage-buttons">
              <span
                className="our-works-page__change-button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  navigate("../" + routes.EDIT_WORK_PAGE + `/${itemId}`);
                }}
              >
                Изменить
              </span>
              <span
                className="our-works-page__delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  selectGalleryId(itemId);
                  popupHandler(true);
                }}
              >
                Удалить
              </span>
            </div>
          )}

          {!isAlbumPhoto && <span className="our-works-page__notice">подробнее</span>}
        </div>
        <div className="our-works-page__item-title">{itemTitle}</div>
      </Link>
    </>
  );
};

export default WorkItem;
