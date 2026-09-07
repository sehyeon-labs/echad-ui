export interface User {
  userId: string;
  userLevel: 'ADMIN' | 'USER';
  activeYn: 'Y' | 'N';
  groomName: string;
  brideName: string;
}

export interface LoginResponse {
  userId: string;
  userLevel: 'ADMIN' | 'USER';
  activeYn: 'Y' | 'N';
  groomName: string;
  brideName: string;
}

export interface JoinResponse {
  userId: string;
  userEmail: string;
  phoneNumber: string;
  phoneVerifiedYn: string;
  groomName: string;
  brideName: string;
  weddingDate: string | null;
}