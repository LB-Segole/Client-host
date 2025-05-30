import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from '../components/ErrorBoundary';
import { AudioProvider } from '../context/AudioContext';
import { AuthProvider } from '../context/AuthContext';
import { CallProvider } from '../context/CallContext';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ErrorBoundary onError={(error, errorInfo) => console.error('Application error:', error, errorInfo)}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
            <AudioProvider>
              <CallProvider>
                <Component {...pageProps} />
              </CallProvider>
            </AudioProvider>
          </AuthProvider>
        </Router>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Disable SSR
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
}); 