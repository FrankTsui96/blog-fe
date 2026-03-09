import { apiClient } from '@/lib/api';

/** 登录 */
export interface ILogin {
  email: string;
  password: string;
}
export type OLogin = { accessToken: string };

export const authApi = {
  /** 登录 */
  login: (data: ILogin) => apiClient.post<OLogin>('auth/login', data),
};
