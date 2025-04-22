import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import PasswordField from "#ui/fields/password-field.tsx";

interface ILoginForm {
  login: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <PageLayout pageClassName="login-form">
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Вход в аккаунт" customClassName="login-form__content-block">
          <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
            <span className="login-form__registration">Регистрация</span>
            <TextField
              classNameText="login-form__username"
              type="text"
              placeholder="Логин"
              {...register("login", { required: true })}
            />
            <PasswordField
              classNameText="login-form__password"
              placeholderText="Пароль"
              {...register("password", { required: true })}
            />
            <span className="login-form__forget-pass">Забыли пароль?</span>
            <Button buttonText="войти" onClickAction={() => null} />
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default LoginForm;
