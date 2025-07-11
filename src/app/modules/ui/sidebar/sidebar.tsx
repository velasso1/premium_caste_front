import { FC } from "react";

import SidebarItem from "./components/sidebar-item";
import { ISidebarItem, ISidebarItemAdminMenu, ISidebarItemsPostsMenu } from "#utils/auxuliary/sidebar-items.ts";

import { useMediaQuery } from "react-responsive";

interface ISidebarProps {
  readonly sidebarItems: readonly ISidebarItemsPostsMenu[] | readonly ISidebarItemAdminMenu[] | readonly ISidebarItem[];
  managementType: "dispatch" | "nav";
  itemsManagement?: () => void;
  activeElement?: string;
  transformToSelect?: boolean;
}

const Sidebar: FC<ISidebarProps> = ({
  sidebarItems,
  managementType,
  itemsManagement,
  activeElement,
  transformToSelect,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 769 });

  return (
    <>
      {isMobile && transformToSelect ? (
        <div className="sidebar">
          <select className="sidebar-select-menu">
            {sidebarItems.map((item, index) => {
              return (
                <option className="sidebar-select-menu__option">
                  <SidebarItem
                    managementType={managementType}
                    key={index}
                    itemInfo={item}
                    url={"linkTo" in item ? item.linkTo : null}
                  />
                </option>
              );
            })}
          </select>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Sidebar;
