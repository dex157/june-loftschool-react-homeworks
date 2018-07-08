import { fork } from 'redux-saga/effects';
// import { fetchUserWatch } from './users';
import { authFlow } from './auth';

export default function*() {
  yield fork(authFlow);
  // yield fork(fetchUserWatch);
}
