import { FC } from "react";

import { useGetAllImagesQuery } from "../../../store/api/media-api";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";

import PostImages from "./components/post-images";
import PostInformation from "./components/post-information";

const CreateBlogPostPage: FC = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllImagesQuery();

  console.log(data);

  return (
    <PageLayout pageClassName="create-blog-post-page">
      <PageTitle pageName="Создание поста" />
      <div className="create-blog-post-page__content">
        <PostImages />
        <PostInformation />

        {/* <Button buttonText="Создать" onClickAction={() => alert("Пост создан")} /> */}
      </div>
    </PageLayout>
  );
};

export default CreateBlogPostPage;
