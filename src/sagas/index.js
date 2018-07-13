import { fork } from 'redux-saga/effects';
import { fetchUserWatch } from './users';
import { authWatch } from './auth';
import { fetchFollowersWatch } from './followers';

export default function*() {
  yield fork(authWatch);
  yield fork(fetchUserWatch);
  yield fork(fetchFollowersWatch);
}
