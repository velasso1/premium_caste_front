import { FC, useState, useRef } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";

const PostImages: FC = () => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [inputState, setInputState] = useState(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const validFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));

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

  return (
    <ContentBlockLayout contentTitle="Загрузка изображений">
      <div className="create-blog-post-page__upload-container">
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
      </div>
      <Button buttonText="Загрузить" onClickAction={() => console.log(previews)} />
    </ContentBlockLayout>
  );
};

export default PostImages;
