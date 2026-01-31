import { FC, useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { useCreateNewPostMutation, useUpdatePostMutation } from "../../../../store/api/posts-api";
import { clearAttachedImages, putAttachedImages } from "../../../../store/slices/posts";
import {
  useCreateMediaGroupMutation,
  useGetAllImagesQuery,
  useAttachMediaToGroupMutation,
  useAttachMediaGroupToPostMutation,
  useLazyGetImagesQuery,
} from "../../../../store/api/media-api";

import { setEffect } from "../../../../store/slices/effects";
import { setImagesLimit } from "../../../../store/slices/user";

import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";
import { IPost } from "#types/api-types/api-response-types.ts";

import AttachImages from "./attach-images";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Loader from "#ui/loader/loader.tsx";
import LineNotification from "#ui/notifications/line-notification.tsx";
import TextEditor from "#ui/text-editor/text-editor.tsx";
import Button from "#ui/button/button.tsx";
import PreviewContainer from "./preview-container";

import { STEPS } from "#utils/constants.ts";
import ControlButtons from "./control-buttons";

const initialStatePost: IPostInfoPayload = {
  author_id: "",
  content: "",
  excerpt: "",
  featured_image_id: "",
  status: "draft",
  title: "",
};

interface IPostInformationProps {
  postForEdit?: IPost;
}

const PostInformation: FC<IPostInformationProps> = ({ postForEdit }) => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector((state) => state.userSlice);
  const { attachedImages } = useAppSelector((state) => state.postsSlice);
  const { imagesLimit } = useAppSelector((state) => state.userSlice);

  const [postInfo, setPostInfo] = useState<IPostInfoPayload>(initialStatePost);
  const [editorContent, setEditorContent] = useState<string>("");
  const [previewSelected, setPreviewSelected] = useState<boolean>(false);
  const [creatingStep, setCreatingStep] = useState<STEPS>(1);

  // const images = useGetAllImagesQuery({ limit: imagesLimit });
  const [getImages, images] = useLazyGetImagesQuery();
  const [createNewPost, creatingStatus] = useCreateNewPostMutation();
  const [createMediaGroup, mediaGroupStatus] = useCreateMediaGroupMutation();
  const [attachImages, attachImagesStatus] = useAttachMediaToGroupMutation();
  const [attachMediaToPost, attachMediaToPostStatus] = useAttachMediaGroupToPostMutation();
  const [updatePost, updatePostStatus] = useUpdatePostMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IPostInfoPayload>();

  useEffect(() => {
    if (postForEdit) {
      const attachedImagesEdit: string[] = [];

      setPostInfo({
        author_id: postForEdit?.author_id,
        content: postForEdit?.content,
        excerpt: postForEdit?.excerpt,
        featured_image_id: postForEdit?.featured_image_id,
        status: postForEdit?.status,
        title: postForEdit?.title,
        id: postForEdit.id,
      });

      postForEdit.media_groups.content.map((item) => {
        attachedImagesEdit.push(item.id);
      });
      dispatch(putAttachedImages(attachedImagesEdit));
    }
  }, [postForEdit]);

  useEffect(() => {
    if (creatingStatus.isSuccess || updatePostStatus.isSuccess) {
      setPostInfo(initialStatePost);
      dispatch(setEffect({ status: "success", message: "Пост успешно создан!" }));
    }

    if (creatingStatus.isError || updatePostStatus.isError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка при загрузке данных" }));
    }
  }, [creatingStatus, updatePostStatus]);

  // соединение картинок в группу
  useEffect(() => {
    if (mediaGroupStatus.data) {
      attachImages({ group_id: mediaGroupStatus.data.data, media_id: attachedImages });
      dispatch(clearAttachedImages());
    }
  }, [mediaGroupStatus]);

  // соединение группы картинок с постом
  useEffect(() => {
    if (creatingStatus.isSuccess && mediaGroupStatus.isSuccess) {
      attachMediaToPost({ post_id: creatingStatus.data.id, group_id: mediaGroupStatus.data.data });
    }
  }, [creatingStatus, mediaGroupStatus]);

  // при размонтировании postInformation вернем изначальное значение лимита;
  useEffect(() => {
    return () => {
      dispatch(setImagesLimit(50));
    };
  }, []);

  const IS_LOADING: boolean =
    attachMediaToPostStatus.isLoading ||
    attachImagesStatus.isLoading ||
    mediaGroupStatus.isLoading ||
    creatingStatus.isLoading;

  // создание поста и пустой медиа-группы
  const createPostHandler =
    (postStatus: "draft" | "published"): SubmitHandler<IPostInfoPayload> =>
    (data) => {
      if (postInfo.featured_image_id === "") {
        setPreviewSelected(true);
        return;
      }

      createNewPost({
        ...data,
        author_id: userId,
        status: postStatus,
        featured_image_id: postInfo.featured_image_id,
        content: editorContent,
      });
      createMediaGroup({ owner_id: userId, description: "w/o_description" });
      setPreviewSelected(false);
      setCreatingStep(STEPS.FIRST);
      reset();
    };

  const updatePostHandler = (): SubmitHandler<IPostInfoPayload> => (data) => {
    updatePost({ ...data, id: postInfo.id });
    setCreatingStep(STEPS.FIRST);
  };

  return (
    <ContentBlockLayout contentTitle="Содержание поста" customClassName="create-blog-post-page__post-info">
      <div className="create-blog-post-page__post-fields">
        {IS_LOADING && <Loader />}

        {(errors.content || errors.title || errors.excerpt) && (
          <LineNotification text="Все поля должны быть заполнены" />
        )}

        {previewSelected && <LineNotification text="Выберите превью" />}

        <TextField
          className={`create-blog-post-page__post-title ${errors?.title && "field_error"}`}
          type="text"
          placeholder="Заголовок поста"
          defaultValue={postInfo.title}
          {...register("title", { required: true })}
        />

        <TextField
          className={`create-blog-post-page__post-excerpt ${errors?.excerpt && "field_error"}`}
          type="text"
          placeholder="Краткое описание"
          defaultValue={postInfo.excerpt}
          {...register("excerpt", { required: true })}
        />

        <TextEditor
          editorState={editorContent}
          setEditorState={setEditorContent}
          content={postForEdit ? postForEdit.content : ""}
        />
      </div>

      <PreviewContainer
        creatingStep={creatingStep}
        images={images.data}
        postInfo={postInfo}
        setPostInfo={setPostInfo}
        userId={userId}
      />

      {/* <button onClick={() => getImages({ limit: imagesLimit })}>GET IMAGES</button> */}

      <>{creatingStep === STEPS.SECOND && <AttachImages images={images?.data} userId={userId} saveTarget="id" />}</>

      <ControlButtons
        creatingStep={creatingStep}
        setCreatingStep={setCreatingStep}
        postInfo={postInfo}
        postForEdit={postForEdit}
        handleSubmit={handleSubmit}
        updateHandler={updatePostHandler}
        createHandler={createPostHandler}
      />
      <Button
        buttonText="Загрузить изображения"
        onClickAction={() => {
          getImages({ limit: imagesLimit });
          setImagesLimit(imagesLimit + 24);
        }}
      ></Button>
    </ContentBlockLayout>
  );
};

export default PostInformation;
