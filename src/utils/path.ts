interface PathComponents {
  INDEX: string;
}

export const PATH: PathComponents = {
  INDEX: '/',
}

export const deployHostName: string = import.meta.env.VITE_DEPLOY_HOSTNAME || 'http://localhost:5173';