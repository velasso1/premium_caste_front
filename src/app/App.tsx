import { FC, useEffect, useState } from "react";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { useAppSelector } from "./store";

// modules
import MainModule from "./modules/main/main-module";
import AuthModule from "./modules/auth/auth-module";

// pages
import WelcomePage from "#pages/preloaders/welcome-page.tsx";
import GeneralPage from "#pages/general-page/general-page.tsx";
import ServicesPage from "#pages/services-page/services-page.tsx";
import OurWorksPage from "#pages/our-works-page/our-works-page.tsx";
import AboutPage from "#pages/about-page/about-page.tsx";
import BlogPage from "#pages/blog-page/blog-page.tsx";
import ContactsPage from "#pages/contacts-page/contacts-page.tsx";
import CartPage from "#pages/cart-page/cart-page.tsx";
import FavoritesPage from "#pages/favorites-page/favorites-page.tsx";
import AccountPage from "#pages/account-page/account-page.tsx";
import NotFoundPage from "#pages/not-found-page/not-found-page.tsx";
import CreateBlogPostPage from "#pages/create-blog-post-page/create-blog-post-page.tsx";
import BlogPostManagingPage from "#pages/blog-post-managing-page/blog-post-managing-page.tsx";
import EditPostPage from "#pages/edit-post-page/edit-post-page.tsx";

// auth
import LoginForm from "#auth/components/login-form/login-form.tsx";
import RegistrationForm from "#auth/components/registration-form/registration-form.tsx";

// ui
import Header from "#ui/header/header.tsx";
import Footer from "#ui/footer/footer.tsx";
import Notification from "#ui/notifications/notification.tsx";
import AdminPanel from "#ui/admin-ui/admin-panel/admin-panel.tsx";

// utils
import { routes } from "#utils/routes/main-routes/main-routes.ts";
import PrivateRoute from "#utils/routes/private-routes/private-route.tsx";
import AdminRoute from "#utils/routes/private-routes/admin-route.tsx";
import CurrentPostPage from "#pages/current-post-page/current-post-page.tsx";

const App: FC = () => {
  const navigate = useNavigate();

  const { effectData } = useAppSelector((state) => state.effectsSlice);

  return (
    <div className="main">
      {effectData.status && (
        <Notification notifMessage={effectData.message} notifType={effectData.status ? effectData?.status : "error"} />
      )}

      <AdminPanel />

      {/* <WelcomePage preloadingMode={false} /> */}
      <Header />
      <div className="main-content">
        <Routes>
          {/* <Route path={routes.WELCOME_PAGE} element={null} /> */}

          {/* MAIN PAGES */}
          <Route index path={routes.GENERAL_PAGE} element={<GeneralPage />} />
          <Route path={routes.MAIN_MODULE} element={<MainModule />}>
            <Route path={routes.SERVICES_PAGE} element={<ServicesPage />} />
            <Route path={routes.OUR_WORKS_PAGE} element={<OurWorksPage />} />
            <Route path={routes.ABOUT_PAGE} element={<AboutPage />} />
            <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
            <Route path={routes.CONTACTS_PAGE} element={<ContactsPage />} />
            <Route path={routes.CART_PAGE} element={<CartPage />} />
            <Route path={routes.FAVORITES_PAGE} element={<FavoritesPage />} />
            <Route path={routes.ACCOUNT_PAGE} element={<PrivateRoute children={<AccountPage />} />} />
            <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
            {/* SECONDARY PAGES */}
            <Route path={`${routes.BLOG_PAGE}/item/:id`} element={<CurrentPostPage />} />
            <Route path={routes.CREATE_BLOG_POST_PAGE} element={<AdminRoute children={<CreateBlogPostPage />} />} />
            <Route path={routes.BLOG_POST_MANAGING} element={<AdminRoute children={<BlogPostManagingPage />} />} />
            <Route path={`${routes.EDIT_POST_PAGE}/item/:id`} element={<AdminRoute children={<EditPostPage />} />} />
          </Route>
          <Route />
          <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
          <Route path={routes.AUTH_MODULE} element={<AuthModule />}>
            <Route path={routes.LOGIN_PAGE} element={<LoginForm />} />
            <Route path={routes.REGISTRATION_PAGE} element={<RegistrationForm />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
