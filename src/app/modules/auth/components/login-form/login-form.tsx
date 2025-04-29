import { FC, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { changeUserLoginStatus } from "../../../../store/slices/user";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import PasswordField from "#ui/fields/password-field.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

interface ILoginForm {
  login: string;
  password: string;
}

const LoginForm: FC = () => {
  useEffect(() => {
    alert("Функционал авторизации в разработке. &nbsp Чтобы авторизоваться, нажмите - 'войти' ");
  }, []);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userIsAuth } = useAppSelector((state) => state.userSlice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>();

  useEffect(() => {
    if (userIsAuth) {
      navigate("/main/" + routes.ACCOUNT_PAGE);
    }
  }, [userIsAuth]);

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    reset();
  };

  const login = (): void => {
    dispatch(changeUserLoginStatus(true));
  };

  console.log(errors);

  return (
    <PageLayout pageClassName="login-form" includePreloader={false}>
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Вход в аккаунт" customClassName="login-form__content-block">
          <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
            <NavLink className="login-form__registration" to={`../${routes.REGISTRATION_PAGE}`}>
              Регистрация
            </NavLink>

            <TextField
              className={`login-form__username${errors.login && "--empty"}`}
              type="text"
              placeholder="Логин"
              {...register("login", { required: true })}
            />

            <PasswordField
              className="login-form__password"
              placeholder="Пароль"
              {...register("password", { required: true })}
            />
            <span className="login-form__forget-pass">Забыли пароль?</span>
            <Button buttonText="войти" onClickAction={() => login()} />
            {(errors.login || errors.password) && <p className="login-form__clue">*поля обязательны для заполнения</p>}
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default LoginForm;
