import { FC } from "react";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import Button from "#ui/button/button.tsx";

import user from "#images/user-without-photo.jpg";

const AccountPage: FC = () => {
  return (
    <PageLayout pageClassName="account-page">
      <>
        <PageTitle pageName="Личный кабинет" />
        <div className="account-page__exit-button">
          <Button buttonText="Выход" onClickAction={() => console.log("exit")} />
        </div>
        <div className="account-info">
          <div className="account-info__photo">
            <img className="account-info__image" src={user} alt="user-photo" />
          </div>
          <div className="account-info__form1">
            <form className="account-info__form" action="submit">
              <label htmlFor="account-info__name-field">Имя</label>
              <input
                className="account-info__name"
                id="account-info__name-field"
                placeholder="Имя"
                type="text"
                value="Иван"
              />

              <label htmlFor="account-info__surname-field">Фамилия</label>
              <input
                className="account-info__surname"
                id="account-info__surname-field"
                placeholder="Фамилия"
                type="text"
                value="Иванов"
              />

              <label htmlFor="account-info__phone-field">Номер телефона</label>
              <input
                className="account-info__phone"
                id="account-info__phone-field"
                placeholder="Телефон"
                type="text"
                value="+7 (900) 000-00-00"
              />

              <label htmlFor="account-info__email-field">Почта</label>
              <input
                className="account-info__email"
                id="account-info__email-field"
                placeholder="Почта"
                type="text"
                value="ivanov@email.com"
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
