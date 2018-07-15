import { takeEvery, call, put } from 'redux-saga/effects';
import { getTokenOwner } from '../api';
import { requestUser, successUser, failureUser } from '../ducks';

function* getUser() {
  try {
    const response = yield call(getTokenOwner);

    yield put(successUser(response));
  } catch (error) {
    yield put(failureUser(error.toString()));
  }
}

export function* fetchUserWatch() {
  yield takeEvery(requestUser.toString(), getUser);
}
