import { fork } from 'redux-saga/effects';
import { fetchUserWatch } from './users';
import { fetchFollowersWatch } from './followers'
import { authFlow } from './auth';

export default function*() {
  yield fork(authFlow);
  yield fork(fetchFollowersWatch)
  yield fork(fetchUserWatch);
}