import { fork, takeEvery, take, put, call, select } from 'redux-saga/effects';
import { setTokenApi, clearTokenApi, getTokenOwner } from '../api';
import { authorize, logout, getIsAuthorized } from '../ducks/auth';
import { fetchUserSuccess, fetchUserFailure } from '../ducks/users';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from '../localStorage';

export function* authFlow() {
  const isAuthorized = yield select(getIsAuthorized);
  console.log(`isAuthorized ${isAuthorized}`);
  const localStorageToken = yield call(getTokenFromLocalStorage);
  console.log(`localStorageToken ${localStorageToken}`);
  let token;

  if (!isAuthorized && localStorageToken) {
    token = localStorageToken;

    yield put(authorize());
  } else {
    const action = yield take(authorize);
    token = action.payload;
    console.log(`token ${token}`);
  }

  if (token) {
    yield call(setTokenApi, token);
    try {
      const response = yield call(getTokenOwner);
      console.log(response.data);
      if (response) {
        yield call(setTokenToLocalStorage, token);
        yield put(fetchUserSuccess(response));
      }
    } catch (error) {
      yield put(logout());
      yield put(fetchUserFailure(error));
    }
  }

  yield take(logout);

  yield call(removeTokenFromLocalStorage);
  yield call(clearTokenApi);
}

export function* authWatch() {
  yield fork(authFlow);
  yield takeEvery(authorize, authFlow);
}
