import { FC } from "react";

import PageTitle from "../../../ui/page-title/page-title";
import YandexMap from "#ui/map/yandex-map.tsx";
import Button from "#ui/button/button.tsx";

const PlaceBlock: FC = () => {
  return (
    <div className="place-block">
      <div className="block-container">
        <PageTitle pageName="контакты" />
        <YandexMap />
        <div className="place-block__action">
          <Button
            buttonText="открыть в картах"
            onClickAction={() => window.open("https://yandex.ru/maps/-/CHVqFALm", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceBlock;
