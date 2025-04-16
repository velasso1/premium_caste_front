import { FC } from "react";

import { Outlet } from "react-router-dom";

const MainModule: FC = () => {
  return (
    <div className="main-module">
      <Outlet />
    </div>
  );
};

export default MainModule;
