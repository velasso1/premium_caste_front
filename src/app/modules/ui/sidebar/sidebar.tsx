import React, { FC } from "react";

interface ISidebarProps {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const Sidebar: FC<ISidebarProps> = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

export default Sidebar;
