import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

const ContactsPage: FC = () => {
  return (
    <PageLayout pageClassName="contacts-page">
      <PageTitle pageName="Контакты" />
    </PageLayout>
  );
};

export default ContactsPage;
