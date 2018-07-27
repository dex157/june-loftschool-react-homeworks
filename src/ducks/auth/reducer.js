import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { authorize, logout } from './action';

const authorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);

export default combineReducers({ authorized });
