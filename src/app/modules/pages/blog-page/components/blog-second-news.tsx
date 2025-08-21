import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../../store";
import { useDeletePostMutation } from "../../../../store/api/posts-api";

import { IBlogMainNewsProps } from "./blog-main-news";

import Loader from "#ui/loader/loader.tsx";
import Popup from "#ui/popup/popup.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import deleteIcon from "#images/delete-icon.png";
import changeIcon from "#images/change-icon.png";
import imageNotFound from "#images/not-found.webp";

const BlogSecondNews: FC<IBlogMainNewsProps> = ({ postInfo }) => {
  const navigate = useNavigate();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  const [deletePost, deletingPostStatus] = useDeletePostMutation();

  const [popupIsOpen, popupHandler] = useState<boolean>(false);
  const [idPostToDelete, selectPostId] = useState<string>("");
  const [imageIsLoaded, setImageLoaded] = useState<boolean>(true);

  const deletePostHandler = (id: string) => {
    deletePost({ postId: id });
  };

  return (
    <div className="blog-page__second-news" onClick={() => (postInfo ? navigate(`../blog/item/${postInfo.id}`) : null)}>
      <Popup
        isOpen={popupIsOpen}
        action={() => deletePostHandler(idPostToDelete)}
        onClose={() => popupHandler(false)}
      />
      {postInfo ? (
        <>
          <img
            className="blog-page__second-image"
            src={imageIsLoaded ? import.meta.env.VITE_UPLOADS_FILES + postInfo.featured_image_path : imageNotFound}
            alt="second news image"
            onError={() => setImageLoaded(false)}
          />
          {userIsAdmin && (
            <div className="blog-page__main-news-admin-clue">
              <img
                className="blog-page__main-news-admin-clue-change"
                src={changeIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("../" + `${routes.EDIT_POST_PAGE}/item/${postInfo.id}`);
                }}
              />
              <img
                className="blog-page__main-news-admin-clue-delete"
                src={deleteIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  selectPostId(postInfo.id);
                  popupHandler(true);
                }}
              />
            </div>
          )}
          <div className="blog-page__shadow"></div>
          <p className="blog-page__second-news-title">{postInfo.excerpt}</p>
          <span className="blog-page__main-news-clue">подробнее</span>
        </>
      ) : null}
    </div>
  );
};

export default BlogSecondNews;
