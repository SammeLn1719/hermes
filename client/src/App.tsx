import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import style from './app/assets/styles/standard.module.scss'
import AppRouter from './app/components/ui/AppRouter';



function App() {
  return <section className={style.wrapper}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </section>;
}

export default App;
