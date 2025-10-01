import { FC } from "react";

import PreviewItem from "./preview-item";

import { IGetAllImagesResponse } from "#types/api-types/api-response-types.ts";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

interface IPreviewContainerProps {
  creatingStep: number;
  images: IGetAllImagesResponse | undefined;
  postInfo: IPostInfoPayload;
  setPostInfo: (arg: IPostInfoPayload) => void;
  userId: string;
}

const PreviewContainer: FC<IPreviewContainerProps> = ({ creatingStep, images, postInfo, setPostInfo, userId }) => {
  return (
    <>
      {creatingStep === 1 && (
        <div className="create-blog-post-page__upload-container">
          Выберите превью для поста
          <div className="create-blog-post-page__preview-container">
            {images?.data ? (
              images?.data.map((item, index) => {
                return (
                  <PreviewItem key={index} item={item} postInfo={postInfo} setPostInfo={setPostInfo} userId={userId} />
                );
              })
            ) : (
              <div>Пока что картинок нет</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewContainer;
