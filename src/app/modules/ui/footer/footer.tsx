import { FC } from "react";

import { NavLink } from "react-router-dom";

import { PAGES_NAVIGATION_LIST } from "../../../utils/auxuliary/navigation-link-list";

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__information">
          <ul className="footer__list">
            {PAGES_NAVIGATION_LIST.map((item) => {
              return (
                <li className="footer__nav-item">
                  <NavLink className="footer__link" to={item.href}>
                    {item.pageName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="footer__article">
            Вся представленная на сайте информация носит информационный характер
            и ни при каких условиях не является публичной офертой, определяемой
            положениями Статьи 437 (2) Гражданского кодекса РФ.
          </div>
          <div className="footer__copyright">© 2019 - {year} PremiumCaste</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
