import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Creating a root element to render the files
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Components in React
  // react.strictMode helps to display errors on the screen
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
