import React, { Component, useEffect, useState } from 'react';
import './../assets/styles/standard.module.scss';

const Auth = () => {
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

    return <>
        <form>
            <h1>Регистрация</h1>
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email..."/>
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..."/>
            <button disabled={!formValid} type="submit">Регистрация</button>
            <script>
            let xhr = new XMLHttpRequest();
            url = "http://localhost:5000";
            xhr.open("POST", url, true);
            setRequestHeader("Content-Type", "application/json");
            </script>
        </form>
    </>;
}

export default Auth;