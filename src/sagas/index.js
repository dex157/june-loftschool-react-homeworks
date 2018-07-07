import { fork } from 'redux-saga/effects'
import { authFlow } from './auth'
import { fetchFollowersWatch } from './followers'
import { fetchUserWatch } from './users'

export default function*() {
  yield fork(authFlow)
  yield fork(fetchFollowersWatch)
  yield fork(fetchUserWatch)
}
