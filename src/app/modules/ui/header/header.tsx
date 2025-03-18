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
            <NavLink to={routes.GENERAL_PAGE} className="header__link">
              главная
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={routes.SERVICES_PAGE} className="header__link">
              услуги
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={routes.OUR_WORKS_PAGE} className="header__link">
              наши работы
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={routes.ABOUT_PAGE} className="header__link">
              о нас
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={routes.BLOG_PAGE} className="header__link">
              блог
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={routes.CONTACTS_PAGE} className="header__link">
              контакты
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__icons">
        <div className="header__icon">
          <img src={cart} alt="cart" className="header__icon-image" />
        </div>
        <div className="header__icon">
          <img src={stats} alt="stats" className="header__icon-image" />
        </div>
        <div className="header__icon">
          <img src={heart} alt="heart" className="header__icon-image" />
        </div>
        <div className="header__icon">
          <img src={human} alt="human" className="header__icon-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
