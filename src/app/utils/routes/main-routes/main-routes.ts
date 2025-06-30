// routes using on this app
export const routes = {
  // modules routes
  MAIN_MODULE: "/main/*",
  AUTH_MODULE: "/auth/*",
  NOT_EXIST_PAGE: "*",

  //   pages routes
  // WELCOME_PAGE: "/",
  GENERAL_PAGE: "",
  SERVICES_PAGE: "services",
  OUR_WORKS_PAGE: "our-works",
  ABOUT_PAGE: "about",
  BLOG_PAGE: "blog",
  CONTACTS_PAGE: "contacts",
  CART_PAGE: "cart",
  FAVORITES_PAGE: "favorites",
  ACCOUNT_PAGE: "account",
  LOGIN_PAGE: "login",
  REGISTRATION_PAGE: "registration",
  CREATE_BLOG_POST_PAGE: "create-blog-post",
  BLOG_POST_MANAGING: "posts-managing",
  EDIT_POST_PAGE: "edit-post",
} as const;
