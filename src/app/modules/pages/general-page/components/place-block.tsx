import { FC } from "react";

import ContactIcons from "./contact-icons";

import PageTitle from "#ui/page-title/page-title.tsx";
import YandexMap from "#ui/map/yandex-map.tsx";
import Button from "#ui/button/button.tsx";

const PlaceBlock: FC = () => {
  return (
    <div className="place-block">
      <div className="block-container">
        <PageTitle pageName="контакты" />
        <div className="place-block__address">г. Москва, ул. Никулинская, 23, корп. 4, стр. 1</div>
        <YandexMap />
        <div className="place-block__action">
          <div className="place-block__button">
            <Button
              buttonText="открыть в картах"
              onClickAction={() => window.open("https://yandex.ru/maps/-/CHVqFALm", "_blank")}
            />
          </div>
          <ContactIcons />
          <div className="place-block__contanct-phone">
            <a href="tel:79684373983">+7-(968)-437-39-83</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBlock;
