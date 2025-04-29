import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import telegram from "#images/telegram-icon.webp";
import whatsapp from "#images/whatsapp-icon.png";
import { Link } from "react-router-dom";

const ContactsBlock: FC = () => {
  return (
    <ContentBlockLayout contentTitle="Контакты для связи" customClassName="contacts-page__content">
      <ul className="contacts-page__list">
        <li className="contacts-page__item--contact">
          Телефон: <span className="contacts-page__highlight">+7 (968) 437-39-83</span>
        </li>
        <li className="contacts-page__item--contact">
          Напишите нам: {/* <span className="contacts-page__highlight"> */}
          <Link to="https://t.me/premiumcaste_admin" target="_blank" rel="noopener noreferrer">
            <img className="contacts-page__item-telegram" src={telegram} alt="telegram" />
          </Link>
          <Link to="https://api.whatsapp.com/send?text=&phone=79684373983" target="_blank" rel="noopener noreferrer">
            <img className="contacts-page__item-whatsapp" src={whatsapp} alt="whatsapp" />
          </Link>
        </li>
        <li className="contacts-page__item--contact">
          E-mail: <span className="contacts-page__highlight">info@premiumcaste.ru</span>
        </li>
        <li className="contacts-page__item--contact">
          Адрес: <span className="contacts-page__highlight">г. Москва, ул. Никулинская, 23, корп 4с1</span>
        </li>
      </ul>
    </ContentBlockLayout>
  );
};

export default ContactsBlock;
