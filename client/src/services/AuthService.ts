import { AxiosResponse } from "axios";
import  $host from "../http";
import { AuthResponse } from "../types/response/AuthResponse";

export default class AuthService{
    static async login(email:string, password: string):Promise<AxiosResponse<AuthResponse>>{
        return $host.post<AuthResponse>('/login', {email, password})
    }
    static async registration(email:string, password: string):Promise<AxiosResponse<AuthResponse>>{
        return $host.post<AuthResponse>('api/auth/signup', {email, password,role:'admin'})
    }
    static async logout():Promise<void>{
        return $host.post('/logout')
    }
}