import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const ContactsBlock: FC = () => {
  return (
    <ContentBlockLayout contentTitle="Контакты для связи" customClassName="contacts-page__content">
      <ul className="contacts-page__list">
        <li className="contacts-page__item--contact">
          Телефон: <span className="contacts-page__highlight">+7 (968) 437-39-83</span>{" "}
        </li>
        <li className="contacts-page__item--contact">
          E-mail: <span className="contacts-page__highlight"> info@premiumcaste.ru</span>{" "}
        </li>
        <li className="contacts-page__item--contact">
          Адрес: <span className="contacts-page__highlight">г. Москва, ул. Никулинская, 23, корп 4с1</span>
        </li>
      </ul>
    </ContentBlockLayout>
  );
};

export default ContactsBlock;
