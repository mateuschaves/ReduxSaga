import { all, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import * as LoginActions from "../actions/login";

function* login(action) {
  console.log("login ");
  try {
    const { username } = action.payload;

    const response = yield call(
      axios.get,
      `https://api.github.com/users/${username}`
    );

    yield put(LoginActions.loginSuccess(username, { user: response.data }));
  } catch (error) {
    yield put(LoginActions.loginFailure());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest("LOGIN_REQUEST", login)]);
}
