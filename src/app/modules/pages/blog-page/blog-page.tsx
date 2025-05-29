import { FC } from "react";

import { useGetPostsQuery } from "../../../store/api/posts-api";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import BlogItem from "./components/blog-item";

import bmw from "#images/bmw.png";
import polish from "#images/polish.png";

const BlogPage: FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  console.log(data);

  const elements = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <PageLayout pageClassName="blog-page">
      <PageTitle pageName="Блог" />
      <div className="blog-page__upper-side">
        <div className="blog-page__main-news">
          <img className="blog-page__main-image" src={bmw} alt="news-image" />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__main-news-title">ГЛАВНАЯ НОВОСТЬ НЕДЕЛИ 21.01</p>
          <span className="blog-page__main-news-clue">подробнее</span>
        </div>
        <div className="blog-page__second-news">
          <img className="blog-page__second-image" src={polish} alt="second news image" />
          <div className="blog-page__shadow"></div>
          <p className="blog-page__second-news-title">ПОЛИРОВКА ФАР</p>
          <span className="blog-page__main-news-clue">подробнее</span>
        </div>
      </div>
      <div className="blog-page__lower-side">
        {elements.map((item, index) => {
          return <BlogItem id={item} />;
        })}
      </div>
    </PageLayout>
  );
};

export default BlogPage;
