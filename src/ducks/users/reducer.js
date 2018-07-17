import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  fetchSelfRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions'

const data = handleActions(
  {
    [fetchSelfRequest]: () => null,
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: (_, { payload }) => payload,
    [fetchUserFailure]: () => null
  },
  null
)

const fetched = handleActions(
  {
    [fetchSelfRequest]: () => false,
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => true
  },
  false
)

const error = handleActions(
  {
    [fetchSelfRequest]: () => null,
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: () => null,
    [fetchUserFailure]: (_, { payload }) => payload
  },
  null
)

export default combineReducers({ data, fetched, error })
