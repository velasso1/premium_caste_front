import { FC, useState } from "react";

import { useAppSelector } from "../../../../store";

import { useNavigate } from "react-router-dom";

import Sidebar from "#ui/sidebar/sidebar.tsx";
import { sidebarItemsAdminMenu } from "#utils/auxuliary/sidebar-items.ts";
import SidebarItem from "#ui/sidebar/components/sidebar-item.tsx";

const AdminPanel: FC = () => {
  const navigate = useNavigate();

  const [panelIsOpen, setPanelState] = useState<boolean>(false);

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  return userIsAdmin ? (
    <div className="admin-panel">
      {panelIsOpen ? (
        <>
          <div className="admin-panel__title--open">
            <span>Админ меню</span> &nbsp;
            <span onClick={() => setPanelState((prev) => !prev)}>X</span>
          </div>
          <div className="admin-panel--open" onClick={() => setPanelState(false)}>
            <Sidebar>
              {sidebarItemsAdminMenu.map((item) => {
                return (
                  <SidebarItem onClick={() => navigate(`main/${item.linkTo}`)} itemInfo={item} activeElement={false} />
                );
              })}
            </Sidebar>
          </div>
        </>
      ) : (
        <div className="admin-panel__title" onClick={() => setPanelState(true)}>
          Админ меню
        </div>
      )}
    </div>
  ) : null;
};

export default AdminPanel;
