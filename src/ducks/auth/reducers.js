import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { authorize, logout } from './actions';

const isAuthorized = handleActions(
  {
    [authorize.toString()]: () => true,
    [logout.toString()]: () => false
  },
  false
);

export default combineReducers({ isAuthorized });
