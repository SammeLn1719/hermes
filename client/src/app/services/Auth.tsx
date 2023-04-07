import style from "./../assets/styles/admin.module.scss"
import { observer } from 'mobx-react-lite';
import React, { Component, useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import './../assets/styles/standard.module.scss';
import { NavLink,useNavigate, useLocation } from 'react-router-dom';
import { LOGIN_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER,CATALOG_ROUTE } from "../components/utils/consts";
import { login, registration } from "../../http/userAPI";



const Auth = observer(() => {
    const {user} = useContext(Context)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[emailDirty, setEmailDirty] = useState(false)
    const[passwordDirty, setPasswordDirty] = useState(false)
    const[emailError, setEmailError] = useState('Емейл не может быть рустым')
    const[passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const[formValid, setFormValid] = useState(false)


   
    useEffect(()=>{
        if(emailError || passwordError){
            setFormValid(false)
        } else{
            setFormValid(true)
        }
    },[emailError, passwordError])

    const emailHandler = (e:any) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный емейл')
        }else{
            setEmailError('')
        }
    }

    const passwordHandler = (e:any) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
            if(!e.target.value){
                setPasswordError('Пароль не может быть пустым')
            }
        }else{
            setPasswordError('')
        }
    }

    const blurHandler = (e: any) =>{
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTER
    console.log("====================================")
    console.log(location)
    console.log(navigate)
    console.log(isLogin)
    console.log("====================================")
    const click = async () =>{
        try{
            let data;
             if(isLogin){
                 console.log(1)
                 data = await login(email, password)
             }else{
                 console.log(2)
                 data = await registration(email, password)
             }
            console.log(3)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(CATALOG_ROUTE)
        }catch(e:any){
            console.log(4)
            alert(e.response.data.message)
        }
    }
    return <form>
    <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
    <p>Почта:</p>
    <p>{(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}</p>
    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email..."/>
    <p>Пароль:</p>
    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
    <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..."/>
    <div className={style.noAkk}>
        {isLogin ? 
        <NavLink to={REGISTRATION_ROUTER}>Регистрация</NavLink>
        :
        <NavLink to={LOGIN_ROUTER}>Авторизация</NavLink>
        }
       
    </div>    
     <button disabled={!formValid} onClick={click} type="submit">{isLogin ? 'Войти' : 'Регистрация'}</button> 
</form>;
})

export default Auth;