import { call, put, takeEvery } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../ducks/users';

function* fetchUserSaga(action) {
  try {
    let response;

    if (action.type === fetchTokenOwnerRequest().type) {
      response = yield call(getTokenOwner);
    } else {
      response = yield call(getUserInformation, action.payload);
    }

    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.toString()));
  }
}

export function* fetchUserWatch() {
  yield takeEvery([fetchTokenOwnerRequest, fetchUserRequest], fetchUserSaga);
}
