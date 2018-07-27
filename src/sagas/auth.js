import { take, put, call, select } from 'redux-saga/effects'
import { setTokenApi, clearTokenApi } from 'api'
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from 'localStorage'
import { authorize, logout, getIsAuthorized } from 'ducks/auth'

export function* authFlow() {
  while (true) {
    let isAuthorized = yield select(getIsAuthorized)
    const localStorageToken = yield call(getTokenFromLocalStorage)

    let token

    if (!isAuthorized && localStorageToken) {
      token = localStorageToken
      yield put(authorize())
    } else {
      const action = yield take(authorize)
      token = action.payload
    }

    yield call(setTokenApi, token)
    yield call(setTokenToLocalStorage, token)

    yield take(logout)

    yield call(removeTokenFromLocalStorage)
    yield call(clearTokenApi)
  }
}
