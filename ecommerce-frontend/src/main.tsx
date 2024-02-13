import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/app.scss';
// import posthog from 'posthog-js';
// posthog.init('phc_EW8IUTMFzjYobJBZuEqhppjV5KCFL0VTDoBcPbAgFV2', { api_host: 'https://deepika.opensaiyan.biz' })
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 