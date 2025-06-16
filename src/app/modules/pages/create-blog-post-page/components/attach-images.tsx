import { FC } from "react";

import { IGetAllImagesResponse } from "#types/api-response-types.ts";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectImagesForPost } from "../../../../store/slices/posts";

interface IAttachImagesProps {
  images: IGetAllImagesResponse | undefined;
  userId: string;
}

const AttachImages: FC<IAttachImagesProps> = ({ images, userId }) => {
  const dispatch = useAppDispatch();

  const { attachedImages } = useAppSelector((state) => state.postsSlice);

  return (
    <div className="create-blog-post-page__upload-container">
      Прикрепите набор картинок к посту
      <div className="create-blog-post-page__preview-container">
        {images?.data ? (
          images?.data.map((item) => {
            const IMAGE_PATH = import.meta.env.VITE_UPLOADS_FILES + "uploads/" + userId + "/" + item.original_filename;

            return (
              <div className={`create-blog-post-page__preview-item`}>
                <img
                  className="create-blog-post-page__preview-image"
                  key={item.id}
                  src={IMAGE_PATH}
                  alt={item.original_filename}
                  onClick={() => {
                    dispatch(selectImagesForPost(item.id));
                  }}
                />
                {attachedImages.includes(item.id) && (
                  <button
                    type="button"
                    className="create-blog-post-page__remove-button"
                    aria-label="Удалить изображение"
                  >
                    {attachedImages.indexOf(item.id) + 1}
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div>Пока что картинок нет</div>
        )}
      </div>
    </div>
  );
};

export default AttachImages;
