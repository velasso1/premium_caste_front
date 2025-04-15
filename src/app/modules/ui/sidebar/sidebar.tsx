import { FC } from "react";

import SidebarItem from "./components/sidebar-item";

import { sidebarItems } from "#utils/auxuliary/sidebar-items.ts";

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item) => {
        return <SidebarItem itemName={item} />;
      })}
    </div>
  );
};

export default Sidebar;
