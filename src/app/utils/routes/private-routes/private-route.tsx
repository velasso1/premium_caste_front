import { FC } from "react";

import { useAppSelector } from "../../../store";

import { Navigate } from "react-router-dom";

import { routes } from "../main-routes/main-routes";

interface IPrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  const { userIsAuth } = useAppSelector((state) => state.userSlice);

  return userIsAuth ? children : <Navigate to={"/auth/" + routes.LOGIN_PAGE} />;
};

export default PrivateRoute;
