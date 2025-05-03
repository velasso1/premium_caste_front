import { FC } from "react";

import { useCreateAccountMutation } from "../../../../store/api/user-api";

import { useForm, SubmitHandler } from "react-hook-form";

import { NavLink } from "react-router-dom";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";
import NumberField from "#ui/fields/number-field.tsx";
import PasswordField from "#ui/fields/password-field.tsx";

export interface IRegistrationForm {
  email: string;
  name: string;
  password: string;
  phone: string;
}

const RegistrationForm: FC = () => {
  const [createAccount, { data, isLoading, error }] = useCreateAccountMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegistrationForm>();

  const registration: SubmitHandler<IRegistrationForm> = (data, event) => {
    createAccount(data);
  };

  return (
    <PageLayout pageClassName="registration-form" includePreloader={false}>
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Регистрация" customClassName="registration-form__content-block">
          <form className="registration-form__form" onSubmit={handleSubmit(registration)}>
            <span className="registration-form__auth">
              Уже есть аккаунт? <NavLink to="../login">Авторизоваться</NavLink>
            </span>
            <TextField
              className="registration-form__username"
              type="text"
              placeholder="Имя"
              {...register("name", { required: true })}
              disabled={isLoading}
            />
            <TextField
              className="registration-form__email"
              type="email"
              placeholder="Почта*"
              {...register("email", { required: true })}
              disabled={isLoading}
            />
            <TextField
              className="registration-form__email"
              type="text"
              placeholder="Телефон"
              {...register("phone", { required: true })}
              disabled={isLoading}
            />
            <PasswordField placeholder="Пароль" {...register("password", { required: true })} disabled={isLoading} />
            <Button buttonText="зарегистрироваться" onClickAction={(e) => null} disabled={isLoading} />
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default RegistrationForm;
