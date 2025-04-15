import { FC } from "react";

interface ISidebarItemProps {
  itemName: string;
}

const SidebarItem: FC<ISidebarItemProps> = ({ itemName }) => {
  return (
    <div className="sidebar__item">
      <span>{itemName}</span>
    </div>
  );
};

export default SidebarItem;
