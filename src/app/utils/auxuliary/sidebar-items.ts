import { routes } from "#utils/routes/main-routes/main-routes.ts";

export interface ISidebarItem {
  itemName: string;
}

// type TLinkTo = ;

export interface ISidebarItemAdminMenu extends ISidebarItem {
  linkTo: (typeof routes)[keyof typeof routes] | "undefined";
  action?: "NAV";
}

export interface ISidebarItemsPostsMenu extends ISidebarItem {
  dispatchAction: "draft" | "published" | "archived";
}

export const sidebarItemsWorks: ISidebarItem[] = [
  { itemName: "Всё" },
  { itemName: "Оклейка защитными плёнками" },
  { itemName: "Оклейка цветными плёнками" },
  { itemName: "Дизайнерская оклейка" },
  { itemName: "Шумоизоляция" },
  { itemName: "Аудиосистема и мультимедиа" },
  { itemName: "Установка линз, ремонт и тюнинг фар" },
  { itemName: "Дополнительное оборудование" },
  { itemName: "Цветные ремни безопасности" },
  { itemName: "Автоковры" },
  { itemName: "Пошив" },
  { itemName: "Детейлинг" },
] as const;

export const sidebarItemsAdminMenu: ISidebarItemAdminMenu[] = [
  { itemName: "Создать пост", linkTo: routes.CREATE_BLOG_POST_PAGE },
  { itemName: "Управление постами", linkTo: routes.BLOG_POST_MANAGING },
  { itemName: "Назначить модератора", linkTo: "undefined" },
  { itemName: "Добавить услугу", linkTo: "undefined" },
] as const;

export const sidebarItemsPostsMenu: ISidebarItemsPostsMenu[] = [
  { itemName: "Опубликованные", dispatchAction: "published" },
  { itemName: "Ждут публикации", dispatchAction: "draft" },
  { itemName: "В архиве", dispatchAction: "archived" },
] as const;
