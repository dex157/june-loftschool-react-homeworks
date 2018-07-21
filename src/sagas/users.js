import {takeLatest, call, put} from 'redux-saga/effects';
import {getTokenOwner, getUserInformation} from '../api';
import {userRequest, userSuccess, userFailure} from '../ducks';
import requestFlow from './request';

function* getUser(action) {
   try {
      let response;

      if (action.payload) {
         response = yield call(requestFlow, getUserInformation, action.payload);
      } else {
         response = yield call(requestFlow, getTokenOwner);
      }
      yield put(userSuccess(response));
   } catch (error) {
      yield put(userFailure(error));
   }
}

export function* fetchUserWatch() {
   yield takeLatest(userRequest.toString(), getUser);
}
