import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';
import { requestUser, successUser, failureUser } from '../ducks';

function* getUser(action) {
  try {
    console.log('getUser');
    console.log(action);
    if (action.payload) {
      console.log('^^^^^^^^');
      const response = yield call(getUserInformation, action.payload);

      yield put(successUser(response));
    } else {
      console.log('***********');
      const response = yield call(getTokenOwner);

      yield put(successUser(response));
    }
  } catch (error) {
    yield put(failureUser(error.toString()));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(requestUser.toString(), getUser);
}
