import { FC, useState } from "react";

import { IImageInfo } from "#types/api-types/api-response-types.ts";

import imageNotFound from "#images/not-found.webp";

interface IPreviewItemProps {
  item: IImageInfo;
  userId: string;
  onClick: () => void;
  isSelected: boolean;
}

const PreviewItem: FC<IPreviewItemProps> = ({ item, userId, onClick, isSelected = false }) => {
  const [imageIsError, setImageIsError] = useState<boolean>(false);

  const IMAGE_PATH = import.meta.env.VITE_UPLOADS_FILES + "uploads/" + userId + "/" + item.original_filename;

  return (
    <div className={`create-blog-post-page__preview-item${isSelected ? "--selected" : ""}`}>
      <img
        className="create-blog-post-page__preview-image"
        key={item.id}
        src={imageIsError ? imageNotFound : IMAGE_PATH}
        alt={item.original_filename}
        onClick={onClick}
        onError={() => {
          setImageIsError(true);
        }}
      />
    </div>
  );
};

export default PreviewItem;
