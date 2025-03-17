import { FC } from 'react';

interface IPrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  return children;
};

export default PrivateRoute;
