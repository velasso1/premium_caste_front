import { FC, useEffect, useState } from "react";

import arrow from "#images/arrow-down.png";

interface IAlbumProps {
  photos: string[];
  zoomPhotoIndex: number;
  toggleZoom: () => void;
}

const Album: FC<IAlbumProps> = ({ photos, toggleZoom, zoomPhotoIndex = 0 }) => {
  const [zoomIndex, setZoomIndex] = useState<number>(zoomPhotoIndex);

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setZoomIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setZoomIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => window.removeEventListener("keydown", keydownHandler);
  }, [photos.length]);

  const zoomHandler = (dir: "prev" | "next", event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    switch (dir) {
      case "prev":
        setZoomIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
        break;

      case "next":
        setZoomIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
        break;

      default:
        return;
    }
  };

  return (
    <div
      className="album"
      onClick={(e) => {
        toggleZoom();
      }}
    >
      <div className="album__prev-arrow" onClick={(event) => zoomHandler("prev", event)}>
        <img src={arrow} alt="previous_photo" />
      </div>

      {photos.length
        ? photos.map((photo, index) => {
            if (zoomIndex !== index) {
              return;
            }

            return (
              <img
                className="album__photo"
                key={photo}
                src={import.meta.env.VITE_UPLOADS_FILES + photo}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  toggleZoom();
                }}
              />
            );
          })
        : null}

      <div className="album__next-arrow" onClick={(event) => zoomHandler("next", event)}>
        <img src={arrow} alt="next_photo" />
      </div>
    </div>
  );
};

export default Album;
