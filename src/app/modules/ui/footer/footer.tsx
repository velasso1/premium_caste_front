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
            {PAGES_NAVIGATION_LIST.map((item, index) => {
              return (
                <li className="footer__nav-item" key={index}>
                  <NavLink className="footer__link" to={item.href}>
                    {item.pageName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="footer__banner">
          <iframe  src="https://yandex.ru/sprav/widget/rating-badge/233113979591?type=award&theme=dark" width="150" height="50"></iframe>
          </div>
          <div className="footer__article">
            Вся представленная на сайте информация носит информационный характер и ни при каких условиях не является
            публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ.
          </div>
          <div className="footer__copyright">© 2019 - {year} PremiumCaste</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
