import { FC } from "react";

import SidebarItem from "./components/sidebar-item";
import { ISidebarItem, ISidebarItemAdminMenu } from "#utils/auxuliary/sidebar-items.ts";

interface ISidebarProps {
  sidebarItems: ISidebarItem[] | ISidebarItemAdminMenu[];
}

const Sidebar: FC<ISidebarProps> = ({ sidebarItems }) => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => {
        return <SidebarItem key={index} itemName={item.itemName} url={"linkTo" in item ? item.linkTo : null} />;
      })}

      {/* customClass={index === 0 ? "sidebar__item--active" : ""} */}
    </div>
  );
};

export default Sidebar;
