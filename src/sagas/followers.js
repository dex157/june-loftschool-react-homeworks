import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from 'ducks/followers';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserFollowers } from 'api';
import requestSaga from './request';

function* fetchFollowersSaga(action) {
  try {
    const response = yield call(requestSaga, getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(response.data));
  } catch (error) {
    yield put(fetchFollowersFailure(error.toString()));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
