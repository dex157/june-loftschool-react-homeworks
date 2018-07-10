import { takeEvery, put, call } from 'redux-saga/effects';
import { authorize } from '../ducks/auth';
import { requestFlow } from './request';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../ducks/users';

import {
  getTokenOwner,
  getUserInformation
} from '../api';

function* authorizeWorker() {
  try {
    yield put(fetchTokenOwnerRequest());
    const result = yield call(requestFlow, getTokenOwner);
    yield put(fetchUserSuccess(result.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* getUserInfoWorker(action) {
  try {
    const result = yield requestFlow (getUserInformation, action.payload);
    yield put(fetchUserSuccess(result.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* tokenOwnerWorker() {
  try {
    const result = yield call(requestFlow, getTokenOwner);
    yield put(fetchUserSuccess(result.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeEvery(authorize, authorizeWorker);
  yield takeEvery(fetchTokenOwnerRequest, tokenOwnerWorker);
  yield takeEvery(fetchUserRequest, getUserInfoWorker);
}
