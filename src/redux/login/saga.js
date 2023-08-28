import { takeEvery, put, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
import { storeProfile } from "../../helper/auth";
import profile from "../../assets/dummy/login";

function* doLogin(action) {
  var { data, type } = action;

  data = profile;

  console.warn("Sign in Saga", data);

  try {
    const profile = yield call(storeProfile, data);
    yield put({ type: LOGIN_SUCCESS, data: profile });
  } catch (ex) {
    yield put({ type: LOGIN_FAILURE, error: ex });
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, doLogin);
}

export default loginSaga;
