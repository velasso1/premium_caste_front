import { FC, useEffect } from "react";

import { Routes, Route, Outlet } from "react-router-dom";

// pages
import MainPage from "../pages/general-page/general-page";

// ui
import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

// utils
import { routes } from "../../utils/routes/main-routes/main-routes";

const MainModule: FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="main-module">
      {/* <Header /> */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainModule;
