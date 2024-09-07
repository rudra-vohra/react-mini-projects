import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// Creating a root element to render the files
const root = ReactDOM.createRoot(document.getElementById('root'));

// USing root.render to render the files on the webpage

// root.render(
//   <h1>Hello WOrld</h1>
// )

root.render(
  // Components in React
  // react.strictMode helps to display errors on the screen
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
