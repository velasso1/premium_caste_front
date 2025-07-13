import { FC } from "react";
import { ISidebarItemAdminMenu, ISidebarItemsPostsMenu, ISidebarItem } from "#utils/auxuliary/sidebar-items.ts";

interface ISidebarItemProps {
  onClick: () => void;
  activeElement: boolean;
  itemInfo: ISidebarItemAdminMenu | ISidebarItemsPostsMenu | ISidebarItem;
  customClass?: string;
}

const SidebarItem: FC<ISidebarItemProps> = ({ onClick, activeElement, itemInfo, customClass }) => {
  return (
    <div
      className={`sidebar__item ${activeElement ? "sidebar__item--active" : ""} ${customClass ?? null}`}
      onClick={() => onClick()}
    >
      <span>{itemInfo.itemName}</span>
    </div>
  );
};

export default SidebarItem;
