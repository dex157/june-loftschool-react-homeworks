import {
  getUserRequest,
  getUserOwnerRequest,
  getUserSuccess,
  getUserFailure
} from '../ducks/user';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';
import requestFlow from './request';

function* userFlow(action) {
  try {
    let data;
    if (action.type === getUserRequest.toString()) {
      data = yield call(requestFlow, getUserInformation, action.payload);
    }
    if (action.type === getUserOwnerRequest.toString()) {
      data = yield call(requestFlow, getTokenOwner);
    }
    yield put(getUserSuccess(data.data));
  } catch (err) {
    yield put(getUserFailure(err.message));
  }
}

export function* fetchUserWatch() {
  yield takeEvery([getUserRequest, getUserOwnerRequest], userFlow);
}
