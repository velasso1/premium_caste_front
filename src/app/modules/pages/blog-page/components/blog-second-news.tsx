import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { IBlogMainNewsProps } from "./blog-main-news";

import Loader from "#ui/loader/loader.tsx";

const BlogSecondNews: FC<IBlogMainNewsProps> = ({ postInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-page__second-news" onClick={() => (postInfo ? navigate(`../blog/item/${postInfo.id}`) : null)}>
      {postInfo ? (
        <>
          <img
            className="blog-page__second-image"
            src={import.meta.env.VITE_UPLOADS_FILES + postInfo.featured_image_path}
            alt="second news image"
          />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__second-news-title">{postInfo.excerpt}</p>
          <span className="blog-page__main-news-clue">подробнее</span>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogSecondNews;
