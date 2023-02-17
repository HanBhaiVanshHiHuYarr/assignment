import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
//some random comment to check webhooks github
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
