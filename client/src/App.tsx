import React, { useContext, useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.';
import style from './app/assets/styles/standard.module.scss'
import AppRouter from './app/components/ui/AppRouter';
import { check } from './http/userAPI';



const App = (() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    check().then(data =>{
      user.setUser(true)
      user.setISAuth(true)
    }).finally(()=> setLoading(false))
  }, [])

  return <section className={style.wrapper}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </section>;
})

export default App;
