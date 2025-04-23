import { FC } from "react";

import { useAppSelector } from "../../../../store";

import { NavLink } from "react-router-dom";

import { routes } from "../../../../utils/routes/main-routes/main-routes";

import cart from "#images/cart.png";
import heart from "#images/heart.png";
import human from "#images/human.png";
import stats from "#images/stats.png";

const NavigationIcons: FC = () => {
  const { userIsAuth } = useAppSelector((state) => state.userSlice);

  const accountPath = {
    account: `../main/${routes.ACCOUNT_PAGE}`,
    login: `../auth/${routes.LOGIN_PAGE}`,
  };

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
      <NavLink className="header__icon" to={userIsAuth ? accountPath.account : accountPath.login}>
        <img src={human} alt="human" className="header__icon-image" />
      </NavLink>
    </div>
  );
};

export default NavigationIcons;
