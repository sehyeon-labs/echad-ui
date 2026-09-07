
interface PathComponents {
  INDEX: string;
  LOGIN: string;
  DASHBOARD: string;

  PLAN: string;
  EDITOR: string;
  GUESTBOOK: string;
  GALLERY: string;
  NOTICE: string;
  SETTING: string;
}

export const PATH: PathComponents = {
  INDEX: '/index',
  LOGIN: '/login',
  DASHBOARD: '/',

  PLAN: '/plan',
  EDITOR: '/editor',
  GUESTBOOK: '/guestbook',
  GALLERY: '/gallery',
  NOTICE: '/notice',
  SETTING: '/setting',
}

export const deployHostName: string = import.meta.env.VITE_DEPLOY_HOSTNAME || 'http://localhost:5173';