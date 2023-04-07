import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
<<<<<<< HEAD
    const {data} = await $host.post('api/auth/signup', {username:email,email, password, role: 'ADMIN'})
=======
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
>>>>>>> 632c72b3cc9e165c60c87b136f2bdbd6c417b965
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
<<<<<<< HEAD
    const {data} = await $host.post('api/auth/signin', {username:email, password})
=======
    const {data} = await $host.post('api/user/login', {email, password})
>>>>>>> 632c72b3cc9e165c60c87b136f2bdbd6c417b965
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}