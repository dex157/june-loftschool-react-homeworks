import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';
import { requestUser, successUser, failureUser } from '../ducks';
import requestFlow from './request';

function* getUser(action) {
  try {
    let response;

    if (action.payload) {
      response = yield call(requestFlow, getUserInformation, action.payload);
    } else {
      response = yield call(requestFlow, getTokenOwner);
    }
    yield put(successUser(response));
  } catch (error) {
    console.log(error);
    yield put(failureUser(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(requestUser.toString(), getUser);
}
