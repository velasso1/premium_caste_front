import { FC, useState } from "react";

import { useGetAllImagesQuery } from "../../../../store/api/media-api";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";

import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

const initialStatePost: IPostInfoPayload = {
  title: "",
  content: "",
  excerpt: "",
  author_id: "",
  featured_image_id: "",
  status: "draft",
};

const PostInformation: FC = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllImagesQuery();

  const [postInfo, setPostInfo] = useState<IPostInfoPayload>(initialStatePost);

  return (
    <ContentBlockLayout contentTitle="Содержание поста" customClassName="create-blog-post-page__post-info">
      <div className="create-blog-post-page__post-fields">
        <TextField
          className="create-blog-post-page__post-title"
          type="text"
          placeholder="Заголовок"
          onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value.trim() })}
        />

        <TextField
          className="create-blog-post-page__post-excerpt"
          type="text"
          placeholder="Превью для поста"
          onChange={(e) => setPostInfo({ ...postInfo, excerpt: e.target.value.trim() })}
        />

        <textarea
          className="create-blog-post-page__post-content"
          placeholder="Текст поста"
          onChange={(e) => setPostInfo({ ...postInfo, content: e.target.value.trim() })}
        />
      </div>

      <div className="create-blog-post-page__preview-container">
        Прикрепить загруженные фото к посту
        {data?.data.map((item, index) => {
          return (
            <img
              className="create-blog-post-page__preview-image"
              key={item.id}
              src={"http://localhost:8080/" + item.storage_path}
              alt={item.original_filename}
              onClick={() => console.log(item.id)}
            />
          );
        })}
      </div>
      <div className="create-blog-post-page__buttons">
        <Button buttonText="Создать пост" onClickAction={() => alert("Пост создан")} />
        <Button buttonText="Создать и опубликовать" onClickAction={() => alert("Пост создан")} />
      </div>
    </ContentBlockLayout>
  );
};

export default PostInformation;

// {
//   "author_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "content": "string",
//   "excerpt": "string",
//   "featured_image_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "metadata": {
//     "additionalProp1": "string",
//     "additionalProp2": "string",
//     "additionalProp3": "string"
//   },
//   "published_at": "string",
//   "slug": "string",
//   "status": "draft",
//   "title": "string"
// }
