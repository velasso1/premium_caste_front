import { FC, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./store";
import { checkExpiresSession } from "./store/slices/user";

// modules
import MainModule from "./modules/main/main-module";
import AuthModule from "./modules/auth/auth-module";

// pages
import GeneralPage from "#pages/general-page/general-page.tsx";

import NotFoundPage from "#pages/not-found-page/not-found-page.tsx";

// ui
import Header from "#ui/header/header.tsx";
import Footer from "#ui/footer/footer.tsx";
import Notification from "#ui/notifications/notification.tsx";

// utils
import { routes } from "#utils/routes/main-routes/main-routes.ts";

const App: FC = () => {
  const dispatch = useAppDispatch();

  const { effectData } = useAppSelector((state) => state.effectsSlice);

  useEffect(() => {
    dispatch(checkExpiresSession());
  }, []);

  return (
    <div className="main">
      {effectData.status && (
        <Notification notifMessage={effectData.message} notifType={effectData.status ? effectData?.status : "error"} />
      )}

      {/* <WelcomePage preloadingMode={false} /> */}
      <Header />
      <div className="main-content">
        <Routes>
          {/* <Route path={routes.WELCOME_PAGE} element={null} /> */}

          <Route index path={routes.GENERAL_PAGE} element={<GeneralPage />} />
          <Route path={routes.AUTH_MODULE} element={<AuthModule />} />
          <Route path={routes.MAIN_MODULE} element={<MainModule />} />

          <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
