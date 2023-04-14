
import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/auth/signup', {username:email,email:email, password, role: 'ADMIN'})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/auth/signin', {email, password})
    localStorage.setItem('token', data.accessToken)
    return jwt_decode(data.accessToken)
}

export const check = async () => {
    const {data} = await $authHost.get('api/auth/check')
    localStorage.setItem('token', data)
    return jwt_decode(data)
}