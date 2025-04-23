import { FC } from "react";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import TextField from "#ui/fields/text-field.tsx";
import Button from "#ui/button/button.tsx";
import NumberField from "#ui/fields/number-field.tsx";
import { NavLink } from "react-router-dom";

const RegistrationForm: FC = () => {
  return (
    <PageLayout pageClassName="registration-form" includePreloader={false}>
      <>
        <PageTitle pageName=" " />
        <ContentBlockLayout contentTitle="Регистрация" customClassName="registration-form__content-block">
          <form className="registration-form__form">
            <span className="registration-form__auth">
              Уже есть аккаунт? <NavLink to="../login">Авторизоваться</NavLink>
            </span>
            <TextField
              className="registration-form__username"
              type="text"
              placeholder="Имя"
              // {...register("login", { required: true })}
            />
            <TextField
              className="registration-form__surname"
              type="text"
              placeholder="Фамилия"
              // {...register("login", { required: true })}
            />
            <TextField
              className="registration-form__email"
              type="email"
              placeholder="Почта*"
              // {...register("login", { required: true })}
            />
            <NumberField className="registration-form__phone" placeholder="Номер телефона" />
            <Button buttonText="далее" onClickAction={() => null} />
          </form>
        </ContentBlockLayout>
      </>
    </PageLayout>
  );
};

export default RegistrationForm;
