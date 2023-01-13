import { routeLink } from '@constant';
import { Navigate, useRoutes } from 'react-router-dom';
import { AppRoutes, useIsAuthenticatedPath } from './routes';

export const AppRouter = () => {
  const Router = useRoutes(AppRoutes);
  const isAuthenticatedPath = useIsAuthenticatedPath();

  // -- Add Conditional Router Here -- //
  if (!isAuthenticatedPath) {
    return <Navigate to={routeLink.login} replace />;
  }

  return Router;
};