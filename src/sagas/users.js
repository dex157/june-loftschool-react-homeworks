import { takeEvery, put, call } from 'redux-saga/effects'
import { getTokenOwner } from '../api'
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../ducks/users";
import { logout } from '../ducks/auth'


function* fetchUserWatchFlow() {
  try {
    const response = yield call(getTokenOwner);
    yield put(fetchUserSuccess(response));
  } catch (e) {
    yield put(fetchUserFailure(e));
    yield put(logout());
  }
}

export function* fetchUserWatch() {
  yield takeEvery(fetchUserRequest.toString(), fetchUserWatchFlow);
}
