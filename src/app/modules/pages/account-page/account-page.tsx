import { FC } from "react";

import { useAppDispatch } from "../../../store";
import { changeUserLoginStatus } from "../../../store/slices/user";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import NumberField from "#ui/fields/number-field.tsx";

import user from "#images/user-without-photo.jpg";

const AccountPage: FC = () => {
  const dispatch = useAppDispatch();

  const logout = (): void => {
    dispatch(changeUserLoginStatus(false));
  };

  return (
    <PageLayout pageClassName="account-page">
      <>
        <PageTitle pageName="Личный кабинет" />
        <div className="account-page__exit-button">
          <Button buttonText="Выход" buttonStyle="OUTLINED" onClickAction={() => logout()} />
        </div>
        <div className="account-info">
          <div className="account-info__photo">
            <img className="account-info__image" src={user} alt="user-photo" />
          </div>
          <div className="account-info__form1">
            <form className="account-info__form" action="submit">
              <TextField
                className="account-info__name"
                customId="account-info__name-field"
                type="text"
                labelText="Имя"
              />
              <TextField
                className="account-info__surname"
                id="account-info__surname-field"
                type="text"
                labelText="Фамилия"
              />
              <NumberField className="account-info__phone" customId="account-info__phone-field" labelText="Телефон" />
              <TextField
                className="account-info__email"
                customId="account-info__email-field"
                type="email"
                labelText="Почта"
              />
              <div className="account-info__action">
                <Button buttonText="Сохранить" onClickAction={() => console.log("data is saved")} />
              </div>
            </form>
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default AccountPage;
