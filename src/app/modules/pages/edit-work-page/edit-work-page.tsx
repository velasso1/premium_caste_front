import { FC, useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../../store";
import { useGetGalleryByIdQuery, useEditGalleryMutation } from "../../../store/api/galleries-api";
import { useGetAllImagesQuery } from "../../../store/api/media-api";
import { setEffect } from "../../../store/slices/effects";
import { clearSelectedTags, editGalleryTags } from "../../../store/slices/galleries";

import { ICreateGalleryPayload } from "#types/api-payload-types.ts";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";

import Tag from "#pages/create-work-page/components/tag.tsx";
import Button from "#ui/button/button.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";
import { routes } from "#utils/routes/main-routes/main-routes.ts";

const EditWorkPage: FC = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userId } = useAppSelector((state) => state.userSlice);
  const { createGalleryTags } = useAppSelector((state) => state.galleriesSlice);

  const [editGallery, editGalleryStatus] = useEditGalleryMutation();
  const [attachedImages, setAttachedImages] = useState<string[]>([]);

  const getGallery = useGetGalleryByIdQuery({ id: id || "" });
  const images = useGetAllImagesQuery();

  useEffect(() => {
    if (getGallery.isSuccess) {
      setAttachedImages(() => {
        return getGallery.data.images;
      });

      dispatch(editGalleryTags(getGallery.data.tags));
    }
  }, [getGallery]);

  useEffect(() => {
    if (editGalleryStatus.isSuccess) {
      dispatch(setEffect({ status: "success", message: "Данные изменены" }));
      dispatch(clearSelectedTags());
      setAttachedImages([]);
      reset();
      navigate("../" + routes.OUR_WORKS_PAGE);
      return;
    }

    if (editGalleryStatus.isError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка, повторите позже" }));
    }
  }, [editGalleryStatus]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ICreateGalleryPayload>();

  const imageAttachHandler = (path: string): void => {
    setAttachedImages((prev) => {
      if (attachedImages.includes(path)) {
        return prev.filter((imagePath) => imagePath !== path);
      }
      return [...prev, path];
    });
  };

  const workChangeHandler = (): SubmitHandler<ICreateGalleryPayload> => (data) => {
    editGallery({
      ...data,
      tags: createGalleryTags,
      author_id: userId,
      status: "published",
      cover_image_index: 0,
      slug: data.title,
      images: attachedImages,
      id: id,
    });
    console.log(
      JSON.stringify({
        ...data,
        tags: ["Всё", ...createGalleryTags],
        author_id: userId,
        status: "published",
        cover_image_index: 0,
        slug: data.title,
        images: attachedImages,
        id: id,
      })
    );
  };

  return (
    <PageLayout pageClassName="edit-work-page">
      <PageTitle pageName="Редактирование галереи" />
      <ContentBlockLayout customClassName="create-work-page__gallery-info" contentTitle="Информация о работе">
        <div className="create-blog-post-page__post-fields">
          <TextField
            className={`create-blog-post-page__post-title ${errors?.title && "field_error"}`}
            type="text"
            placeholder="Заголовок работы"
            defaultValue={getGallery.data?.title}
            {...register("title", { required: true })}
          />
          <textarea
            className={`create-blog-post-page__post-content`}
            placeholder="Описание работы"
            defaultValue={getGallery.data?.description}
            {...register("description", { required: true })}
          />
          Выберите тег:
          <div className="create-work-page__tags">
            {sidebarItemsWorks.map((item, index) => {
              if (item.itemName === "Всё") return;
              return <Tag title={item.itemName} key={index} />;
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
                  <div
                    className={`create-blog-post-page__preview-item ${
                      attachedImages.includes(item.storage_path)
                        ? "create-blog-post-page__preview-item--selected"
                        : null
                    }`}
                    onClick={() => imageAttachHandler(item.storage_path)}
                  >
                    <img
                      className="create-blog-post-page__preview-image"
                      key={item.id}
                      src={IMAGE_PATH}
                      alt={item.original_filename}
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
              buttonText="Сохранить"
              disabled={attachedImages.length <= 1}
              onClickAction={handleSubmit(workChangeHandler())}
            />
          </div>
        </div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default EditWorkPage;
