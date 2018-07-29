import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchOwnerRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../ducks/user';
import { getTokenOwner, getUserInformation } from '../api';
import requestSaga from './request';

function* fetchUserSaga(action) {
  try {
    let response;
    if (action.type === fetchOwnerRequest().type) {
      response = yield call(requestSaga, getTokenOwner);
    } else
      response = yield call(requestSaga, getUserInformation, action.payload);

    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest([fetchUserRequest, fetchOwnerRequest], fetchUserSaga);
}
