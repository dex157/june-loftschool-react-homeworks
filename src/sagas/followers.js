import { takeEvery, call, put } from 'redux-saga/effects';
import { getUserFollowers } from '../api';
import { requestFollowers, successFollowers, failureFollowers } from '../ducks';
import requestFlow from './request';

function* getFollowers(action) {
  try {
    const response = yield call(requestFlow, getUserFollowers, action.payload);

    yield put(successFollowers(response));
  } catch (error) {
    yield put(failureFollowers(error.toString()));
  }
}

export function* fetchFollowers() {
  yield takeEvery(requestFollowers.toString(), getFollowers);
}
