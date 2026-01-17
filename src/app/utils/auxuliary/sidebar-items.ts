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
  { itemName: "Оклейка защитной плёнкой" },
  { itemName: "Оклейка цветными плёнками и дизайн" },
  { itemName: "Шумоизоляция" },
  { itemName: "Автозвук и мультимедиа" },
  { itemName: "Дополнительное оборудование" },
  { itemName: "Замена линз, ремонт фар" },
  { itemName: "Цветные ремни и ковры" },
  { itemName: "Пошив салонов" },
  { itemName: "Детейлинг" },
  { itemName: "Тонирование" },
  { itemName: "Кованые диски на заказ" },
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
