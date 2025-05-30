import { api } from './api';

// Define the type for updating user profile
export interface UserProfileUpdate {
  name?: string;
  email?: string;
  // Add other fields as needed
}

export const authService = {
  login: async (email: string, password: string) => {
    return api.post('/auth/login', { email, password });
  },

  register: async (name: string, email: string, password: string) => {
    return api.post('/auth/register', { name, email, password });
  },

  logout: async (token: string) => {
    return api.post('/auth/logout', {}, token);
  },

  refreshToken: async (refreshToken: string) => {
    return api.post('/auth/refresh', { refreshToken });
  },

  forgotPassword: async (email: string) => {
    return api.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, password: string) => {
    return api.post('/auth/reset-password', { token, password });
  },

  verifyEmail: async (token: string) => {
    return api.post('/auth/verify-email', { token });
  },

  updateProfile: async (data: UserProfileUpdate, token: string) => {
    return api.put('/auth/profile', data, token);
  },

  getMe: async (token: string) => {
    return api.get('/auth/me', token);
  },


  changePassword: async (oldPassword: string, newPassword: string, token: string) => {
    return api.put('/auth/change-password', { oldPassword, newPassword }, token);
  },
};