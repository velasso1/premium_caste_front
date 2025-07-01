import { FC } from "react";

import SidebarItem from "./components/sidebar-item";
import { ISidebarItem, ISidebarItemAdminMenu, ISidebarItemsPostsMenu } from "#utils/auxuliary/sidebar-items.ts";

interface ISidebarProps {
  readonly sidebarItems: readonly ISidebarItemsPostsMenu[] | readonly ISidebarItemAdminMenu[] | readonly ISidebarItem[];
  managementType: "dispatch" | "nav";
  itemsManagement?: () => void;
  activeElement?: string;
}

const Sidebar: FC<ISidebarProps> = ({ sidebarItems, managementType, itemsManagement, activeElement }) => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => {
        return (
          <SidebarItem
            managementType={managementType}
            key={index}
            itemInfo={item}
            url={"linkTo" in item ? item.linkTo : null}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
