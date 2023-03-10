import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/bootstrap.min.css';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
