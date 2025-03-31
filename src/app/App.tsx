import { FC } from "react";

import { Routes, Route } from "react-router-dom";

// modules
import MainModule from "./modules/main/main-module";
import AuthModule from "./modules/auth/auth-module";

// pages
import PreloadPage from "./modules/pages/preload-page/preload-page";
import GeneralPage from "./modules/pages/general-page/general-page";
import ServicesPage from "./modules/pages/services-page/services-page";
import OurWorksPage from "./modules/pages/our-works-page/our-works-page";
import AboutPage from "./modules/pages/about-page/about-page";
import BlogPage from "./modules/pages/blog-page/blog-page";
import ContactsPage from "./modules/pages/contacts-page/contacts-page";
import CartPage from "./modules/pages/cart-page/cart-page";
import FavoritesPage from "./modules/pages/favorites-page/favorites-page";
import AccountPage from "./modules/pages/account-page/account-page";
import NotFoundPage from "./modules/pages/not-found-page/not-found-page";
import LoginForm from "./modules/auth/components/login-form/login-form";
import RegistrationForm from "./modules/auth/components/registration-form/registration-form";

// ui
import Header from "./modules/ui/header/header";
import Footer from "./modules/ui/footer/footer";

// utils
import { routes } from "./utils/routes/main-routes/main-routes";

const App: FC = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path={routes.WELCOME_PAGE} element={<PreloadPage />} />
          <Route index path={routes.GENERAL_PAGE} element={<GeneralPage />} />
          <Route path={routes.MAIN_MODULE} element={<MainModule />}>
            <Route path={routes.SERVICES_PAGE} element={<ServicesPage />} />
            <Route path={routes.OUR_WORKS_PAGE} element={<OurWorksPage />} />
            <Route path={routes.ABOUT_PAGE} element={<AboutPage />} />
            <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
            <Route path={routes.CONTACTS_PAGE} element={<ContactsPage />} />
            <Route path={routes.CART_PAGE} element={<CartPage />} />
            <Route path={routes.FAVORITES_PAGE} element={<FavoritesPage />} />
            <Route path={routes.ACCOUNT_PAGE} element={<AccountPage />} />
            <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
          </Route>
          <Route />
          <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
          <Route path={routes.AUTH_MODULE} element={<AuthModule />}>
            <Route path={routes.LOGIN_PAGE} element={<LoginForm />} />
            <Route
              path={routes.REGISTRATION_PAGE}
              element={<RegistrationForm />}
            />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
