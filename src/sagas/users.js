import { put, call, takeLatest } from "redux-saga/effects";
import { getTokenOwner, getUserInformation } from "../api";
import {
  getLoginSuccess,
  getLoginFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
} from "../ducks/user-actions";

function* fetchUserWatch(action) {
    try {
      let userLogin;
      if (!action.payload) {
        const response = yield call(getTokenOwner);
        yield put(getLoginSuccess(response));
        userLogin = response.data.login;
      } else {
        userLogin = action.payload;
      }

      try {

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