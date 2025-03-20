import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const AccountPage: FC = () => {
  return (
    <PageLayout pageClassName="account-page">
      <PageTitle pageName="Личный кабинет" />
    </PageLayout>
  );
};

export default AccountPage;
