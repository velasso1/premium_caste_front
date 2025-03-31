import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

import notFoundPage from "../../../assets/images/404-page.png";

const NotFoundPage: FC = () => {
  return (
    <PageLayout pageClassName="not-found-page">
      <>
        <PageTitle pageName="Страница не найдена" />
        <div className="not-found-page__banner">
          <img className="" src={notFoundPage} alt="page-not-found" />
        </div>
      </>
    </PageLayout>
  );
};

export default NotFoundPage;
