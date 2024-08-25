import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';

import './assets/tailwind.css';
import './assets/tailwind-helpers.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);