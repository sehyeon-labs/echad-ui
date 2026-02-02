import type { FC } from "react";
import IndexPage from '@/pages/page';
import Login from '@/pages/login';
import Dashboard from '@/pages/dashboard';

interface PageComponents {
  Login: FC;
  Dashboard: FC;
  IndexPage: FC;
}

const PageRoutes: PageComponents = {
  IndexPage,
  Login,
  Dashboard,
}

export default PageRoutes;