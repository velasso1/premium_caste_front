import { FC } from "react";

import { useGetPostsQuery } from "../../../store/api/posts-api";

import { useNavigate } from "react-router-dom";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import BlogItem from "./components/blog-item";

const BlogPage: FC = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetPostsQuery({ postStatus: "published" });

  return (
    <PageLayout pageClassName="blog-page">
      <PageTitle pageName="Блог" />
      <div className="blog-page__upper-side">
        <div className="blog-page__main-news" onClick={() => navigate(`../blog/item/${data?.posts[0].id}`)}>
          <img
            className="blog-page__main-image"
            src={"http://localhost:8080/uploads/" + data?.posts[0].featured_image_path}
            alt="news-image"
          />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__main-news-title">{data?.posts[0].excerpt}</p>
          <span className="blog-page__main-news-clue">подробнее</span>
        </div>
        <div className="blog-page__second-news" onClick={() => navigate(`../blog/item/${data?.posts[1].id}`)}>
          <img
            className="blog-page__second-image"
            src={"http://localhost:8080/uploads/" + data?.posts[1].featured_image_path}
            alt="second news image"
          />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__second-news-title">{data?.posts[1].excerpt}</p>
          <span className="blog-page__main-news-clue">подробнее</span>
        </div>
      </div>
      <div className="blog-page__lower-side">
        {data?.posts.map((item, index) => {
          if (index <= 1) return;
          return <BlogItem postInfo={item} postPreview={item.featured_image_id} />;
        })}
      </div>
    </PageLayout>
  );
};

export default BlogPage;
