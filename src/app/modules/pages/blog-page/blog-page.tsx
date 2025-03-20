import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const BlogPage: FC = () => {
  return (
    <PageLayout pageClassName="blog-page">
      <PageTitle pageName="Блог" />
    </PageLayout>
  );
};

export default BlogPage;
