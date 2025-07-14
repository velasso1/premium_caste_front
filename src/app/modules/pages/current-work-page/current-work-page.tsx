import { FC } from "react";

import { useParams } from "react-router-dom";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

const CurrentWorkPage: FC = () => {
  const { id } = useParams<string>();

  console.log(id);

  return (
    <PageLayout pageClassName="current-work-page">
      <PageTitle pageName={"current work item by id"} />
    </PageLayout>
  );
};

export default CurrentWorkPage;
