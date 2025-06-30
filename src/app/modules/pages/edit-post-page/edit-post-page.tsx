import React, { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

const EditPostPage: FC = () => {
  return (
    <PageLayout pageClassName="edit-post-page">
      <PageTitle pageName="Редактирование поста" />
    </PageLayout>
  );
};

export default EditPostPage;
