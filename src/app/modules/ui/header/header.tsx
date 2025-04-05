import { FC } from "react";

import logo from "#images/logo.png";

import NavigationMenu from "./components/navigation-menu";
import NavigationIcons from "./components/navigation-icons";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logotype" className="header__logo-image" />
      </div>
      <NavigationMenu />
      <NavigationIcons />
    </header>
  );
};

export default Header;
