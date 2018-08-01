import { put, call, takeLatest } from "redux-saga/effects";
import { getTokenOwner, getUserInformation } from "../api";
import {
  getLoginSuccess,
  getLoginFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
} from "../ducks/user/actions";
import requestFlow from './request';

function* fetchUserWatch(action) {
    try {
      let userLogin, response;
      if (!action.payload) {
        response = yield call(requestFlow, getTokenOwner);
        yield put(getLoginSuccess(response));
        userLogin = response.data.login;
      } else {
        userLogin = action.payload;
      }
      try {
        const userInfo = yield call(requestFlow, () => getUserInformation(userLogin), action.payload);
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