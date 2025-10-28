import { FC, useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../../store";
import { useGetGalleryByIdQuery, useEditGalleryMutation } from "../../../store/api/galleries-api";
import { useGetAllImagesQuery } from "../../../store/api/media-api";
import { setEffect } from "../../../store/slices/effects";
import { clearSelectedTags, editGalleryTags } from "../../../store/slices/galleries";
import { putAttachedImages } from "../../../store/slices/posts";

import { ICreateGalleryPayload } from "#types/api-types/api-payload-types.ts";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";

import Tag from "#pages/create-work-page/components/tag.tsx";
import Button from "#ui/button/button.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import TextEditor from "#ui/text-editor/text-editor.tsx";

import AttachImages from "#pages/create-blog-post-page/components/attach-images.tsx";

import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";
import { routes } from "#utils/routes/main-routes/main-routes.ts";
import { clearAttachedImages } from "../../../store/slices/posts";

const EditWorkPage: FC = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userId, imagesLimit } = useAppSelector((state) => state.userSlice);
  const { createGalleryTags } = useAppSelector((state) => state.galleriesSlice);
  const { attachedImages } = useAppSelector((state) => state.postsSlice);

  const [editorState, setEditorState] = useState<string>("");

  const [editGallery, editGalleryStatus] = useEditGalleryMutation();
  const getGallery = useGetGalleryByIdQuery({ id: id || "" });
  const images = useGetAllImagesQuery({ limit: imagesLimit });

  useEffect(() => {
    if (getGallery.isSuccess) {
      dispatch(putAttachedImages(getGallery.data.images));
      dispatch(editGalleryTags(getGallery.data.tags));
    }
  }, [getGallery]);

  useEffect(() => {
    if (editGalleryStatus.isSuccess) {
      dispatch(setEffect({ status: "success", message: "Данные изменены" }));
      dispatch(clearSelectedTags());
      dispatch(clearAttachedImages());
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

  const workChangeHandler = (): SubmitHandler<ICreateGalleryPayload> => (data) => {
    if (!editorState) return;

    editGallery({
      ...data,
      description: editorState,
      tags: createGalleryTags,
      author_id: userId,
      status: "published",
      cover_image_index: 0,
      slug: data.title,
      images: attachedImages,
      id: id,
    });
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
          <TextEditor
            editorState={editorState}
            setEditorState={setEditorState}
            content={getGallery.data?.description}
          />
          Выберите тег:
          <div className="create-work-page__tags">
            {sidebarItemsWorks.map((item, index) => {
              if (item.itemName === "Всё") return;
              return <Tag title={item.itemName} key={index} />;
            })}
          </div>
        </div>

        <AttachImages images={images.data} userId={userId} saveTarget="storage_path" />

        <div className="create-blog-post-page__buttons">
          <Button
            buttonText="Сохранить"
            disabled={attachedImages.length <= 1}
            onClickAction={handleSubmit(workChangeHandler())}
          />
        </div>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default EditWorkPage;
