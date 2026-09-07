import type { FC } from "react";
import IndexPage from '@/pages/page';
import Login from '@/pages/login';
import Dashboard from '@/pages/dashboard';
import Plan from "@/pages/plan";
import Editor from '@/pages/editor';
import Notice from '@/pages/notice';
import Setting from '@/pages/setting';

interface PageComponents {
  Login: FC;
  Dashboard: FC;
  IndexPage: FC;

  Plan: FC;
  Editor: FC;
  Notice: FC;
  Setting: FC;
}

const PageRoutes: PageComponents = {
  IndexPage,
  Login,
  Dashboard,

  Plan,
  Editor,
  Notice,
  Setting,
}

export default PageRoutes;