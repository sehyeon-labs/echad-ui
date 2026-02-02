
interface PathComponents {
  INDEX: string;
  LOGIN: string;
  DASHBOARD: string;
}

export const PATH: PathComponents = {
  INDEX: '/index',
  LOGIN: '/login',
  DASHBOARD: '/'
}

export const deployHostName: string = import.meta.env.VITE_DEPLOY_HOSTNAME || 'http://localhost:5173';