import { FC } from "react";

import { NavLink } from "react-router-dom";

// utils
import { routes } from "../../../utils/routes/main-routes/main-routes";
import logo from "../../../assets/images/logo.png";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo-image" />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
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
    </header>
  );
};

export default Header;
