import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

import PublishedPosts from "./components/published-posts";

import Sidebar from "#ui/sidebar/sidebar.tsx";
import { sidebarItemsPostsMenu } from "#utils/auxuliary/sidebar-items.ts";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const BlogPostManagingPage: FC = () => {
  return (
    <PageLayout pageClassName="blog-post-managing-page">
      <PageTitle pageName="Управление постами" />
      <div className="blog-post-managing-page__content">
        <Sidebar sidebarItems={sidebarItemsPostsMenu} managementType="dispatch" />
        {/* <ContentBlockLayout customClassName="blog-post-managing-page__posts-layout"> */}
        <div className="blog-post-managing-page__posts">
          <PublishedPosts />
        </div>
        {/* </ContentBlockLayout> */}
      </div>
    </PageLayout>
  );
};

export default BlogPostManagingPage;
