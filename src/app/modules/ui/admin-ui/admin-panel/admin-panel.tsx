// import { FC, useState } from "react";

// import { useAppSelector } from "../../../../store";

// import { useNavigate } from "react-router-dom";

// import Sidebar from "#ui/sidebar/sidebar.tsx";
// import { sidebarItemsAdminMenu } from "#utils/auxuliary/sidebar-items.ts";
// import SidebarItem from "#ui/sidebar/components/sidebar-item.tsx";

// const AdminPanel: FC = () => {
//   const navigate = useNavigate();

//   const [panelIsOpen, setPanelState] = useState<boolean>(false);

//   const { userIsAdmin } = useAppSelector((state) => state.userSlice);

//   return userIsAdmin ? (
//     <div className="admin-panel">
//       {panelIsOpen ? (
//         <>
//           <div className="admin-panel__title--open">
//             <span>Админ меню</span> &nbsp;
//             <span onClick={() => setPanelState((prev) => !prev)}>X</span>
//           </div>
//           <div className="admin-panel--open" onClick={() => setPanelState(false)}>
//             <Sidebar>
//               {sidebarItemsAdminMenu.map((item) => {
//                 return (
//                   <SidebarItem
//                     key={item.itemName}
//                     onClick={() => navigate(`main/${item.linkTo}`)}
//                     itemInfo={item}
//                     activeElement={false}
//                   />
//                 );
//               })}
//             </Sidebar>
//           </div>
//         </>
//       ) : (
//         <div className="admin-panel__title" onClick={() => setPanelState(true)}>
//           Админ меню
//         </div>
//       )}
//     </div>
//   ) : null;
// };

// export default AdminPanel;

import { FC, useState, useRef, useEffect } from "react";
import { useAppSelector } from "../../../../store";
import { useNavigate } from "react-router-dom";
import Sidebar from "#ui/sidebar/sidebar.tsx";
import { sidebarItemsAdminMenu } from "#utils/auxuliary/sidebar-items.ts";
import SidebarItem from "#ui/sidebar/components/sidebar-item.tsx";

const AdminPanel: FC = () => {
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  // Закрываем меню при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!userIsAdmin) return null;

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="admin-panel" ref={panelRef}>
      <div className="admin-panel__header" onClick={togglePanel}>
        <span>Админ меню</span>
        <span className="admin-panel__arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="admin-panel__dropdown">
          {sidebarItemsAdminMenu.map((item) => {
            return (
              <SidebarItem
                key={item.itemName}
                onClick={() => {
                  navigate(`../../main/${item.linkTo}`);
                  setIsOpen(false);
                }}
                itemInfo={item}
                activeElement={false}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
