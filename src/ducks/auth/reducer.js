import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { authorize, logout } from './actions'

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
)

export default combineReducers({ isAuthorized })