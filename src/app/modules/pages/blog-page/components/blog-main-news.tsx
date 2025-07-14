import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../../store";

import { IPost } from "#types/api-response-types.ts";

import Loader from "#ui/loader/loader.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import deleteIcon from "#images/delete-icon.png";
import changeIcon from "#images/change-icon.png";

export interface IBlogMainNewsProps {
  postInfo: IPost | undefined;
}

const BlogMainNews: FC<IBlogMainNewsProps> = ({ postInfo }) => {
  const navigate = useNavigate();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  return (
    <div className="blog-page__main-news" onClick={() => (postInfo ? navigate(`../blog/item/${postInfo.id}`) : null)}>
      {postInfo ? (
        <>
          <img
            className="blog-page__main-image"
            src={import.meta.env.VITE_UPLOADS_FILES + postInfo.featured_image_path}
            alt="news-image"
          />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__main-news-title">{postInfo.excerpt}</p>
          <span className="blog-page__main-news-clue">подробнее</span>
          {userIsAdmin ? (
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
                }}
              />
            </div>
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogMainNews;
