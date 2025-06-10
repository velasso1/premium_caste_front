import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

import PostImages from "./components/post-images";
import PostInformation from "./components/post-information";

const CreateBlogPostPage: FC = () => {
  return (
    <PageLayout pageClassName="create-blog-post-page">
      <PageTitle pageName="Создание поста" />
      <div className="create-blog-post-page__content">
        <PostImages />
        <PostInformation />
      </div>
    </PageLayout>
  );
};

export default CreateBlogPostPage;
