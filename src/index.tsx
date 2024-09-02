import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';

import './assets/css/tailwind.css';
import './assets/css/tailwind-helpers.css';
import './assets/css/custom.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);