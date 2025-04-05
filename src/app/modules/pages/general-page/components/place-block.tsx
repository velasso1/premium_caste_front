import { FC } from "react";

import PageTitle from "../../../ui/page-title/page-title";
import YandexMap from "#ui/map/yandex-map.tsx";
import Button from "#ui/button/button.tsx";

import d2 from "../../../../assets/images/D2.png";
import inst from "../../../../assets/images/mdi_instagram.png";
import teleg from "../../../../assets/images/mingcute_telegram-fill.png";
import facebook from "../../../../assets/images/icon-park-outline_facebook.png";
import vk from "../../../../assets/images/basil_vk-outline.png";

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
          <div className="place-block__icons">
            <div className="place-block__icon">
              <img src={d2} alt="" className="place-block__icon-image" />
            </div>
            <div className="place-block__icon">
              <img src={inst} alt="" className="place-block__icon-image" />
            </div>
            <div className="place-block__icon">
              <img src={teleg} alt="" className="place-block__icon-image" />
            </div>
            <div className="place-block__icon">
              <img src={facebook} alt="" className="place-block__icon-image" />
            </div>
            <div className="place-block__icon">
              <img src={vk} alt="" className="place-block__icon-image" />
            </div>
          </div>
          <div className="place-block__contanct-phone">
            <a href="tel:79684373983">+7-(968)-437-39-83</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBlock;
