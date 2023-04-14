import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './app/hooks/UseStore';
import Store from './app/hooks/Store';
import userStore from './utils/userStore';

//new token 
interface State{
  useStore:userStore,
  store:Store,
}
const useStore = new userStore();
const store = new Store()

export const Context = createContext<State>({
    useStore,
    store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
      useStore,
      store
  }}>
        <App />
  </Context.Provider>
);