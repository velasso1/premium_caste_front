import { routes } from "#utils/routes/main-routes/main-routes.ts";

export interface ISidebarItem {
  itemName: string;
}

export interface ISidebarItemAdminMenu extends ISidebarItem {
  linkTo: string;
  action?: "NAV";
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
  { itemName: "Опубликовать пост", linkTo: "undefined" },
  { itemName: "Назначить модератора", linkTo: "undefined" },
  { itemName: "Добавить услугу", linkTo: "undefined" },
] as const;
