import { takeEvery, put, call, select } from 'redux-saga/effects';
import { authorize } from 'ducks/auth';
import { requestFlow } from './request';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../ducks/users'
import { getTokenOwner, getUserInformation, getUserFollowers, getUserRepos } from '../api';
import {
    getTokenFromLocalStorage
  } from 'localStorage';


export default function* fetchUserWatch() {
    yield takeEvery(authorize, fetchUser);
    yield takeEvery(authorize, fetchUser);
    yield takeEvery(authorize, fetchFollowers);
   }

function* fetchUser() {
    const token = yield call(getTokenFromLocalStorage);
    const result = yield call (requestFlow(getTokenOwner, token));
}

function* fetchFollowers() {
    const result = requestFlow();
}