import { takeEvery,put } from "redux-saga/effects";
import { TEST,SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";

function* doSignup(action) {
  const {data,type} = action;
    
    console.warn("Sign up Saga",data);
    
    yield put({type:SIGNUP_SUCCESS,data})
}

function* signupSaga() {
    yield takeEvery(SIGNUP_REQUEST,doSignup);
}

export default signupSaga;