import { FC, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { useCreateNewPostMutation } from "../../../../store/api/posts-api";
import { useGetAllImagesQuery } from "../../../../store/api/media-api";
import { setEffect } from "../../../../store/slices/effects";

import { useForm, SubmitHandler } from "react-hook-form";

import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";
import Loader from "#ui/loader/loader.tsx";
import LineNotification from "#ui/notifications/line-notification.tsx";

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

  const [postInfo, setPostInfo] = useState<IPostInfoPayload>(initialStatePost);
  const [previewSelected, setPreviewSelected] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPostInfoPayload>();

  useEffect(() => {
    if (newPostSuccess) {
      setPostInfo(initialStatePost);
      dispatch(setEffect({ status: "success", message: "Пост успешно создан!" }));
    }

    if (newPostError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка при загрузке данных" }));
    }
  }, [newPostSuccess, newPostError]);

  const createPostHandler =
    (postStatus: "draft" | "published"): SubmitHandler<IPostInfoPayload> =>
    (data) => {
      createNewPost({ ...data, author_id: userId, status: postStatus, featured_image_id: postInfo.featured_image_id });

      reset();
    };

  return (
    <ContentBlockLayout contentTitle="Содержание поста" customClassName="create-blog-post-page__post-info">
      <div className="create-blog-post-page__post-fields">
        {newPostLoading && <Loader />}

        {(errors.content || errors.title || errors.excerpt) && (
          <LineNotification text="Все поля должны быть заполнены" />
        )}

        {previewSelected && <LineNotification text="Выберите превью" />}

        <TextField
          className={`create-blog-post-page__post-title ${errors?.title && "field_error"}`}
          type="text"
          placeholder="Заголовок поста"
          {...register("title", { required: true })}
        />

        <TextField
          className={`create-blog-post-page__post-excerpt ${errors?.excerpt && "field_error"}`}
          type="text"
          placeholder="Краткое описание"
          {...register("excerpt", { required: true })}
        />

        <textarea
          className={`create-blog-post-page__post-content ${errors?.content && "field_error"}`}
          placeholder="Основной текст поста"
          {...register("content", { required: true })}
        />
      </div>
      <div className="create-blog-post-page__upload-container">
        Выберите превью для поста
        <div className="create-blog-post-page__preview-container">
          {data?.data ? (
            data?.data.map((item) => {
              const IMAGE_PATH = "http://localhost:8080/uploads/uploads/" + userId + "/" + item.original_filename;

              return (
                <div
                  className={`create-blog-post-page__preview-item ${
                    item.id === postInfo.featured_image_id ? "create-blog-post-page__preview-item--selected" : null
                  }`}
                >
                  <img
                    className="create-blog-post-page__preview-image"
                    key={item.id}
                    src={IMAGE_PATH}
                    alt={item.original_filename}
                    onClick={() => {
                      setPostInfo((prev) => ({ ...prev, featured_image_id: item.id }));
                    }}
                  />
                </div>
              );
            })
          ) : (
            <div>Пока что картинок нет</div>
          )}
        </div>
      </div>
      <div className="create-blog-post-page__buttons">
        <Button buttonText="Создать пост" onClickAction={handleSubmit(createPostHandler("draft"))} />
        <Button buttonText="Создать и опубликовать" onClickAction={handleSubmit(createPostHandler("published"))} />
      </div>
    </ContentBlockLayout>
  );
};

export default PostInformation;
