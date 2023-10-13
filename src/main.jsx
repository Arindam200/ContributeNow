import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.css';
import('preline');
import { BrowserRouter } from 'react-router-dom';
import ApiContext from './Context/api/apiContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiContext>
  </React.StrictMode>
);
