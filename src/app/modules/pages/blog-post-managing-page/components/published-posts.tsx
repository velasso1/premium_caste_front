import { FC, useEffect } from "react";

import { useGetPostsQuery } from "../../../../store/api/posts-api";
import { useLazyGetPostsQuery } from "../../../../store/api/posts-api";

import BlogItem from "#pages/blog-page/components/blog-item.tsx";
import { useAppSelector } from "../../../../store";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import Loader from "#ui/loader/loader.tsx";

const PublishedPosts: FC = () => {
  const { postStatus } = useAppSelector((state) => state.postsSlice);

  const { data, error, isSuccess, isLoading, isError } = useGetPostsQuery({ postStatus: postStatus });

  return (
    <>
      {isLoading && (
        <div className="">
          <Loader />
        </div>
      )}

      {data?.posts.length
        ? data?.posts.map((item, index) => {
            return <BlogItem key={item.id} postInfo={item} postPreview={item.featured_image_path} />;
          })
        : "Пока что постов нет"}
    </>
  );
};

export default PublishedPosts;
