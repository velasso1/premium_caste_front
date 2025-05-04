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

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import { responseErrors } from "#utils/constants.ts";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userIsAuth } = useAppSelector((state) => state.userSlice);

  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();

  useEffect(() => {
    reset();
  }, [data, error]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/main/" + routes.ACCOUNT_PAGE);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginPayload>();

  const onSubmit: SubmitHandler<ILoginPayload> = (data) => {
    login(data);
  };

  return (
    <PageLayout pageClassName="login-form" includePreloader={false}>
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Вход в аккаунт" customClassName="login-form__content-block">
          <form className="login-form__form">
            {isLoading && <Loader />}
            <NavLink className="login-form__registration" to={`../${routes.REGISTRATION_PAGE}`}>
              Регистрация
            </NavLink>

            <TextField
              className={`login-form__username${errors.email && "--empty"}`}
              type="text"
              placeholder="E-mail"
              {...register("email", { required: true })}
              disabled={isLoading}
            />

            <PasswordField
              className="login-form__password"
              placeholder="Пароль"
              {...register("password", { required: true })}
              disabled={isLoading}
            />
            <span className="login-form__forget-pass">Забыли пароль?</span>
            <Button buttonText="войти" onClickAction={handleSubmit(onSubmit)} disabled={isLoading} />
            {(errors.email || errors.password) && (
              <p className="login-form__clue">*все вполя обязательны для заполнения</p>
            )}
            {error && <p className="login-form__clue">{responseErrors[error?.data?.error]}</p>}
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default LoginForm;
