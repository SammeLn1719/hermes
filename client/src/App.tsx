import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.';
import style from './app/assets/styles/standard.module.scss'
import AppRouter from './app/components/ui/AppRouter';

import "./index.css"


const App:FC = observer(() => {
  const {useStore} = useContext(Context)
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    if(localStorage.getItem('token'))
      useStore.checkAuth()
  }, [])

  return <section className={style.wrapper}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </section>;
})

export default App;
