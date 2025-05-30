import { useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    if (process.env.NODE_ENV === 'production') {
      console.warn('useAuth used outside AuthProvider – returning fallback context');
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: true,
        login: async () => {},
        logout: () => {},
        register: async () => {},
      };
    }
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
