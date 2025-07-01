import React, { FC, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useGetCurrentPostQuery } from "../../../store/api/posts-api";

import PostInformation from "#pages/create-blog-post-page/components/post-information.tsx";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

const EditPostPage: FC = () => {
  const params = useParams();

  const currentPost = useGetCurrentPostQuery({ post_id: params?.id });

  return (
    <PageLayout pageClassName="edit-post-page">
      <PageTitle pageName="Редактирование поста" />
      <PostInformation postForEdit={currentPost.data} />
    </PageLayout>
  );
};

export default EditPostPage;
