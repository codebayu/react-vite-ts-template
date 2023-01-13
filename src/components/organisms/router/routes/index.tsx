import { matchRoutes, useLocation } from 'react-router-dom';
import { UserRoutes } from './user-routes';

export const AppRoutes = [
  ...UserRoutes
];

// -- Check Authenticated Routes Here -- //
export const useIsAuthenticatedPath = () => {
  const location = useLocation();
  const isUserRoute = Boolean(matchRoutes(UserRoutes, location));
  const isAuthenticatedPath = isUserRoute;
  return isAuthenticatedPath;
};