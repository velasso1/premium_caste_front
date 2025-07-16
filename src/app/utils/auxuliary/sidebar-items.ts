import { routes } from "#utils/routes/main-routes/main-routes.ts";

export interface ISidebarItem {
  itemName: string;
}

export interface ISidebarItemAdminMenu extends ISidebarItem {
  linkTo: (typeof routes)[keyof typeof routes] | "undefined";
  action?: "NAV";
}

export interface ISidebarItemsPostsMenu extends ISidebarItem {
  dispatchAction: "draft" | "published" | "archived";
}

export const sidebarItemsWorks: readonly ISidebarItem[] = [
  { itemName: "Всё" },
  { itemName: "Оклейка винилом" },
  { itemName: "Пошив салонов" },
  { itemName: "Тонирование стекол и оптики" },
  { itemName: "Световой тюнинг" },
  { itemName: "Оклейка защитными пленками" },
  { itemName: "Установка шумоизоляции" },
  { itemName: "Автозвук и мультимедия" },
  { itemName: "Детейлинг" },
  { itemName: "Установка доп оборудования" },
  { itemName: "Диски" },
  // { itemName: "Дизайнерская оклейка" },
  // { itemName: "Автоковры" },
] as const;

export const sidebarItemsAdminMenu: readonly ISidebarItemAdminMenu[] = [
  { itemName: "Создать пост", linkTo: routes.CREATE_BLOG_POST_PAGE },
  { itemName: "Управление постами", linkTo: routes.BLOG_POST_MANAGING },
  { itemName: "Создать работу", linkTo: routes.CREATE_WORK_PAGE },
] as const;

export const sidebarItemsPostsMenu: readonly ISidebarItemsPostsMenu[] = [
  { itemName: "Опубликованные", dispatchAction: "published" },
  { itemName: "Ждут публикации", dispatchAction: "draft" },
  { itemName: "В архиве", dispatchAction: "archived" },
] as const;
