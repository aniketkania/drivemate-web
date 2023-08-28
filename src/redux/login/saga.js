import { takeEvery,put } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

function* doLogin(action) {
  const {data,type} = action;
    
    console.warn("Sign in Saga",data);
    
    yield put({type:LOGIN_SUCCESS,data})
}

function* loginSaga() {
    yield takeEvery(LOGIN_REQUEST,doLogin);
}

export default loginSaga;