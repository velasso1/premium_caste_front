import { FC, useState, useRef, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../../store";
import { setEffect } from "../../../../store/slices/effects";
import { useUploadMediaMutation } from "../../../../store/api/media-api";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";

import Loader from "#ui/loader/loader.tsx";

const PostImages: FC = () => {
  const dispatch = useAppDispatch();
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const [uploadImages, { data, isSuccess, isLoading, isError }] = useUploadMediaMutation();

  const { userId } = useAppSelector((state) => state.userSlice);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setEffect({ status: "success", message: "Изображение успешно загружено" }));

      setPreviews(() => []);
      setSelectedFiles(() => []);
    }
  }, [isSuccess]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const validFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));

    setSelectedFiles((prev) => [...prev, ...validFiles]);

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));

    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removePreview = (index: number) => {
    setPreviews((prev) => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index]);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const uploadFiles = () => {
    if (previews.length === 0) return;

    const formData = new FormData();

    selectedFiles.forEach((file, index) => {
      formData.append(`file`, file);
    });

    formData.append("uploader_id", userId);
    formData.append("media_type", "photo");
    formData.append("width", "100");
    formData.append("height", "100");

    uploadImages(formData);
  };

  return (
    <ContentBlockLayout contentTitle="Загрузка изображений" customClassName="create-blog-post-page__images-upload">
      <div className="create-blog-post-page__upload-container">
        {isLoading && <Loader />}
        <label className="create-blog-post-page__custom-file-button">
          <input
            className="visually-hidden"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            multiple
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <span>Выбрать медиа</span>
        </label>

        <div className="create-blog-post-page__preview-container">
          {previews.map((preview, index) => (
            <div key={preview} className="create-blog-post-page__preview-item">
              <img src={preview} alt={`Preview ${index}`} className="create-blog-post-page__preview-image" />
              <button
                type="button"
                className="create-blog-post-page__remove-button"
                onClick={() => removePreview(index)}
                aria-label="Удалить изображение"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <Button disabled={previews.length === 0} buttonText="Загрузить" onClickAction={uploadFiles} />
      </div>
    </ContentBlockLayout>
  );
};

export default PostImages;
