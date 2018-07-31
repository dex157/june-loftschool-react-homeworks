import {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFailure
} from '../ducks/followers';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserFollowers } from '../api';
import requestFlow from './request';

function* fetchFollowersSaga(action) {
  try {
    const response = yield call(requestFlow, getUserFollowers, action.payload);
    yield put(getFollowersSuccess(response.data));
  } catch (error) {
    yield put(getFollowersFailure(error.message));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(getFollowersRequest, fetchFollowersSaga);
}
