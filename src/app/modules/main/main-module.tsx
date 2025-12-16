import { FC, lazy } from "react";

import { Routes, Route } from "react-router-dom";

// import ServicesPage from "#pages/services-page/services-page.tsx";
// import OurWorksPage from "#pages/our-works-page/our-works-page.tsx";
// import AboutPage from "#pages/about-page/about-page.tsx";
// import BlogPage from "#pages/blog-page/blog-page.tsx";
// import ContactsPage from "#pages/contacts-page/contacts-page.tsx";
// import CartPage from "#pages/cart-page/cart-page.tsx";
// import FavoritesPage from "#pages/favorites-page/favorites-page.tsx";
// import AccountPage from "#pages/account-page/account-page.tsx";
// import NotFoundPage from "#pages/not-found-page/not-found-page.tsx";
// import CreateBlogPostPage from "#pages/create-blog-post-page/create-blog-post-page.tsx";
// import BlogPostManagingPage from "#pages/blog-post-managing-page/blog-post-managing-page.tsx";

// import EditPostPage from "#pages/edit-post-page/edit-post-page.tsx";
// import CurrentServicePage from "#pages/current-service-page/current-service-page.tsx";
// import CurrentPostPage from "#pages/current-post-page/current-post-page.tsx";
// import CreateWorkPage from "#pages/create-work-page/create-work-page.tsx";
// import CurrentWorkPage from "#pages/current-work-page/current-work-page.tsx";
// import EditWorkPage from "#pages/edit-work-page/edit-work-page.tsx";

const ServicesPage = lazy(() => import("#pages/services-page/services-page.tsx"));
const OurWorksPage = lazy(() => import("#pages/our-works-page/our-works-page.tsx"));

const AboutPage = lazy(() => import("#pages/about-page/about-page.tsx"));

const BlogPage = lazy(() => import("#pages/blog-page/blog-page.tsx"));

const ContactsPage = lazy(() => import("#pages/contacts-page/contacts-page.tsx"));

const CartPage = lazy(() => import("#pages/cart-page/cart-page.tsx"));

const FavoritesPage = lazy(() => import("#pages/favorites-page/favorites-page.tsx"));

const AccountPage = lazy(() => import("#pages/account-page/account-page.tsx"));

const NotFoundPage = lazy(() => import("#pages/not-found-page/not-found-page.tsx"));

const CreateBlogPostPage = lazy(() => import("#pages/create-blog-post-page/create-blog-post-page.tsx"));
const BlogPostManagingPage = lazy(() => import("#pages/blog-post-managing-page/blog-post-managing-page.tsx"));
const EditPostPage = lazy(() => import("#pages/edit-post-page/edit-post-page.tsx"));
const CurrentServicePage = lazy(() => import("#pages/current-service-page/current-service-page.tsx"));
const CurrentPostPage = lazy(() => import("#pages/current-post-page/current-post-page.tsx"));
const CreateWorkPage = lazy(() => import("#pages/create-work-page/create-work-page.tsx"));
const CurrentWorkPage = lazy(() => import("#pages/current-work-page/current-work-page.tsx"));
const EditWorkPage = lazy(() => import("#pages/edit-work-page/edit-work-page.tsx"));

import PrivateRoute from "#utils/routes/private-routes/private-route.tsx";
import AdminRoute from "#utils/routes/private-routes/admin-route.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const MainModule: FC = () => {
  return (
    <div className="main-module">
      <Routes>
        <Route path={routes.SERVICES_PAGE} element={<ServicesPage />} />
        <Route path={routes.OUR_WORKS_PAGE} element={<OurWorksPage />} />
        <Route path={routes.ABOUT_PAGE} element={<AboutPage />} />
        <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
        <Route path={routes.CONTACTS_PAGE} element={<ContactsPage />} />
        <Route path={routes.CART_PAGE} element={<CartPage />} />
        <Route path={routes.FAVORITES_PAGE} element={<FavoritesPage />} />
        <Route path={routes.ACCOUNT_PAGE} element={<PrivateRoute children={<AccountPage />} />} />
        <Route path={routes.NOT_EXIST_PAGE} element={<NotFoundPage />} />
        <Route path={routes.CURRENT_GALLERY_PAGE + "/:id"} element={<CurrentWorkPage />} />

        {/* SECONDARY PAGES */}
        <Route path={`${routes.BLOG_PAGE}/item/:id`} element={<CurrentPostPage />} />
        <Route path={`${routes.CURRENT_SERVICE_PAGE}/:service`} element={<CurrentServicePage />} />

        {/* ADMIN PAGES */}
        <Route path={routes.CREATE_BLOG_POST_PAGE} element={<AdminRoute children={<CreateBlogPostPage />} />} />
        <Route path={routes.BLOG_POST_MANAGING} element={<AdminRoute children={<BlogPostManagingPage />} />} />
        <Route path={`${routes.EDIT_POST_PAGE}/item/:id`} element={<AdminRoute children={<EditPostPage />} />} />
        <Route path={routes.CREATE_WORK_PAGE} element={<AdminRoute children={<CreateWorkPage />} />} />
        <Route path={routes.EDIT_WORK_PAGE + "/:id"} element={<AdminRoute children={<EditWorkPage />} />} />
      </Routes>
    </div>
  );
};

export default MainModule;
