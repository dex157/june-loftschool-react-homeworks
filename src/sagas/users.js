import { takeEvery, call, put } from 'redux-saga/effects';
import { getTokenOwner } from '../api';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../ducks/users';

function* fetchUserFlow() {
  try {
    const response = yield call(getTokenOwner);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeEvery(fetchUserRequest.toString(), fetchUserFlow);
}
