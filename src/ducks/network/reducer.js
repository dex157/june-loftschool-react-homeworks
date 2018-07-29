import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { networkError, clearNetworkErrors } from './actions'

const error = handleActions(
  {
    [networkError]: (_, { payload }) => payload,
    [clearNetworkErrors]: () => null
  },
  null
);

export default combineReducers({ error })