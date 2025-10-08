import { FC, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../../store";
import { useGetAllImagesQuery } from "../../../store/api/media-api";
import { useCreateNewGalleryMutation } from "../../../store/api/galleries-api";
import { setEffect } from "../../../store/slices/effects";
import { clearSelectedTags } from "../../../store/slices/galleries";

import PostImages from "#pages/create-blog-post-page/components/post-images.tsx";
import PostInformation from "#pages/create-blog-post-page/components/post-information.tsx";

import Tag from "./components/tag";

import { IGalleryResponse } from "#types/api-types/api-response-types.ts";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";

// import { SERVICES_ITEMS } from "#utils/auxuliary/services-items-list.ts";
import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";

import { ICreateGalleryPayload } from "#types/api-types/api-payload-types.ts";
import TextEditor from "#ui/text-editor/text-editor.tsx";

interface ICreaateWorkPageProps {
  workInfo?: IGalleryResponse;
}

const CreateWorkPage: FC<ICreaateWorkPageProps> = ({ workInfo }) => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { userId } = useAppSelector((state) => state.userSlice);
  const { createGalleryTags } = useAppSelector((state) => state.galleriesSlice);

  const [attachedImages, setAttachedImages] = useState<string[]>([]);
  const [editorContent, setEditorContent] = useState<string>("");
  const [imagesLimit, setImagesLimit] = useState<number>(50);

  const images = useGetAllImagesQuery({ limit: imagesLimit });
  const [createNewGallery, galleryStatus] = useCreateNewGalleryMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ICreateGalleryPayload>();

  useEffect(() => {
    if (galleryStatus.isSuccess) {
      dispatch(setEffect({ status: "success", message: "Галерея успешно создана" }));
      dispatch(clearSelectedTags());
      setAttachedImages([]);
      reset();
      return;
    }

    if (galleryStatus.isError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка, повторите позже" }));
    }
  }, [galleryStatus]);

  const imageAttachHandler = (path: string): void => {
    setAttachedImages((prev) => {
      if (attachedImages.includes(path)) {
        return prev.filter((imagePath) => imagePath !== path);
      }
      return [...prev, path];
    });
  };

  const createGalleryHandler = (): SubmitHandler<ICreateGalleryPayload> => (data) => {
    createNewGallery({
      ...data,
      description: editorContent,
      tags: ["Всё", ...createGalleryTags],
      author_id: userId,
      status: "published",
      cover_image_index: 0,
      slug: data.title,
      images: attachedImages,
    });
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
          {/* <textarea
            className={`create-blog-post-page__post-content`}
            placeholder="Описание работы"
            {...register("description", { required: true })}
          /> */}
          <TextEditor editorState={editorContent} setEditorState={setEditorContent} />
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
              buttonText="Создать"
              disabled={attachedImages.length <= 1}
              onClickAction={handleSubmit(createGalleryHandler())}
            />
          </div>
        </div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default CreateWorkPage;
