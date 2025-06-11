import { FC } from "react";

import { useGetPostsQuery } from "../../../store/api/posts-api";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import BlogItem from "./components/blog-item";
import BlogMainNews from "./components/blog-main-news";
import BlogSecondNews from "./components/blog-second-news";

const BlogPage: FC = () => {
  const posts = useGetPostsQuery({ postStatus: "published" });

  const MAIN_POST = posts.data?.posts[0];
  const SECOND_POST = posts.data?.posts[1];

  return (
    <PageLayout pageClassName="blog-page">
      <PageTitle pageName="Блог" />
      <div className="blog-page__upper-side">
        <BlogMainNews postInfo={MAIN_POST} />
        <BlogSecondNews postInfo={SECOND_POST} />
      </div>
      <div className="blog-page__lower-side">
        {posts.data?.posts.map((item, index) => {
          if (index <= 1) return;
          return <BlogItem postInfo={item} postPreview={item.featured_image_id} />;
        })}
      </div>
    </PageLayout>
  );
};

export default BlogPage;
