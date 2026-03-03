import { FC, useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import NavigationMenu from "./components/navigation-menu";
import NavigationIcons from "./components/navigation-icons";

import { throttle } from "#utils/helpers/throttle.ts";
import { routes } from "#utils/routes/main-routes/main-routes.ts";

import logo from "#images/logo.png";

const Header: FC = () => {
  const navigate = useNavigate();
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
      <Link
        to={routes.GENERAL_PAGE}
        className="header__logo"
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      >
        <img src={logo} alt="logotype" className="header__logo-image" />
      </Link>
      <NavigationMenu menuIsOpen={burgerOpen} menuItemClick={() => openBurger(false)} />
      <NavigationIcons />

      <div className={`header__burger ${burgerOpen && "active"}`} onClick={() => openBurger((prev) => !prev)}></div>
    </header>
  );
};

export default Header;
