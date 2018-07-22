import {takeEvery, call, put} from 'redux-saga/effects';
import {getUserFollowers} from '../api';
import {followersRequest, followersSuccess, followersFailure} from '../ducks';
import requestFlow from './request';

function* getFollowers(action) {
   try {
      const response = yield call(requestFlow, getUserFollowers, action.payload);

      yield put(followersSuccess(response));
   } catch (error) {
      yield put(followersFailure(error.toString()));
   }
}

export function* fetchFollowers() {
   yield takeEvery(followersRequest.toString(), getFollowers);
}
