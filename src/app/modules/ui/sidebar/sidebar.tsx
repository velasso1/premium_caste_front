import { FC } from "react";

import SidebarItem from "./components/sidebar-item";

import { sidebarItems } from "#utils/auxuliary/sidebar-items.ts";

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => {
        return <SidebarItem key={index} itemName={item} customClass={index === 0 ? "sidebar__item--active" : ""} />;
      })}
    </div>
  );
};

export default Sidebar;
