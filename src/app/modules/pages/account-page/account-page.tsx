import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { changeUserLoginStatus, logOut } from "../../../store/slices/user";
import { useGetUserInfoMutation } from "../../../store/api/user-api";

import { useMaskito } from "@maskito/react";
import { PHONE_MASK } from "#utils/fields-rules/phone-mask.ts";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import Button from "#ui/button/button.tsx";
import TextField from "#ui/fields/text-field.tsx";
import NumberField from "#ui/fields/number-field.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import user from "#images/user-without-photo.jpg";

const AccountPage: FC = () => {
  const maskedInputRef = useMaskito({ options: PHONE_MASK });
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector((state) => state.userSlice);

  const [getUserInfo, { data, isLoading, isSuccess, isError }] = useGetUserInfoMutation();

  useEffect(() => {
    if (userId) {
      getUserInfo({ user_id: userId });
    }
  }, [userId]);

  const logout = (): void => {
    dispatch(changeUserLoginStatus(false));
    dispatch(logOut());
  };

  return (
    <PageLayout pageClassName="account-page">
      <PageTitle pageName="Личный кабинет" />
      <div className="account-page__buttons">
        {/* <Button buttonText="Редактировать профиль" buttonStyle="OUTLINED" onClickAction={() => alert("IN DRAFT")} /> */}
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
              <div className="account-info__name">{data?.name}</div>
              <div className="account-info__phone">{data?.phone}</div>
              <div className="account-info__email">{data?.email}</div>
            </div>
          </div>
        </ContentBlockLayout>
        <ContentBlockLayout customClassName="account-page__applications" contentTitle="Мои заявки">
          <div className="account-page__applications--empty">Пока что заявок нет</div>
        </ContentBlockLayout>
      </div>
    </PageLayout>
  );
};

export default AccountPage;
