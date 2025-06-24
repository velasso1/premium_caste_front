import { FC } from "react";

import { NavLink } from "react-router-dom";
import { PAGES_NAVIGATION_LIST } from "../../../../utils/auxuliary/navigation-link-list";

interface INavigationMenuProps {
  menuIsOpen?: boolean;
}

const NavigationMenu: FC<INavigationMenuProps> = ({ menuIsOpen }) => {
  return (
    <nav className="header__nav" data-opened={menuIsOpen}>
      <ul className="header__list">
        {PAGES_NAVIGATION_LIST.map((item, index) => {
          return (
            <li className="header__nav-item" key={index}>
              <NavLink className="header__link" to={item.href}>
                {item.pageName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
