import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserInformation, getTokenOwner } from '../api'
import {
  fetchSelfRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from 'ducks/users'
import requestFlow from './request'

function* fetchUserSaga(action) {
  try {
    let response

    if (action.type === fetchSelfRequest().type) {
      response = yield call(requestFlow, getTokenOwner)
    } else {
      response = yield call(requestFlow, getUserInformation, action.payload)
    }

    yield put(fetchUserSuccess(response.data))
  } catch (error) {
    yield put(fetchUserFailure(error.toString()))
  }
}

export function* fetchUserWatch() {
  yield takeLatest([fetchSelfRequest, fetchUserRequest], fetchUserSaga)
}
