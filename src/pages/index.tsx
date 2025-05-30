import dynamic from 'next/dynamic';

import { Home } from '../components/Home';

// Disable SSR for the Home component
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
}); 