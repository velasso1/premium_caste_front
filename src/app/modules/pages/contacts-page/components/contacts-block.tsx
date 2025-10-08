import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

import telegram from "#images/telegram-icon.webp";
import whatsapp from "#images/whatsapp-icon.png";
import { Link } from "react-router-dom";

const ContactsBlock: FC = () => {
  const contactIcons = [
    { className: "item-telegram", linkTo: "https://t.me/premiumcaste_admin", iconSrc: telegram, alt: "telegram" },
    {
      className: "item-whatsapp",
      linkTo: "https://api.whatsapp.com/send?text=&phone=79684373983",
      iconSrc: whatsapp,
      alt: "whatsapp",
    },
  ];

  return (
    <ContentBlockLayout contentTitle="Контакты для связи" customClassName="contacts-page__content">
      <ul className="contacts-page__list">
        <li className="contacts-page__item--contact">
          Телефон:&nbsp;
          <a className="contacts-page__highlight" href="tel:+79684373983">
            +7 (968) 437-39-83
          </a>
        </li>
        <li className="contacts-page__item--contact">
          Напишите нам:
          {contactIcons.map((item, index) => {
            return (
              <Link key={item.linkTo} to={item.linkTo} target="_blank" rel="noopener noreferrer">
                <img className={`contacts-page__${item.className}`} src={item.iconSrc} alt={item.alt} />
              </Link>
            );
          })}
        </li>
        <li className="contacts-page__item--contact">
          E-mail:&nbsp;
          <a className="contacts-page__highlight" href="mailto:info@premiumcaste.ru">
            info@premiumcaste.ru
          </a>
        </li>
        <li className="contacts-page__item--contact">
          Адрес:&nbsp;<span className="contacts-page__highlight">г. Москва, ул. Никулинская, 23, корп 4с1</span>
        </li>
      </ul>
    </ContentBlockLayout>
  );
};

export default ContactsBlock;
