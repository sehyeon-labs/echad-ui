
interface PathComponents {
  INDEX: string;
  INVITATION: string;
}

export const PATH: PathComponents = {
  INDEX: '/',
  INVITATION: '/wedding/:slug',
}

export const deployHostName: string = import.meta.env.VITE_DEPLOY_HOSTNAME || 'http://localhost:5173';