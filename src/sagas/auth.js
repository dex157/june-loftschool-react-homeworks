import { call, put, takeEvery } from 'redux-saga/effects';
import { getTokenOwner, setTokenApi, clearTokenApi } from '../api';
import { authRequest, authSuccess, authFailure } from '../ducks';

function* auth(action) {
  console.log('@@@auth@@@');
  console.log('action =', action);
  try {
    setTokenApi(action.payload);

    const response = yield call(getTokenOwner);

    console.log('response =', response);

    yield put(authSuccess);
  } catch (e) {
    clearTokenApi();
    yield put(authFailure);
  }
}

export function* authFlow() {
  yield takeEvery(authRequest.toString(), auth);
}
