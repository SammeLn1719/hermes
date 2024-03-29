import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom';

import App from './App';
import UserStore from './app/components/ui/UseStore';
import Store from './app/components/ui/Store';

export const Context = createContext<any | null>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  
  <Context.Provider value={{
      user:new UserStore(),
      store: new Store()
  }}>
      
        <App />

  </Context.Provider>

  
);