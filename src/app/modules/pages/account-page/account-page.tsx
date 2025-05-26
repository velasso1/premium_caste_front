import { FC } from "react";

import { useAppDispatch } from "../../../store";
import { changeUserLoginStatus } from "../../../store/slices/user";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import NumberField from "#ui/fields/number-field.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import user from "#images/user-without-photo.jpg";

const AccountPage: FC = () => {
  const dispatch = useAppDispatch();

  const logout = (): void => {
    dispatch(changeUserLoginStatus(false));
  };

  return (
    <PageLayout pageClassName="account-page">
      <div className="account-page__exit-button">
        <PageTitle pageName="Личный кабинет" />
        <Button buttonText="Выход" buttonStyle="OUTLINED" onClickAction={() => logout()} />
      </div>
      <div className="account-page__content">
        <ContentBlockLayout>
          <div className="account-info">
            <div className="account-info__photo">
              <img className="account-info__image" src={user} alt="user-photo" />
            </div>
            <div className="account-info__form1">
              {/* <form className="account-info__form" action="submit">
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
            </form> */}
              <div className="account-info__name">Иванов Иван</div>
              <div className="account-info__phone">+7 900 000-00-00</div>
              <div className="account-info__email">ivanov.ivan@mail.ru</div>
            </div>
          </div>
        </ContentBlockLayout>
        <ContentBlockLayout contentTitle="Мои заявки">Пока что заявок нет</ContentBlockLayout>
      </div>
    </PageLayout>
  );
};

export default AccountPage;
