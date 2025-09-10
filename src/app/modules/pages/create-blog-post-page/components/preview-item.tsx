import { FC, useState } from "react";

import { IImageInfo } from "#types/api-types/api-response-types.ts";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import imageNotFound from "#images/not-found.webp";

interface IPreviewItemProps {
  item: IImageInfo;
  postInfo: IPostInfoPayload;
  setPostInfo: (postInfo: IPostInfoPayload) => void;
  userId: string;
}

const PreviewItem: FC<IPreviewItemProps> = ({ item, postInfo, setPostInfo, userId }) => {
  const [imageIsError, setImageIsError] = useState<boolean>(false);

  const IMAGE_PATH = import.meta.env.VITE_UPLOADS_FILES + "uploads/" + userId + "/" + item.original_filename;

  return (
    <div className={`create-blog-post-page__preview-item${item.id === postInfo.featured_image_id ? "--selected" : ""}`}>
      <img
        className="create-blog-post-page__preview-image"
        key={item.id}
        src={imageIsError ? imageNotFound : IMAGE_PATH}
        // src={IMAGE_PATH}
        alt={item.original_filename}
        onClick={() => {
          setPostInfo({ ...postInfo, featured_image_id: item.id });
        }}
        onError={() => {
          setImageIsError(true);
          //   console.log("error");
        }}
      />
    </div>
  );
};

export default PreviewItem;
