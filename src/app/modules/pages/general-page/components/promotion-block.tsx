import { FC } from "react";

import PageTitle from "../../../ui/page-title/page-title";

import belt1 from "../../../../assets/images/belt1-promo.png";
import belt2 from "../../../../assets/images/belt2-promo.png";

const PromotionBlock: FC = () => {
  return (
    <div className="promotion-block ">
      <div className="block-container">
        <PageTitle pageName="Акции" />
        <div className="promotion-block__content">
          <div className="promotion-block__left">
            <img src={belt1} alt="promo1" className="promotion-block__image" />
            <span className="promotion-block__title">
              ВТОРАЯ ПЛЕНКА В ПОДАРОК
            </span>
          </div>
          <div className="promotion-block__right">
            <img src={belt2} alt="promo2" className="promotion-block__image" />
            <span className="promotion-block__title">
              СКИДКА НОВЫМ КЛИЕНТАМ 100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBlock;
