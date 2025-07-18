import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const RecoveryForm: FC = () => {
  return (
    <PageLayout pageClassName="recovery-form" includePreloader={false}>
      <PageTitle pageName=" " />
      <ContentBlockLayout contentTitle="Восстановление пароля" customClassName="recovery-form__content-block">
        recovery form
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default RecoveryForm;
