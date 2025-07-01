import { FC, useEffect, useState } from "react";

import NavigationMenu from "./components/navigation-menu";
import NavigationIcons from "./components/navigation-icons";

import { throttle } from "#utils/throttle.ts";

import logo from "#images/logo.png";

const Header: FC = () => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [headerSticky, setHeaderSticky] = useState<boolean>(false);

  const [burgerOpen, openBurger] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 200));

    return () => {
      window.removeEventListener("scroll", throttle(handleScroll, 200));
    };
  }, [scrollValue]);

  useEffect(() => {
    if (scrollValue > 50) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  }, [scrollValue]);

  return (
    <header className={`header ${headerSticky && "header--sticky"}`}>
      <div className="header__logo">
        <img src={logo} alt="logotype" className="header__logo-image" />
      </div>
      <NavigationMenu menuIsOpen={burgerOpen} menuItemClick={() => openBurger(false)} />
      <NavigationIcons />

      <div className={`header__burger ${burgerOpen && "active"}`} onClick={() => openBurger((prev) => !prev)}></div>
    </header>
  );
};

export default Header;
