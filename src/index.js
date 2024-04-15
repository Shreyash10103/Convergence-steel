import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const server = "https://rfq1-1.onrender.com/api/v1";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

