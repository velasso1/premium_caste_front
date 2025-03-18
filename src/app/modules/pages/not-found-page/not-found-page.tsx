import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";

const NotFoundPage: FC = () => {
  return (
    <div className="not-found-page">
      <PageTitle pageName="Страница не найдена" />
    </div>
  );
};

export default NotFoundPage;
