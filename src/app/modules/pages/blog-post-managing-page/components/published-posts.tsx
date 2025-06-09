import { FC } from "react";

import { useGetPostsQuery } from "../../../../store/api/posts-api";

import BlogItem from "#pages/blog-page/components/blog-item.tsx";
import { useAppSelector } from "../../../../store";

const PublishedPosts: FC = () => {
  const { postStatus } = useAppSelector((state) => state.postsSlice);

  const { data, error, isSuccess, isLoading, isError } = useGetPostsQuery({ postStatus: postStatus });

  return (
    <div className="blog-page__lower-side">
      {data?.posts.map((item, index) => {
        return <BlogItem key={item.id} postInfo={item} />;
      })}
    </div>
  );
};

export default PublishedPosts;
