import { FC, useState } from "react";

import { useAppSelector } from "../../../../store";

const AdminPanel: FC = () => {
  const [panelIsOpen, setPanelState] = useState<boolean>();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  return !userIsAdmin ? <div className="admin-panel">admin panel</div> : null;
};

export default AdminPanel;
