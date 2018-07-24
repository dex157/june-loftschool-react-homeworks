import { take, put, call, select } from 'redux-saga/effects';
import { setTokenApi, clearTokenApi } from 'api';
import { authorize, logout, isAuthorized } from 'ducks/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from 'localStorage';

export default function* authFlow() {
  while (true) {
    const authorized = yield select(isAuthorized); /* boolean */
    const localStorageToken = yield call(getTokenFromLocalStorage);

    let token;

    if (!authorized && localStorageToken) {
      token = localStorageToken;
      yield put(authorize());
    } else {
      const action = yield take(authorize);
      token = action.payload;
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);

    yield take(logout);

    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}
