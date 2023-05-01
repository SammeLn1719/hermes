import { AuthResponse } from './../types/response/AuthResponse';
import axios from 'axios';
import { IUser } from '../types/IUser';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { API_URL } from '../http';

export default class userStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    constructor() {

        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setUser(user: IUser) {
        this.user = user;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool
    }
    async login(email: string, password: string) {
        let check
        try {
            await AuthService.login(email, password).then((user) => {
                localStorage.setItem('token', user.data.accessToken);
                this.setUser(user.data)
                check = user.status.toString
            })

        } catch (e: any) {
            console.log(e.response?.data?.message);
            check = false
        }
        return check
    }
    async registration(email: string, password: string) {
        let check
        try {
            const user = await AuthService.registration(email, password)
                localStorage.setItem('token', user.data.accessToken);
                this.setUser(user.data)
                check = true
        } catch (e: any) {
            console.log(e.response?.data?.message);
            check = false
        }
        return check
    }
    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            this.setLoading(true)
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}