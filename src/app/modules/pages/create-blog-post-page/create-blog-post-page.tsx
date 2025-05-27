import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

const CreateBlogPostPage: FC = () => {
  return (
    <PageLayout pageClassName="crate-blog-post-page">
      <PageTitle pageName="Создание поста" />
      <div>create blog post page</div>
    </PageLayout>
  );
};

export default CreateBlogPostPage;
