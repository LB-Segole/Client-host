import { useContext } from 'react';

import { CallContext } from '../context/CallContext';

export const useCalls = () => {
  const context = useContext(CallContext);
  if (!context) {
    throw new Error('useCalls must be used within a CallProvider');
  }
  return context;
};