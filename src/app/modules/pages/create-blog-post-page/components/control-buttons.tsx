import { FC } from "react";

import { useAppSelector } from "../../../../store";

import { UseFormHandleSubmit } from "react-hook-form";

import { IPost } from "#types/api-types/api-response-types.ts";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";
import type { SubmitHandler } from "react-hook-form";

import Button from "#ui/button/button.tsx";

import { STEPS } from "#utils/constants.ts";

interface IControlButtonsProps {
  creatingStep: number;
  setCreatingStep: (arg: STEPS) => void;
  postInfo: IPostInfoPayload;
  postForEdit: IPost | undefined;
  handleSubmit: UseFormHandleSubmit<IPostInfoPayload, IPostInfoPayload>;
  updateHandler: () => SubmitHandler<IPostInfoPayload>;
  createHandler: (postStatus: "published" | "draft") => SubmitHandler<IPostInfoPayload>;
}

const ControlButtons: FC<IControlButtonsProps> = ({
  creatingStep,
  postInfo,
  postForEdit,
  setCreatingStep,
  handleSubmit,
  updateHandler,
  createHandler,
}) => {
  const { attachedImages } = useAppSelector((state) => state.postsSlice);

  return (
    <div className="create-blog-post-page__buttons">
      {creatingStep === STEPS.FIRST && (
        <Button buttonText="Далее" disabled={!postInfo.featured_image_id} onClickAction={() => setCreatingStep(2)} />
      )}
      {creatingStep === STEPS.SECOND && (
        <>
          <Button buttonText="Назад" onClickAction={() => setCreatingStep(creatingStep - 1)} />
          {postForEdit ? (
            <Button
              buttonText="Сохранить"
              disabled={attachedImages.length <= 1}
              onClickAction={handleSubmit(updateHandler())}
            />
          ) : (
            <>
              <Button
                buttonText="Создать пост"
                disabled={attachedImages.length <= 1}
                onClickAction={handleSubmit(createHandler("draft"))}
              />
              <Button
                buttonText="Создать и опубликовать"
                disabled={attachedImages.length <= 1}
                onClickAction={handleSubmit(createHandler("published"))}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ControlButtons;
