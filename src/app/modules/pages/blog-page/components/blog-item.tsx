import { FC, useEffect } from "react";

import { useLazyGetPostsQuery, usePublishPostMutation } from "../../../../store/api/posts-api";
import { useArchivePostMutation } from "../../../../store/api/posts-api";
import { useDeletePostMutation } from "../../../../store/api/posts-api";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { setEffect } from "../../../../store/slices/effects";

import { useNavigate, useParams } from "react-router-dom";

import { IPost } from "#types/api-response-types.ts";

import Loader from "#ui/loader/loader.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import Button from "#ui/button/button.tsx";

interface IBlogItemProps {
  postInfo: IPost;
  postPreview: string;
  postLoader?: boolean;
}

const BlogItem: FC<IBlogItemProps> = ({ postInfo, postPreview, postLoader }) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  const { postStatus } = useAppSelector((state) => state.postsSlice);

  const [publish, publishStatus] = usePublishPostMutation();
  const [archive, archiveStatus] = useArchivePostMutation();
  const [deletePost, deletingStatus] = useDeletePostMutation();

  const [refetchPosts, refetchStatus] = useLazyGetPostsQuery();

  useEffect(() => {
    if (publishStatus.isSuccess || archiveStatus.isSuccess || deletingStatus.isSuccess) {
      dispatch(setEffect({ status: "success", message: "Успешно" }));
      refetchPosts({ postStatus: "published" });
      refetchPosts({ postStatus: "archived" });
    }

    if (publishStatus.isError || archiveStatus.isError || deletingStatus.isError) {
      dispatch(
        setEffect({
          status: "error",
          message: "Возникла ошибка, попробуйте позже",
        })
      );
    }
  }, [publishStatus, archiveStatus, deletingStatus]);

  const isManagingPage = params["*"] === routes.BLOG_POST_MANAGING;

  const createdDate = new Date(postInfo.created_at).toLocaleDateString();

  return (
    <div
      className="blog-page__blog-item"
      data-managing={isManagingPage}
      onClick={() => (isManagingPage ? null : navigate(`../blog/item/${postInfo.id}`))}
    >
      <div className="blog-page__item-preview">
        {refetchStatus.isLoading || publishStatus.isLoading || archiveStatus.isLoading ? (
          <Loader />
        ) : (
          <img className="" src={import.meta.env.VITE_UPLOADS_FILES + postInfo.featured_image_path} alt="postImage" />
        )}
      </div>

      <div className="blog-page__item-description">{postInfo.excerpt}</div>
      <span className="blog-page__item-date">{createdDate}</span>
      {refetchStatus.isLoading || publishStatus.isLoading || archiveStatus.isLoading ? null : (
        <span className="blog-page__cross">
          {isManagingPage ? (
            <div className="blog-page__managing-buttons">
              {postStatus !== "published" && (
                <Button
                  buttonText="Опубликовать"
                  buttonStyle="OUTLINED"
                  onClickAction={() => {
                    publish({ postId: postInfo.id });
                  }}
                />
              )}

              {postStatus !== "archived" && (
                <Button
                  buttonText="Архивировать"
                  buttonStyle="OUTLINED"
                  onClickAction={() => {
                    archive({ postId: postInfo.id });
                  }}
                />
              )}

              <Button
                buttonText="Изменить"
                buttonStyle="OUTLINED"
                onClickAction={() => navigate("../" + routes.EDIT_POST_PAGE + `/item/${postInfo.id}`)}
              />
              <Button
                buttonText="Удалить"
                buttonStyle="OUTLINED"
                onClickAction={() => deletePost({ postId: postInfo.id })}
              />
            </div>
          ) : (
            "подробнее"
          )}
        </span>
      )}
    </div>
  );
};

export default BlogItem;
