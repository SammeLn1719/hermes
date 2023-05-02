import { AxiosResponse } from "axios";
import  $host from "../http";
import { IUser } from "../types/IUser";

export default class AuthService{
    static async login(email:string, password: string):Promise<AxiosResponse<IUser>>{
        return $host.post<IUser>('/api/auth/signin', {email, password})
    }
    static async registration(email:string, password: string)/*:Promise<AxiosResponse<IUser>>*/{
        return $host.post('api/auth/signup', {email, password,role:'admin'})
    }
    static async logout():Promise<void>{
        return $host.post('/logout')
    }
}