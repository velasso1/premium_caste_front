import { FC } from "react";

interface ISidebarItemProps {
  itemName: string;
  customClass?: string;
}

const SidebarItem: FC<ISidebarItemProps> = ({ itemName, customClass }) => {
  return (
    <div className={`sidebar__item ${customClass ?? null}`}>
      <span>{itemName}</span>
    </div>
  );
};

export default SidebarItem;
