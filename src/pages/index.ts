import type { FC } from "react";
import IndexPage from '@/pages/page';
import Invitation from '@/pages/invitation';

interface PageComponents {
  IndexPage: FC;
  Invitation: FC;
}

const PageRoutes: PageComponents = {
  IndexPage,
  Invitation
}

export default PageRoutes;