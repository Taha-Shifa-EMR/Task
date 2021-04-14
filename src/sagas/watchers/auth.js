import { put, takeLatest, call } from "redux-saga/effects";
import {
  USER_LOGIN,
  USER_LOGOUT,
} from "../../lib/utils/constants";

import {
  userLoginSuccess,
  userLogoutSuccess,
} from "../../lib/actions";

import {
  loginUser,
  logoutUser,
} from "../../lib/api/api";

function* loginUserSaga(params) {
  try {
    const user = yield call(loginUser, params.payload);
    yield put(userLoginSuccess(user));
  } catch (error) {
  }
}

function* logoutUserSaga(params) {
  try {
    const user = yield call(logoutUser, params.payload);
    yield put(userLogoutSuccess(user));
  } catch (error) {
    console.log(error); //for checking of an error with handled later
  }
}


export default function* watchAuthSaga() {
  yield takeLatest(USER_LOGIN, loginUserSaga);
  yield takeLatest(USER_LOGOUT, logoutUserSaga);
}
