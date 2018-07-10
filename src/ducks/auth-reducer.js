import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  authRequest,
  authSuccess,
  authFailure,
} from './auth-actions';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const authStatus = handleActions(
  {
    [authSuccess.toString()]: (_state, action) => action.payload
  },
  false,
);

const loadingState = handleActions(
  {
    [authRequest.toString()]: () => LOADING_STATE.loading,
    [authSuccess.toString()]: () => LOADING_STATE.success,
    [authFailure.toString()]: () => LOADING_STATE.failure,
  },
  LOADING_STATE.idle,
);

const error = handleActions(
  {
    [authFailure.toString()]: (_state, action) => action.payload,
  },
  false,
);

export const authorize = handleActions(
  {
    /*[authRequest.toString()]: (_state, action) => action.payload*/
  },
  false,
);

export const logout = handleActions(
  {
    /*[authRequest.toString()]: (_state, action) => action.payload*/
  },
  false,
);

export const getIsAuthorized = handleActions(
  {
    /*[authRequest.toString()]: (_state) => _state,*/
  },
  false,
);

export default combineReducers({
  /*authStatus: authStatus,
  loadingState,
  error,*/
  authorize,
  logout,
  getIsAuthorized,


});
