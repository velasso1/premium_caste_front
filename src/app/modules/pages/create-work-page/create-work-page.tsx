import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppSelector } from "../../../store";
import { useGetAllImagesQuery } from "../../../store/api/media-api";
import { useCreateNewGalleryMutation } from "../../../store/api/galleries-api";

import PostImages from "#pages/create-blog-post-page/components/post-images.tsx";
import PostInformation from "#pages/create-blog-post-page/components/post-information.tsx";

import Tag from "./components/tag";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";

import { SERVICES_ITEMS } from "#utils/auxuliary/services-items-list.ts";

import { ICreateGalleryPayload } from "#types/api-payload-types.ts";

const CreateWorkPage: FC = () => {
  const { userId } = useAppSelector((state) => state.userSlice);
  const { createGalleryTags } = useAppSelector((state) => state.galleriesSlice);

  const [createNewGallery, galleryStatus] = useCreateNewGalleryMutation();

  const images = useGetAllImagesQuery();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ICreateGalleryPayload>();

  const createGalleryHandler = (): SubmitHandler<ICreateGalleryPayload> => (data) => {
    createNewGallery({ ...data, tags: createGalleryTags, author_id: userId, cover_image_index: 0, slug: "null" });
  };

  return (
    <PageLayout pageClassName="create-work-page">
      <PageTitle pageName="Создание работы" />
      <PostImages />

      <ContentBlockLayout customClassName="create-work-page__gallery-info" contentTitle="Информация о работе">
        <div className="create-blog-post-page__post-fields">
          <TextField
            className={`create-blog-post-page__post-title ${errors?.title && "field_error"}`}
            type="text"
            placeholder="Заголовок работы"
            {...register("title", { required: true })}
          />
          <textarea
            className={`create-blog-post-page__post-content`}
            placeholder="Описание работы"
            {...register("description", { required: true })}
          />
          Выберите тег:
          <div className="create-work-page__tags">
            {SERVICES_ITEMS.map((item, index) => {
              return <Tag title={item.title} key={index} />;
            })}
          </div>
        </div>

        <div className="create-blog-post-page__upload-container">
          Выберите изображения
          <div className="create-blog-post-page__preview-container">
            {images?.data?.data ? (
              images?.data.data.map((item) => {
                const IMAGE_PATH =
                  import.meta.env.VITE_UPLOADS_FILES + "uploads/" + userId + "/" + item.original_filename;

                return (
                  <div className="create-blog-post-page__preview-item">
                    <img
                      className="create-blog-post-page__preview-image"
                      key={item.id}
                      src={IMAGE_PATH}
                      alt={item.original_filename}
                      onClick={() => {
                        // setPostInfo((prev) => ({ ...prev, featured_image_id: item.id }));
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <div>Пока что картинок нет</div>
            )}
          </div>
          <div className="create-blog-post-page__buttons">
            <Button
              buttonText="Создать"
              // disabled={attachedImages.length <= 1}
              // onClickAction={handleSubmit(updatePostHandler())}
              onClickAction={handleSubmit(createGalleryHandler())}
            />
          </div>
        </div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default CreateWorkPage;
