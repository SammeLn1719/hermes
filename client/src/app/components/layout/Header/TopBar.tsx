import React, { FC, useContext } from 'react';
import logo from './../../../assets/image/logo.png';
import style from './../Layout.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../../../index';
import { observer } from 'mobx-react-lite';


const TopBar: FC = observer(() => {
  const {user} = useContext(Context)
  return <section className={style.topBar}>
      <NavLink className={style.topBar_left} to="/"><img className={style.logo} src={logo} alt="logo" /><h1>HERMES</h1></NavLink>
          <nav>
            <Link to="/catalog">Каталог</Link>
            {user.isAuth ?
              <button onClick={()=>user.setIsAuth(false)}>Профиль</button> 
              : 
              <button onClick={()=>user.setIsAuth(true)}>Вход</button> 
            }
            
          </nav>
        <div className={style.topBar_right}>+375(29)737-66-00</div>
    </section>
})

export default TopBar;