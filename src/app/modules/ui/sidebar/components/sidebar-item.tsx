import { FC } from "react";

import { useAppDispatch } from "../../../../store";
import { changePostStatus } from "../../../../store/slices/posts";
import { ISidebarItemAdminMenu, ISidebarItemsPostsMenu, ISidebarItem } from "#utils/auxuliary/sidebar-items.ts";

import { useNavigate } from "react-router-dom";

interface ISidebarItemProps {
  managementType: "dispatch" | "nav";
  itemInfo: ISidebarItemAdminMenu | ISidebarItemsPostsMenu | ISidebarItem;
  url?: string | null;
  customClass?: string;
}

const SidebarItem: FC<ISidebarItemProps> = ({ itemInfo, customClass, url = undefined, managementType }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      className={`sidebar__item ${customClass ?? null}`}
      onClick={() =>
        managementType === "nav"
          ? navigate(`main/${url}`)
          : dispatch(changePostStatus("dispatchAction" in itemInfo ? itemInfo.dispatchAction : "published"))
      }
    >
      <span>{itemInfo.itemName}</span>
    </div>
  );
};

export default SidebarItem;
