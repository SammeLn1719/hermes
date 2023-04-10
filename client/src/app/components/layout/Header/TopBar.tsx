import React, { FC, useContext } from 'react';
import logo from './../../../assets/image/logo.png';
import style from './../Layout.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../../../index';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTER } from '../../utils/consts';


const TopBar: FC = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () =>{
    user.setUser({})
    user.setIsAuth(false)
  }
  return <section className={style.topBar}>
      <NavLink className={style.topBar_left} to="/"><img className={style.logo} src={logo} alt="logo" /><h1>HERMES</h1></NavLink>
          <nav>
            <Link to="/catalog">Каталог</Link>
            {user.isAuth ?
              <button onClick={()=>user.setIsAuth(false)}>Профиль</button> 
              : 
              <button onClick={() => navigate(LOGIN_ROUTER)}>Вход</button> 
            }
            
          </nav>
        <div className={style.topBar_right}>+375(29)737-66-00</div>
    </section>
})

export default TopBar;