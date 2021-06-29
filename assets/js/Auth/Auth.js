import {
  login,
  logout,
 } from '../API/llamadasApi.js';

export default class Auth {
    static async login(coder){
        let res = await login(coder);
        localStorage.setItem('coder', JSON.stringify(res.user));
        localStorage.setItem('token', JSON.stringify(res.token));
    }

    static async logout(){
        let res = await logout(JSON.parse(localStorage.getItem('token')));
        localStorage.clear();
    }

    static getCoder(){
        return JSON.parse(localStorage.getItem('coder'));
    }

    static getToken(){
        return JSON.parse(localStorage.getItem('token'));
    }
}