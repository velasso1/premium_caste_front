import { FC, ReactElement } from "react";

import { useAppSelector, RootState } from "../store";

import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: ReactElement;
}

const createProtectedRoute = (
  selector: (state: RootState) => boolean,
  redirectPath: string
): FC<IProtectedRouteProps> => {
  return ({ children }) => {
    const hasAccess = useAppSelector(selector);
    return hasAccess ? children : <Navigate to={redirectPath} replace />;
  };
};

export default createProtectedRoute;
