import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);