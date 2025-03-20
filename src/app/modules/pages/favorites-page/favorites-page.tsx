import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const FavoritesPage: FC = () => {
  return (
    <PageLayout pageClassName="favorites-page">
      <PageTitle pageName="Избранное" />
    </PageLayout>
  );
};

export default FavoritesPage;
