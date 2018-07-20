import { takeEvery, put, call } from 'redux-saga/effects'
import { getTokenOwner, getUserInformation } from '../api'
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../ducks/users";
import { logout } from '../ducks/auth'
import requestFlow from "./request";

function* fetchUserWatchFlow(action) {
  try {
    let response;
    if (action.payload) {
      response = yield call(requestFlow, getUserInformation, action.payload);
    } else {
      response = yield call(requestFlow, getTokenOwner);
    }

    yield put(fetchUserSuccess(response));
  } catch (e) {
    yield put(fetchUserFailure(e));
    if (!action.payload) yield put(logout());
  }
}

export function* fetchUserWatch() {
  yield takeEvery(fetchUserRequest, fetchUserWatchFlow);
}
