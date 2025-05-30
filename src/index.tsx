import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

// Initialize error tracking
if (process.env.NODE_ENV === 'production') {
  import('./utils/monitoring').then(({ initMonitoring }) => initMonitoring());
}

// Only render on the client side
if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}