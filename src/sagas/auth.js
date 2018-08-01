import { take, put, call, select } from 'redux-saga/effects'
import { setTokenApi, clearTokenApi } from '../api'
import { authorize, logout } from '../ducks/auth/actions'
import { getIsAuthorized } from '../ducks/auth/reducer'
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from '../localStorage'

function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized); /* boolean */
    const localStorageToken = yield call(getTokenFromLocalStorage);

    let token;

    if (!isAuthorized && localStorageToken) {
      token = localStorageToken;
      yield put(authorize())
    } else {
      const action = yield take(authorize);
      token = action.payload
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);

    yield take(logout);

    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi)
  }
}

export default authFlow;