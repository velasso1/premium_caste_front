import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { changePostStatus } from "../../../store/slices/posts";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

import PublishedPosts from "./components/published-posts";

import Sidebar from "#ui/sidebar/sidebar.tsx";
import { sidebarItemsPostsMenu } from "#utils/auxuliary/sidebar-items.ts";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import SidebarItem from "#ui/sidebar/components/sidebar-item.tsx";

const BlogPostManagingPage: FC = () => {
  const dispatch = useAppDispatch();

  const { postStatus } = useAppSelector((state) => state.postsSlice);

  return (
    <PageLayout pageClassName="blog-post-managing-page">
      <PageTitle pageName="Управление постами" />
      <div className="blog-post-managing-page__content">
        <Sidebar>
          {sidebarItemsPostsMenu.map((item) => {
            return (
              <SidebarItem
                onClick={() => dispatch(changePostStatus(item.dispatchAction))}
                itemInfo={item}
                activeElement={postStatus === item.dispatchAction}
              />
            );
          })}
        </Sidebar>
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
