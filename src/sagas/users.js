import { take, put, call, select, takeLatest } from "redux-saga/effects";
import { getTokenOwner, getUserInformation } from "../api";
import {
  getLoginRequest, getLoginSuccess, getLoginFailure,
  getUserInfoRequest, getUserInfoSuccess, getUserInfoFailure
} from "../ducks/user-actions";

function* fetchUserWatch() {
    try {
      const response = yield call(getTokenOwner);
      yield put(getLoginSuccess(response));

      try {
        const userLogin = response.data.login;
        const userInfo = yield call(() => getUserInformation(userLogin));
        yield put(getUserInfoSuccess(userInfo));
      } catch (error) {
        yield put(getUserInfoFailure(error));
      }

    } catch (error) {
      yield put(getLoginFailure(error));
    }
}

function* userRequestWatch() {
  yield takeLatest(getUserInfoRequest, fetchUserWatch);
}

export default userRequestWatch;