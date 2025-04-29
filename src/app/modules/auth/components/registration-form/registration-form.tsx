import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";
import NumberField from "#ui/fields/number-field.tsx";
import { NavLink } from "react-router-dom";
import PasswordField from "#ui/fields/password-field.tsx";

interface IRegistrationForm {
  email: string;
  name: string;
  password: string;
  phone: string;
}

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegistrationForm>();

  const registration: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data);
    fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
            />
            {/* <TextField
              className="registration-form__surname"
              type="text"
              placeholder="Фамилия"
              {...register("login", { required: true })}
            /> */}
            <TextField
              className="registration-form__email"
              type="email"
              placeholder="Почта*"
              {...register("email", { required: true })}
            />
            <TextField
              className="registration-form__email"
              type="text"
              placeholder="Телефон"
              {...register("phone", { required: true })}
            />
            {/* <NumberField
              className="registration-form__phone"
              placeholder="Номер телефона"
              {...register("phone", { required: true })}
            /> */}
            <PasswordField placeholder="Пароль" {...register("password", { required: true })} />
            <Button buttonText="зарегистрироваться" onClickAction={(e) => console.log(null)} />
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default RegistrationForm;
