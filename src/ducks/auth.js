import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';

const { authorize, logout } = createActions('AUTHORIZE', 'LOGOUT');

const getIsAuthorized = state => state.auth.isAuthorized;

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);

export { authorize, logout, getIsAuthorized };

export default combineReducers({ isAuthorized });
