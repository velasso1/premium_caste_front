import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const LoginForm: FC = () => {
  return (
    <div className="login-form">
      <PageLayout pageClassName="login-form">
        <>
          <PageTitle pageName=" " />
          <ContentBlockLayout contentTitle="Вход в аккаунт">
            <div className="">
              <form action="">
                <input type="text" />
                <input type="text" />
              </form>
            </div>
          </ContentBlockLayout>
        </>
      </PageLayout>
    </div>
  );
};

export default LoginForm;
