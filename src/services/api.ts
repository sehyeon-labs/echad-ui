import type { JoinResponse, LoginResponse } from "@/@types/user";
import { ApiClient } from "@/client/api.client";

export const apiClient = new ApiClient();

/** Auth */
export const authMeApi = async (): Promise<LoginResponse> => {
  return apiClient.GET<LoginResponse>('/auth/me');
}

export const loginApi = async (userId: string, userPassword: string): Promise<LoginResponse> => {
  return apiClient.POST<LoginResponse>('/auth/login', {
    userId,
    userPassword,
  });
};

export const logoutApi = async (): Promise<void> => {
  return apiClient.POST<void>('/auth/logout');
}

export const joinApi = async (
  userId: string, 
  userPassword: string, 
  userEmail: string, 
  phoneNumber: string, 
  phoneVerifiedYn: string, 
  groomName: string, 
  brideName: string, 
  weddingDate: string
): Promise<JoinResponse> => {
  return apiClient.POST<JoinResponse>('/auth/join', {
    userId,
    userPassword,
    userEmail,
    phoneNumber,
    phoneVerifiedYn,
    groomName,
    brideName,
    weddingDate
  });
};