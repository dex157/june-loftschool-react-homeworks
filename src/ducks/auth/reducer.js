import { handleActions } from 'redux-actions';
import { authorize, logout } from './actions';
import { combineReducers } from 'redux';

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);

export default combineReducers({ isAuthorized });
