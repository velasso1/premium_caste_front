import { FC } from "react";

import { useNavigate } from "react-router-dom";

interface ISidebarItemProps {
  itemName: string;
  url?: string | null;
  customClass?: string;
  action?: never;
}

const SidebarItem: FC<ISidebarItemProps> = ({ itemName, customClass, url = undefined }) => {
  const navigate = useNavigate();
  return (
    <div className={`sidebar__item ${customClass ?? null}`} onClick={() => (url ? navigate(`main/${url}`) : null)}>
      <span>{itemName}</span>
    </div>
  );
};

export default SidebarItem;
