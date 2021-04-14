// ACTION CREATORS
// CREATOR returns an object with only type of action. // CREATOR let a REDUCER know how to deal with THEM.
import { message } from "antd";

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS

} from "../utils/constants";

//Sagas

//


export function userLoginSuccess(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user,
  };
}

export function loginUserAction(params) {
  return {
    type: USER_LOGIN,
    payload: params,
  };
}

export function userLogoutSuccess(user) {
  return {
    type: USER_LOGOUT_SUCCESS,
    user,
  };
}

export function logoutUserAction(params) {
  return {
    type: USER_LOGOUT,
  };
}


