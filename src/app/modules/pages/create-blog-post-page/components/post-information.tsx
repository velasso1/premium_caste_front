import { FC, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { useCreateNewPostMutation } from "../../../../store/api/posts-api";
import { useGetAllImagesQuery } from "../../../../store/api/media-api";
import { setEffect } from "../../../../store/slices/effects";

import { useForm, SubmitHandler } from "react-hook-form";

import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import AttachImages from "./attach-images";

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

  const { userId } = useAppSelector((state) => state.userSlice);
  const { attachedImages } = useAppSelector((state) => state.postsSlice);

  const images = useGetAllImagesQuery();
  const [createNewPost, creatingStatus] = useCreateNewPostMutation();

  const [postInfo, setPostInfo] = useState<IPostInfoPayload>(initialStatePost);
  const [previewSelected, setPreviewSelected] = useState<boolean>(false);
  const [creatingStep, setCreatingStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPostInfoPayload>();

  useEffect(() => {
    if (creatingStatus.isSuccess) {
      setPostInfo(initialStatePost);
      dispatch(setEffect({ status: "success", message: "Пост успешно создан!" }));
    }

    if (creatingStatus.isError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка при загрузке данных" }));
    }
  }, [creatingStatus]);

  const createPostHandler =
    (postStatus: "draft" | "published"): SubmitHandler<IPostInfoPayload> =>
    (data) => {
      if (postInfo.featured_image_id === "") {
        setPreviewSelected(true);
        return;
      }

      createNewPost({ ...data, author_id: userId, status: postStatus, featured_image_id: postInfo.featured_image_id });
      setPreviewSelected(false);
      reset();
    };

  return (
    <ContentBlockLayout contentTitle="Содержание поста" customClassName="create-blog-post-page__post-info">
      <div className="create-blog-post-page__post-fields">
        {creatingStatus.isLoading && <Loader />}

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

      <>
        {creatingStep === 1 && (
          <div className="create-blog-post-page__upload-container">
            Выберите превью для поста
            <div className="create-blog-post-page__preview-container">
              {images?.data?.data ? (
                images?.data.data.map((item) => {
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
        )}
      </>

      <>{creatingStep === 2 && <AttachImages images={images?.data} userId={userId} />}</>

      <div className="create-blog-post-page__buttons">
        {creatingStep === 1 && <Button buttonText="Далее" onClickAction={() => setCreatingStep(2)} />}
        {creatingStep === 2 && (
          <>
            <Button buttonText="Назад" onClickAction={() => setCreatingStep((prev) => prev - 1)} />
            <Button
              buttonText="Создать пост"
              disabled={attachedImages.length <= 1}
              onClickAction={handleSubmit(createPostHandler("draft"))}
            />
            <Button
              buttonText="Создать и опубликовать"
              disabled={attachedImages.length <= 1}
              onClickAction={handleSubmit(createPostHandler("published"))}
            />
          </>
        )}
      </div>
    </ContentBlockLayout>
  );
};

export default PostInformation;
