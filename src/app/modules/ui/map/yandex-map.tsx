import { FC, useState } from "react";

const YandexMap: FC = () => {
  return (
    <iframe
      className="general-page__map"
      src="https://yandex.ru/map-widget/v1/?ll=37.447917%2C55.667669&mode=search&oid=233113979591&ol=biz&z=16.5"
    ></iframe>
  );
};

export default YandexMap;
