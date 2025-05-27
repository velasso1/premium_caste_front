import { FC, useEffect } from "react";

import { useCreateAccountMutation } from "../../../../store/api/user-api";

import { useForm, SubmitHandler } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../../store";
import { setEffect } from "../../../../store/slices/effects";

import { useMaskito } from "@maskito/react";

import { IRegistrationPayload } from "../../../../types/store-types/form-types";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";
// import NumberField from "#ui/fields/number-field.tsx";
import Loader from "#ui/loader/loader.tsx";
import PasswordField from "#ui/fields/password-field.tsx";
// import Notification from "#ui/notifications/notification.tsx";
import LineNotification from "#ui/notifications/line-notification.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import { PHONE_MASK } from "#utils/fields-rules/phone-mask.ts";
import {
  EMAIL_FIELD_PATTERN,
  NAME_FIELD_PATTERN,
  PASSWORD_FIELD_PATTERN,
  REQUIRED_MESSAGE,
} from "#utils/fields-rules/field-patterns.ts";

const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const maskedInputRef = useMaskito({ options: PHONE_MASK });
  const [createAccount, { data: createAccData, isLoading, isSuccess, error }] = useCreateAccountMutation();

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate("/auth/" + routes.LOGIN_PAGE);
      dispatch(setEffect({ status: "success", message: "Регистрация прошла успешно" }));
    }
  }, [createAccData, isSuccess]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegistrationPayload>();

  const registration: SubmitHandler<IRegistrationPayload> = (data, event) => {
    createAccount(data);
  };

  return (
    <PageLayout pageClassName="registration-form" includePreloader={false}>
      <PageTitle pageName=" " />
      <ContentBlockLayout contentTitle="Регистрация" customClassName="registration-form__content-block">
        <form className="registration-form__form" onSubmit={handleSubmit(registration)}>
          {isLoading && <Loader />}
          <span className="registration-form__auth">
            Уже есть аккаунт? <NavLink to="../login">Авторизоваться</NavLink>
          </span>
          {errors?.name && <LineNotification text={errors?.name?.message ?? "error"} />}
          <TextField
            className={`registration-form__username ${errors?.name && "field_error"}`}
            type="text"
            placeholder="Имя"
            {...register("name", NAME_FIELD_PATTERN)}
            disabled={isLoading}
          />
          {errors?.email && <LineNotification text={errors?.email?.message ?? "error"} />}
          <TextField
            className={`registration-form__email ${errors?.email && "field_error"}`}
            type="email"
            placeholder="Почта"
            {...register("email", EMAIL_FIELD_PATTERN)}
            disabled={isLoading}
          />
          {errors?.phone && <LineNotification text={errors?.phone?.message ?? "error"} />}
          <TextField
            className={`registration-form__phone ${errors?.phone && "field_error"}`}
            type="text"
            placeholder="Телефон*"
            {...register("phone", {
              // required: REQUIRED_MESSAGE,
              // minLength: { value: 18, message: "Неверный формат телефона" },
            })}
            // здесь проблема с Maskito
            // он через ref изменяет value у инпута и из-за этого не тригерится onChange
            // из-за этого не срабаывает валидация react-hook-form
            disabled={isLoading}
            // ref={maskedInputRef}
          />

          {errors?.password && <LineNotification text={errors?.password?.message ?? "error"} />}
          <PasswordField
            className={`registration-form__password ${errors?.password && "field_error"}`}
            placeholder="Пароль"
            {...register("password", PASSWORD_FIELD_PATTERN)}
            disabled={isLoading}
          />
          <Button buttonText="зарегистрироваться" onClickAction={(e) => null} disabled={isLoading} />
        </form>
      </ContentBlockLayout>
    </PageLayout>
  );
};

export default RegistrationForm;
