import { FC, useState } from "react";

import { useAppSelector } from "../../../../store";

import Sidebar from "#ui/sidebar/sidebar.tsx";
import { sidebarItemsAdminMenu } from "#utils/auxuliary/sidebar-items.ts";

const AdminPanel: FC = () => {
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
            <Sidebar sidebarItems={sidebarItemsAdminMenu} managementType="nav" />
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
