import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { IPost } from "#types/api-response-types.ts";

import Loader from "#ui/loader/loader.tsx";

export interface IBlogMainNewsProps {
  postInfo: IPost | undefined;
}

const BlogMainNews: FC<IBlogMainNewsProps> = ({ postInfo }) => {
  const navigate = useNavigate();

  return (
    <div className="blog-page__main-news" onClick={() => (postInfo ? navigate(`../blog/item/${postInfo.id}`) : null)}>
      {postInfo ? (
        <>
          <img
            className="blog-page__main-image"
            src={"http://localhost:8080/uploads/" + postInfo.featured_image_path}
            alt="news-image"
          />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__main-news-title">{postInfo.excerpt}</p>
          <span className="blog-page__main-news-clue">подробнее</span>{" "}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogMainNews;
