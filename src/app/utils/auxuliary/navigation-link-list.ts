import { routes } from "../routes/main-routes/main-routes";

// object of page type
import { IPagesNavigationItems } from "../../types/utils-types/pages-navigation-type";

const MAIN_MODULE_ROUTE = "main/";

export const PAGES_NAVIGATION_LIST: IPagesNavigationItems[] = [
  { pageName: "главная", href: routes.GENERAL_PAGE },
  { pageName: "услуги", href: MAIN_MODULE_ROUTE + routes.SERVICES_PAGE },
  { pageName: "наши работы", href: MAIN_MODULE_ROUTE + routes.OUR_WORKS_PAGE },
  // { pageName: "о нас", href: MAIN_MODULE_ROUTE + routes.ABOUT_PAGE },
  { pageName: "блог", href: MAIN_MODULE_ROUTE + routes.BLOG_PAGE },
  { pageName: "контакты", href: MAIN_MODULE_ROUTE + routes.CONTACTS_PAGE },
];

// export const ICONS_NAVIGATION_LIST: IPagesNavigationItems[] = [
//   { pageName: "личный кабинет", href: MAIN_MODULE_ROUTE + routes.ACCOUNT_PAGE },
//   { pageName: "корзина", href: MAIN_MODULE_ROUTE + routes.CART_PAGE },
//   { pageName: "избранное", href: MAIN_MODULE_ROUTE + routes.FAVORITES_PAGE },
// ];
