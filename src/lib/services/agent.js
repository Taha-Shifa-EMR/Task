import dotenv from 'dotenv';
import jwt_decode from "jwt-decode";
import { userLoginSuccess, logoutUserAction, } from "../actions";
dotenv.config();
// const BASE_URL = process.env.BASE_URL 
const BASE_URL =  'https://spot.stable.trade/api';

class Api {
  static headers() {
    return {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    };
  }
 
 

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route) {
    return this.xhr(route, null, 'DELETE');
  }

  static fetchUrl(route) {
    if (process.env.NODE_ENV === 'development') {
      return `${BASE_URL}${route}`;
    }
    if (process.env.NODE_ENV === 'production') {
      return `${BASE_URL}${route}`;
    }
    return `${BASE_URL}`;
  }

 

  static isTokenExpired() {
    let token = this.getAccessToken();
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date && date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  static getTokenExpirationDate(token) {
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp === undefined) return null;
      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    } catch (error) {
      return false;
    }
  }

  static getAccessToken() {
    return localStorage.getItem('token');
  }


  static xhr(route, params, verb) {
    const url = Api.fetchUrl(route);
    const options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null
    );
    options.headers = Api.headers();
    return fetch(url, options)
      .then((resp) => {
        const json = resp.json();
        if (resp.ok) {
          return json;
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
       
      });
  }
}

export default Api;
