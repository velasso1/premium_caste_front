import { FC, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { useCreateNewPostMutation } from "../../../../store/api/posts-api";
import { useGetAllImagesQuery } from "../../../../store/api/media-api";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";
import Loader from "#ui/loader/loader.tsx";

import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";
import { setEffect } from "../../../../store/slices/effects";

const initialStatePost: IPostInfoPayload = {
  author_id: "",
  content: "",
  excerpt: "",
  featured_image_id: "",
  status: "draft",
  title: "",
};

const PostInformation: FC = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isSuccess, isError } = useGetAllImagesQuery();
  const [
    createNewPost,
    { data: newPostData, error, isLoading: newPostLoading, isSuccess: newPostSuccess, isError: newPostError },
  ] = useCreateNewPostMutation();

  const { userId } = useAppSelector((state) => state.userSlice);

  const [postInfo, setPostInfo] = useState<IPostInfoPayload>({ ...initialStatePost, author_id: userId });

  useEffect(() => {
    if (newPostSuccess) {
      setPostInfo(initialStatePost);
      dispatch(setEffect({ status: "success", message: "Пост успешно создан!" }));
    }

    if (newPostError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка при загрузке данных" }));
    }
  }, [newPostSuccess, newPostError]);

  const createPostHandler = (createStatus: "draft" | "published") => {
    createNewPost({ ...postInfo, status: createStatus });
  };

  return (
    <ContentBlockLayout contentTitle="Содержание поста" customClassName="create-blog-post-page__post-info">
      <div className="create-blog-post-page__post-fields">
        {newPostLoading && <Loader />}
        <TextField
          className="create-blog-post-page__post-title"
          type="text"
          placeholder="Заголовок поста"
          onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value.trim() })}
        />

        <TextField
          className="create-blog-post-page__post-excerpt"
          type="text"
          placeholder="Краткое описание"
          onChange={(e) => setPostInfo({ ...postInfo, excerpt: e.target.value.trim() })}
        />

        <textarea
          className="create-blog-post-page__post-content"
          placeholder="Основной текст поста"
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
              onClick={() => setPostInfo((prev) => ({ ...prev, featured_image_id: item.id }))}
            />
          );
        })}
      </div>
      <div className="create-blog-post-page__buttons">
        <Button
          buttonText="Создать пост"
          onClickAction={() => {
            createPostHandler("draft");
          }}
        />
        <Button
          buttonText="Создать и опубликовать"
          onClickAction={() => {
            createPostHandler("published");
          }}
        />
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
