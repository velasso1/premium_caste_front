import { FC } from "react";

import { NavLink } from "react-router-dom";

// utils
import { routes } from "../../../utils/routes/main-routes/main-routes";

import logo from "../../../assets/images/logo.png";
import cart from "../../../assets/images/cart.png";
import heart from "../../../assets/images/heart.png";
import human from "../../../assets/images/human.png";
import stats from "../../../assets/images/stats.png";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logotype" className="header__logo-image" />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__nav-item">
            <NavLink className="header__link" to={routes.GENERAL_PAGE}>
              главная
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__link" to={routes.SERVICES_PAGE}>
              услуги
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__link" to={routes.OUR_WORKS_PAGE}>
              наши работы
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__link" to={routes.ABOUT_PAGE}>
              о нас
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__link" to={routes.BLOG_PAGE}>
              блог
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__link" to={routes.CONTACTS_PAGE}>
              контакты
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__icons">
        <NavLink className="header__icon" to={routes.CART_PAGE}>
          <img src={cart} alt="cart" className="header__icon-image" />
        </NavLink>
        <NavLink className="header__icon" to="/not-exist">
          <img src={stats} alt="stats" className="header__icon-image" />
        </NavLink>
        <NavLink className="header__icon" to={routes.FAVORITES_PAGE}>
          <img src={heart} alt="heart" className="header__icon-image" />
        </NavLink>
        <NavLink className="header__icon" to={routes.ACCOUNT_PAGE}>
          <img src={human} alt="human" className="header__icon-image" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
