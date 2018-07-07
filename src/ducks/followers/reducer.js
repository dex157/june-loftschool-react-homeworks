import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions'

const data = handleActions(
  {
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: (_, { payload }) => payload
  },
  null
)

const fetching = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
)

const error = handleActions(
  {
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: () => null,
    [fetchFollowersFailure]: (_, { payload }) => payload
  },
  null
)

export default combineReducers({ data, fetching, error })
