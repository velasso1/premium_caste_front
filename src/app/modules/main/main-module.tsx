import { FC, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

// pages
import MainPage from "../pages/general-page/general-page";
import ServicesPage from "../pages/services-page/services-page";
import OurWorksPage from "../pages/our-works-page/our-works-page";
import AboutPage from "../pages/about-page/about-page";
import BlogPage from "../pages/blog-page/blog-page";
import ContactsPage from "../pages/contacts-page/contacts-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

// ui
import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

// utils
import { routes } from "../../utils/routes/main-routes/main-routes";

const MainModule: FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="">
      <Header />
      <div className="container">
        <Routes>
          <Route index path={routes.GENERAL_PAGE} element={<MainPage />} />
          <Route path={routes.SERVICES_PAGE} element={<ServicesPage />} />
          <Route path={routes.OUR_WORKS_PAGE} element={<OurWorksPage />} />
          <Route path={routes.ABOUT_PAGE} element={<AboutPage />} />
          <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
          <Route path={routes.CONTACTS_PAGE} element={<ContactsPage />} />
          <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainModule;
