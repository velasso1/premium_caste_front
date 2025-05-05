import { FC, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../store";

import { useLoginMutation } from "../../../../store/api/user-api";
import { changeUserLoginStatus } from "../../../../store/slices/user";

import { ILoginPayload } from "../../../../types/store-types/form-types";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import PasswordField from "#ui/fields/password-field.tsx";
import Loader from "#ui/loader/loader.tsx";
import LineNotification from "#ui/notifications/line-notification.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import { responseErrors } from "#utils/constants.ts";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userIsAuth } = useAppSelector((state) => state.userSlice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginPayload>();

  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();

  // useEffect(() => {
  //   reset();
  // }, [data, error]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeUserLoginStatus(isSuccess));
      navigate("/main/" + routes.ACCOUNT_PAGE);
    }
  }, [data]);

  const onSubmit: SubmitHandler<ILoginPayload> = (data) => {
    login(data);
  };

  return (
    <PageLayout pageClassName="login-form" includePreloader={false}>
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Вход в аккаунт" customClassName="login-form__content-block">
          <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
            {isLoading && <Loader />}
            <NavLink className="login-form__registration" to={`../${routes.REGISTRATION_PAGE}`}>
              Регистрация
            </NavLink>
            {errors?.email && <LineNotification text={errors?.email?.message ?? "error"} />}
            <TextField
              className="login-form__username"
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Поле обязательно для заполнения",
                minLength: { value: 4, message: "Не мнее 4 символов" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Некорректный E-mail",
                },
              })}
              disabled={isLoading}
            />
            {errors?.password && <LineNotification text={errors?.password?.message ?? "error"} />}
            <PasswordField
              className="login-form__password"
              placeholder="Пароль"
              {...register("password", { required: "Поле обязательно для заполнения" })}
              disabled={isLoading}
            />
            <span className="login-form__forget-pass">Забыли пароль?</span>
            <Button buttonText="войти" onClickAction={handleSubmit(onSubmit)} disabled={isLoading} />
            {error && "data" in error && <LineNotification text={responseErrors[error?.data?.error]} />}
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default LoginForm;
