import { FC } from "react";

import { NavLink } from "react-router-dom";

import { routes } from "../../../../utils/routes/main-routes/main-routes";

import cart from "../../../../assets/images/cart.png";
import heart from "../../../../assets/images/heart.png";
import human from "../../../../assets/images/human.png";
import stats from "../../../../assets/images/stats.png";

const NavigationIcons: FC = () => {
  return (
    <div className="header__icons">
      <NavLink className="header__icon" to={"main/" + routes.CART_PAGE}>
        <img src={cart} alt="cart" className="header__icon-image" />
      </NavLink>
      <NavLink className="header__icon" to="/not-exist">
        <img src={stats} alt="stats" className="header__icon-image" />
      </NavLink>
      <NavLink className="header__icon" to={"main/" + routes.FAVORITES_PAGE}>
        <img src={heart} alt="heart" className="header__icon-image" />
      </NavLink>
      <NavLink className="header__icon" to={"main/" + routes.ACCOUNT_PAGE}>
        <img src={human} alt="human" className="header__icon-image" />
      </NavLink>
    </div>
  );
};

export default NavigationIcons;
