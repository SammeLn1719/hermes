import React, { Component } from 'react';
import logo from './../../../assets/image/logo.jpg';
import style from './../Layout.module.scss';
import {Routes, Route, Link} from 'react-router-dom';


const TopBar = () => {
  return<>
    <div className={style.topBar}>
      <div className={style.topBar_left}><Link to="/"><img className={style.logo} src={logo} alt="logo" /><h1>HERMES</h1></Link></div>
          <nav>
            <Link to="/katalog">Каталог</Link>
            <Link to="/authorization">Вход</Link>
          </nav>
        <div className={style.topBar_right}>+375(29)737-66-00</div>
    </div>
  </>
}

export default TopBar;