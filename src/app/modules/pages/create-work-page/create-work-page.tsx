import { FC, useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../../store";
import { useGetAllImagesQuery } from "../../../store/api/media-api";
import { useCreateNewGalleryMutation } from "../../../store/api/galleries-api";
import { setEffect } from "../../../store/slices/effects";
import { clearSelectedTags } from "../../../store/slices/galleries";
import { clearAttachedImages } from "../../../store/slices/posts";
import { setImagesLimit } from "../../../store/slices/user";

import PostImages from "#pages/create-blog-post-page/components/post-images.tsx";

import Tag from "./components/tag";

import { IGalleryResponse } from "#types/api-types/api-response-types.ts";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";

import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";

import { ICreateGalleryPayload } from "#types/api-types/api-payload-types.ts";
import TextEditor from "#ui/text-editor/text-editor.tsx";

import AttachImages from "#pages/create-blog-post-page/components/attach-images.tsx";

interface ICreaateWorkPageProps {
  workInfo?: IGalleryResponse;
}

const CreateWorkPage: FC<ICreaateWorkPageProps> = ({ workInfo }) => {
  const dispatch = useAppDispatch();

  const { userId, imagesLimit } = useAppSelector((state) => state.userSlice);
  const { createGalleryTags } = useAppSelector((state) => state.galleriesSlice);
  const { attachedImages } = useAppSelector((state) => state.postsSlice);

  const [editorContent, setEditorContent] = useState<string>("");

  const images = useGetAllImagesQuery({ limit: imagesLimit });
  const [createNewGallery, galleryStatus] = useCreateNewGalleryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateGalleryPayload>();

  useEffect(() => {
    if (galleryStatus.isSuccess) {
      dispatch(setEffect({ status: "success", message: "Галерея успешно создана" }));
      dispatch(clearSelectedTags());
      dispatch(clearAttachedImages());
      reset();
      return;
    }

    if (galleryStatus.isError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка, повторите позже" }));
    }
  }, [galleryStatus]);

  // при размонтировании create-work-page вернем изначальное значение лимита
  useEffect(() => {
    return () => {
      dispatch(setImagesLimit(50));
    };
  }, [dispatch]);

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
          <TextEditor editorState={editorContent} setEditorState={setEditorContent} />
          Выберите тег:
          <div className="create-work-page__tags">
            {sidebarItemsWorks.map((item, index) => {
              if (item.itemName === "Всё") return;
              return <Tag title={item.itemName} key={item.itemName} />;
            })}
          </div>
        </div>

        <AttachImages images={images?.data} userId={userId} saveTarget="storage_path" />

        <div className="create-blog-post-page__buttons">
          <Button
            buttonText="Создать"
            disabled={attachedImages.length <= 1}
            onClickAction={handleSubmit(createGalleryHandler())}
          />
        </div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default CreateWorkPage;
