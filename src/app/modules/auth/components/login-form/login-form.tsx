import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import PasswordField from "#ui/fields/password-field.tsx";

const LoginForm: FC = () => {
  return (
    <PageLayout pageClassName="login-form">
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Вход в аккаунт" customClassName="login-form__content-block">
          <form className="login-form__form" action="submit">
            <span className="login-form__registration">Регистрация</span>
            <TextField className="login-form__username" type="text" placeholder="Логин" />
            <PasswordField className="login-form__password" placeholder="Пароль" />
            <span className="login-form__forget-pass">Забыли пароль?</span>
            <Button buttonText="войти" onClickAction={() => console.log("login")} />
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default LoginForm;
