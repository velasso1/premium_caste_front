import { FC, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { setEffect } from "../../../../store/slices/effects";

import { useLoginMutation, useLazyCheckUserStatusQuery } from "../../../../store/api/user-api";
import { changeUserLoginStatus } from "../../../../store/slices/user";

import { ILoginPayload } from "#types/api-payload-types.ts";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import PasswordField from "#ui/fields/password-field.tsx";
import Loader from "#ui/loader/loader.tsx";
import LineNotification from "#ui/notifications/line-notification.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import { RESPONSE_ERRORS } from "#utils/constants.ts";
import { EMAIL_FIELD_PATTERN, REQUIRED_MESSAGE } from "#utils/fields-rules/field-patterns.ts";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userIsAuth, userId } = useAppSelector((state) => state.userSlice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginPayload>();

  const [login, { data, isLoading, isSuccess, error: responseError }] = useLoginMutation();
  const [checkAdmin, { data: isAdminData }] = useLazyCheckUserStatusQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeUserLoginStatus(isSuccess));
      navigate("/main/" + routes.ACCOUNT_PAGE);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (responseError && "status" in responseError) {
      dispatch(setEffect({ status: "error", message: "Произошла ошибка, повторите позднее" }));
    }
  }, [responseError]);

  useEffect(() => {
    if (userId) {
      checkAdmin({ userId: userId });
    }
  }, [userId]);

  const onSubmit: SubmitHandler<ILoginPayload> = (data) => {
    login(data);
  };

  return (
    <PageLayout pageClassName="login-form" includePreloader={false}>
      <PageTitle pageName=" " />
      <ContentBlockLayout contentTitle="Вход в аккаунт" customClassName="login-form__content-block">
        <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
          {isLoading && <Loader />}
          <NavLink className="login-form__registration" to={`../${routes.REGISTRATION_PAGE}`}>
            Регистрация
          </NavLink>
          {errors?.identifier && <LineNotification text={errors?.identifier?.message ?? "error"} />}
          <TextField
            className={`login-form__username ${errors?.identifier && "field_error"}`}
            type="email"
            placeholder="E-mail"
            {...register("identifier", EMAIL_FIELD_PATTERN)}
            disabled={isLoading}
          />
          {errors?.password && <LineNotification text={errors?.password?.message ?? "error"} />}
          <PasswordField
            className={`login-form__password ${errors?.password && "field_error"}`}
            placeholder="Пароль"
            {...register("password", { required: REQUIRED_MESSAGE })}
            disabled={isLoading}
          />
          <span className="login-form__forget-pass">Забыли пароль?</span>
          <Button buttonText="войти" onClickAction={handleSubmit(onSubmit)} disabled={isLoading} />

          {responseError && "data" in responseError && (
            <LineNotification text={RESPONSE_ERRORS[responseError?.data?.error]} />
          )}
        </form>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default LoginForm;
