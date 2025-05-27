import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";

import CategoryItem from "./components/category-item";

// temp
import vinyl from "#images/services-page-icons/vinyl-icon.png";
import salon from "#images/services-page-icons/poshiv-icon.png";
import toner from "#images/services-page-icons/toner-and-light.png";
import sound from "#images/services-page-icons/sound-icon.png";
import safety from "#images/services-page-icons/safety-icon.png";
import shumka from "#images/services-page-icons/shum-icon.png";
import detailing from "#images/services-page-icons/detailing-icon.png";
import dop from "#images/services-page-icons/dop-icon.png";

const ServicesPage: FC = () => {
  return (
    <PageLayout pageClassName="services-page">
      <PageTitle pageName="Услуги" />
      <div className="services-page__content">
        <CategoryItem title="оклейка винилом" icon={vinyl} />
        <CategoryItem title="ПОШИВ САЛОНОВ" icon={salon} />
        <CategoryItem title="ТОНИРОВАНИЕ СТЕКОЛ И ОПТИКИ" icon={toner} />
        <CategoryItem title="СВЕТОВОЙ ТЮНИНГ" icon={toner} />
        <CategoryItem title="ОКЛЕЙКА ЗАЩИТНЫМИ ПЛЕНКАМИ" icon={safety} />
        <CategoryItem title="УСТАНОВКА ШУМОИЗОЛЯЦИИ" icon={shumka} />
        <CategoryItem title="АВТОЗВУК И МУЛЬтИМЕДИя" icon={sound} />
        <CategoryItem title="ДЕТЕЙЛИНГ" icon={detailing} />
        <CategoryItem title="УСТАНОВКА ДОП ОБОРУДОВАНИЯ" icon={dop} />
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
