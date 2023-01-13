import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom';
import { Loader, Layout } from '@components';
import { routeLink } from '@constant';

const Home = loadable(() => import('@pages'), {
  resolveComponent: (c) => c.Home,
  fallback: <Loader />
});

const About = loadable(() => import('@pages'), {
  resolveComponent: (c) => c.About,
  fallback: <Loader />
});

const Login = loadable(() => import('@pages'), {
  resolveComponent: (c) => c.Login,
  fallback: <Loader />
});

export const UserRoutes: RouteObject[] = [
  {
    path: routeLink.home,
    element: <Layout Page={Home} />
  },
  {
    path: routeLink.about,
    element: <Layout Page={About} />
  },
  {
    path: routeLink.login,
    element: <Layout Page={Login} />
  }
];