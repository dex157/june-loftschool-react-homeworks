import { take, put, call, select, takeLatest } from "redux-saga/effects";
import { getTokenOwner, getUserInformation } from "../api";
import {
  getLoginRequest, getLoginSuccess, getLoginFailure,
  getUserInfoRequest, getUserInfoSuccess, getUserInfoFailure
} from "../ducks/user-actions";

function* fetchUserWatch(action) {
  while (true) {
    try {
      const userLookupResult = yield call(getTokenOwner);
      let loginSuccessResult = getLoginSuccess(userLookupResult);
      yield put(loginSuccessResult);
     /* if (action === getUserInfoRequest) {
        console.log('o_0');
      } else {

      }*/
    } catch (error) {
      yield put(getLoginFailure(error));
    }
  }
}

function* searchRequestWatch() {
  yield takeLatest(getLoginRequest, fetchUserWatch);
}

export default searchRequestWatch;