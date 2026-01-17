import { FC } from "react";

import PageTitle from "../../../ui/page-title/page-title";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const AboutBlock: FC = () => {
  return (
    <div className="about-block">
      <div className="block-container">
        <PageTitle pageName="О нас" isLink={false} linkHref={"../main/" + routes.ABOUT_PAGE} />
        <div className="about-block__content">
          <div className="about-block__article">
            Студия создания АвтоСтиля PremiumCaste — это команда профессионалов и энтузиастов своего дела, главной
            задачей деятельности которой является одна, но очень многогранная цель — создание неповторимого образа
            Вашего автомобиля, мотоцикла и вообще любой техники.{" "}
            <span className="about-block__last-part-article">
              {" "}
              Запоминающегося, яркого, комфортного, престижного, необычного. Такого, который станет образцом для
              подражания, где бы вы не появились. Богатый опыт работы с авто- и мототехникой различных марок позволяет
              нам с уверенностью сказать: мы воплотим Вашу мечту.{" "}
            </span>
          </div>
          {/* <div className="about-block__works">
            <span className="about-block__works-title">
              Выполняем все виды работ эстетического тюнинга:
            </span>
            <ul className="about-block__works-list">
              <li className="about-block__works-item">
                оклейка виниловыми и полиуретановыми пленками, для красоты и для
                защиты, винилография
              </li>
              <li className="about-block__works-item">шумо-виброизоляция</li>
              <li className="about-block__works-item">
                установка линз (ретрофит), дополнительного света ("балки" и
                т.д.), подсветки днища, пола, дверей
              </li>
              <li className="about-block__works-item">
                установка доп/оборудования — ксенон, сигнализации, камеры,
                парктроники, дополнительный свет и т.д.
              </li>
              <li className="about-block__works-item">
                автозвук и мультимедиа
              </li>
              <li className="about-block__works-item">тонирование</li>
              <li className="about-block__works-item">аквапечать</li>
              <li className="about-block__works-item">флокирование</li>
              <li className="about-block__works-item">
                изготовление автоковриков в салон и багажник
              </li>
              <li className="about-block__works-item">
                уход за кузовом и салоном авто/мото — полировка, керамика,
                химчистка и т.д.
              </li>
              <li className="about-block__works-item">
                пошив салонов, сидений, перетяжка пластика, потолков
              </li>
              <li className="about-block__works-item">брендирование</li>
              <li className="about-block__works-item">создание дизайна.</li>
            </ul>
          </div> */}
          <div className="about-block__fact">Являемся дилерами производителей — Optima Premium, Шумофф, NanoTekas.</div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
